const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware"); // Import your authentication middleware
const {User} = require("../models/user");
const Joi = require("joi");

// Update account information
router.put("/update-account", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id); // Get user from authentication middleware
    if (!user) return res.status(400).send({ message: "User not found" });

    const { error } = validateUpdate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    if (req.body.fullName) {
      user.fullName = req.body.fullName;
    }

    if (req.body.email) {
      user.email = req.body.email;
    }

    if (req.body.phoneNumber) {
      user.phone = req.body.phoneNumber;
    }


    await user.save();

    res.status(200).send({ message: "Account information updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validateUpdate = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().label("Full Name"),
    email: Joi.string().email().label("Email"),
    phoneNumber: Joi.number().label("Phone Number"),
  });
  return schema.validate(data);
};

module.exports = router;