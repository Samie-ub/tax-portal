const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const accessToken = token.split(" ")[1];
      const decodedToken = jwt.verify(accessToken, process.env.JWTPRIVATEKEY);

      const user = await User.findById(decodedToken._id);

      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Token verification error:", error.message);
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error("Authentication error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = authMiddleware;
