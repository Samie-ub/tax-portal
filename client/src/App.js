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
import Contact from "./components/Contact/Contact"
import TaxForm from "./components/Dashboard/FormSide/TaxForm";
import StandardDeducton from "./components/Dashboard/FormSide/StandardDeducton";
import DigitalAssets from "./components/Dashboard/FormSide/DigitalAssets";
import Dependets from "./components/Dashboard/FormSide/Dependets";
import Income from "./components/Dashboard/FormSide/Income";
import Tax from "./components/Dashboard/FormSide/Tax";
import Payment from "./components/Dashboard/FormSide/Payment";
import Refund from "./components/Dashboard/FormSide/Refund";
import Amount from "./components/Dashboard/FormSide/Amount";
import ThirdForm from "./components/Dashboard/FormSide/ThirdForm";
import FormSign from "./components/Dashboard/FormSide/FormSign";
import Paid from "./components/Dashboard/FormSide/Paid";
import Signup from "./Signin-Signup/components/Singup/index";
import Login from "./Signin-Signup/components/Login/index";
import EmailVerify from "./Signin-Signup/components/EmailVerify/index";
import ForgotPassword from "./Signin-Signup/components/ForgotPassword/index";
import PasswordReset from "./Signin-Signup/components/PasswordReset/index";
import Otp from "./Signin-Signup/components/Otp/Otp";
import "./App.css";
import Setting from "./components/Dashboard/Setting"
import Notification from "./components/Dashboard/Notification";
import Support from "./components/Dashboard/Support"
import Accounts from "./components/Dashboard/Accounts";
function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <>
        <Router>
          {/* Navbar Routings */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Video />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Services />} />
            {/* Dashboard Routings */}
            {user ? (
              <>
                <Route path="/dashboard" exact element={<Dashboard />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/setting" element={<Setting/>}/>
                <Route path="/notification" element={<Notification/>} />
                <Route path="/support" element={<Support/>}/>

                <Route path="/taxform" element={<TaxForm />} />
                <Route path="/Digital" element={<DigitalAssets />} />
                <Route
                  path="/Standard-deduction"
                  element={<StandardDeducton />}
                />

                <Route path="/dependents" element={<Dependets />} />
                <Route path="/income" element={<Income />} />
                <Route path="/tax" element={<Tax />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/refund" element={<Refund />} />
                <Route path="/amount" element={<Amount />} />
                <Route path="/third" element={<ThirdForm />} />
                <Route path="/signhere" element={<FormSign />} />
                <Route path="/paid" element={<Paid />} />
              </>
            ) : (
              <Route
                path="/dashboard"
                element={<Navigate replace to="/login" />}
              />
            )}
            <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/phone-verify" element={<Otp />} />
            <Route
              path="/password-reset/:id/:token"
              element={<PasswordReset />}
            />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
