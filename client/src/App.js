import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Video from "./components/Video/Video";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/Contact/Contact";
import Signup from "./Signin-Signup/components/Singup/index";
import Login from "./Signin-Signup/components/Login/index";
import EmailVerify from "./Signin-Signup/components/EmailVerify/index";
import ForgotPassword from "./Signin-Signup/components/ForgotPassword/index";
import PasswordReset from "./Signin-Signup/components/PasswordReset/index";
import Otp from "./Signin-Signup/components/Otp/Otp";
import "./App.css";
import Setting from "./components/Dashboard/Setting";
import Notification from "./components/Dashboard/Notification";
import Support from "./components/Dashboard/Support";
import Accounts from "./components/Dashboard/Accounts";
import Form from "./components/Dashboard/FormSide/Form";
import Session from "./components/session/Session";
import Loader from "./components/loader/Loader";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const user = localStorage.getItem("token");
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // After 3 seconds, set isLoading to false
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
       {isLoading ? <Loader /> : <>
        <Router>
          {/* Navbar Routings */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Video />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />

            {/* Dashboard Routings */}
            {user ? (
              <>
                <Route path="/dashboard" exact element={<Dashboard />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/support" element={<Support />} />

                <Route path="/form" element={<Form />} />
                <Route path="/session-expired" element={<Session />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/phone-verify" element={<Otp />} />
               
              </>
            ) : (
              <Route
                path="/dashboard"
                element={<Navigate replace to="/login" />}
              />
            )}
             <Route
                  path="/password-reset/:id/:token"
                  element={<PasswordReset />}
                />
              <Route
                  path="/users/:id/verify/:token"
                  element={<EmailVerify />}
                />
                
          </Routes>
        </Router>
      </>}
      
    </div>
  );
}

export default App;
