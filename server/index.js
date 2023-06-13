require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const userFormRoute = require("./routes/userForm")
const passwordResetRoutes = require("./routes/passwordReset");

// database connection

connection();

// middlewares
app.use(express.json());
app.use(cors(
    {
        origin:["https://tax-portal-frontend.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/userform", userFormRoute);
app.use("/api/password-reset", passwordResetRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
