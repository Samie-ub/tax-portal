import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";
import CallIcon from "@mui/icons-material/Call";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Footer() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const showToastMessage = () => {
    toast.success("Subscribed Successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email) {
      alert("Please fill in the email field.");
      return;
    }
    setLoading(true);
    emailjs
      .send(
        "service_nh315n9",
        "template_0z3m7n3",
        {
          from_name: form.name,
          to_name: "portaltax25",
          from_email: form.email,
          to_email: "portaltax25@gmail.com",
        },
        "07bKgXU24wvSmXEnz"
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
          });
          showToastMessage(); // Show toast message on successful form submission
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="footer_root">
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} lg={12}>
          <div className="footer_container">
            <div className="footer_text_2">
              <h2 className="footer-text-h2">
                <span className="span-t">T</span> Tax Portal
              </h2>
              <div>
                <Grid container justifyContent={"center"}>
                  <Grid item xs={11} lg={12}>
                    <p className="footer-p-one">Keep Up To Date</p>
                    <p className="footer-p-two">
                      join our newsletter for regular updates. no spam
                    </p>
                  </Grid>
                </Grid>
              </div>
              <form ref={formRef} onSubmit={handleSubmit}>
                <p className="email-p">Enter Your Email</p>
                <Grid container justifyContent={"center"}>
                  <Grid item xs={11} lg={12}>
                    <div className="footer_align">
                      <input
                        className="footer_email"
                        type="email"
                        name="email" // Use "email" for name attribute
                        value={form.email}
                        onChange={handleChange}
                        placeholder="taxportal@gmail.com"
                        required
                        autoComplete="off"
                      />
                      <button className="footer_btn" type="submit" value="Send">
                        Subscribe
                      </button>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>
            <div className="footer_text row-direction">
              <div className="header_block">
                <h4 className="footer-heding-two">Taxslayer Portal</h4>
              </div>
              <div className="footer_text flex_wrap">
                <a href="#" className="footer-text-list">
                  Vision
                </a>
                <a href="#" className="footer-text-list">
                  Mission
                </a>
                <a href="#" className="footer-text-list">
                  About Us
                </a>
                <a href="#" className="footer-text-list">
                  News
                </a>
                <a href="#" className="footer-text-list">
                  Careers
                </a>
                <a href="#" className="footer-text-list">
                  Privacy Policy
                </a>
                <a href="#" className="footer-text-list">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="footer-split">
              <h2 className="footer-heding-three">Contact Us</h2>
              <div className="footer_last-item">
                <CallIcon className="footer-icon" />
                <p className="footer-text-list">+5814 816-848940</p>
              </div>
              <div className="footer_last-item">
                <MailOutlinedIcon className="footer-icon" />
                <p className="footer-text-list">taxslayerportal@gmail.com</p>
              </div>
              <div className="footer_last">
                <p className="last-p">Follow Us</p>
                <div className="split">
                  <div className="split" style={{ flexDirection: "row" }}>
                    <FacebookSharpIcon className="footer-icon-last" />{" "}
                    <p>Facebook</p>
                  </div>
                  <div className="split" style={{ flexDirection: "row" }}>
                    <InstagramIcon className="footer-icon-last" />
                    <p>Instagram</p>
                  </div>
                  <div className="split" style={{ flexDirection: "row" }}>
                    <TwitterIcon className="footer-icon-last" />
                    <p>Twitter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p className="copyright_para">
              2023 ©<span>Tax Portal</span>
            </p>
          </div>
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
}
export default Footer;
