const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const Joi = require("joi");


// Change user password
router.post("/change-password", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { error } = validatePasswordChange(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const validPassword = await bcrypt.compare(
      req.body.currentPassword,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid current password" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.newPassword, salt);

    user.password = hashPassword;
    await user.save();

    res.status(200).send({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validatePasswordChange = (data) => {
  const schema = Joi.object({
    currentPassword: Joi.string().required().label("Current Password"),
    newPassword: Joi.string().required().label("New Password"),
  });
  return schema.validate(data);
};

module.exports = router;
