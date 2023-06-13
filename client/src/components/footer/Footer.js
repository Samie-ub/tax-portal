import React from "react";
import "./Footer.css";
import CallIcon from "@mui/icons-material/Call";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <div className="footer_root">
      <Grid container justifyContent={'center'}>
        <Grid item xs={12} lg={12} >
        <div className="footer_container">
        <div className="footer_text">
          <h2 className="footer-text-h2">
            <span className="span-t">T</span> Taxslayer Portal
          </h2>
          <div>
            <Grid container justifyContent={'center'}>
              <Grid item xs={11} lg={12}>
              <p className="footer-p-one">Keep Up To Date</p>
            <p className="footer-p-two">
              join our newsletter for regular updates. no spam
            </p>
              </Grid>
            </Grid>
          
          </div>
          <div>
            <p className="email-p">Enter Your Email</p>
              <Grid container justifyContent={'center'}>
                <Grid item xs={11} lg={12}>
            <div className="footer_align">
                <input
                className="footer_email"
                type="email"
                placeholder="taxslayerportal@gamil.com"
                required
              />
              <button className="footer_btn">Subscribe</button>
              
            </div>
                </Grid>
              </Grid>
          </div>
        </div>
        <div className="footer_text row-direction">
          <h4 className="footer-heding-two">Taxslayer Portal</h4>
          <a href="#" className="footer-text-list">
            Vission
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
          2023 ©<span>Taxslayer Portal</span>
        </p>
      </div>
        </Grid>
      </Grid>
    
    </div>
  );
}

export default Footer;
