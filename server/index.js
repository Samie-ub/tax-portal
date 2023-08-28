require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const userFormRoute = require("./routes/userForm");
const passwordResetRoutes = require("./routes/passwordReset");
const accountResetRoute = require("./routes/account-reset");
const changePasswordRoute = require("./routes/changePassword");

// database connection
connection();

// middlewares
app.use(express.json());
const corsOpts = {
    origin: 'https://tax-portal-frontend.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOpts));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/userform", userFormRoute);
app.use("/api/password-reset", passwordResetRoutes);
app.use("/api/account", accountResetRoute);
app.use("/api/setting", changePasswordRoute);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
