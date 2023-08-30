import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@mui/material";
import "./Contact.css";
import ContactLocation from "./ContactLocation";
import Footer from "../footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const showToastMessage = () => {
    toast.success("Email Sucessfully Send !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const formRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    emailjs
      .send(
        "service_nh315n9",
        "template_3cm5nxf",
        {
          from_name: form.name,
          to_name: "portaltax25",
          from_email: form.email,
          to_email: "portaltax25@gmail.com",
          message: form.message,
          subject: form.subject,
        },
        "07bKgXU24wvSmXEnz"
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
            subject: "",
          });
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 2000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setShowPopup(false);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <main>
      <Navbar />

      <div className="contact-top-container">
        <form ref={formRef} onSubmit={handleSubmit}>
          <Grid
            container
            sx={{ justifyContent: { xs: "center", md: "space-evenly" } }}
          >
            <Grid item sm={11} xs={11} lg={5.5}>
              <p className="contact-p-main">Contact Us</p>
              <p className="contact-p-one">
                Feel free to get{" "}
                <span className="contact-p-span">
                  in touch <br /> with us.
                </span>{" "}
              </p>
              <p className="contact-p-two">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                autoComplete="off"
                className="input-field"
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                autoComplete="off"
                className="input-field"
              />
              <input
                name="subject"
                value={form.subject}
                required
                onChange={handleChange}
                placeholder="Subject"
                autoComplete="off"
                className="input-field"
              />
              <textarea
                name="message"
                value={form.message}
                required
                onChange={handleChange}
                className="textarea"
                placeholder="Your Message Here"
              ></textarea>
              <div className="contact-btton">
                <button
                  onClick={showToastMessage}
                  className="contact-btton-one"
                  type="submit"
                  value="Send"
                >
                  Send
                </button>
                <ToastContainer />
              </div>
            </Grid>
            <Grid item lg={5.5} sm={12}>
              <img
                className="contact_img"
                src="./Assets/home.png"
                alt="contact"
                style={{ width: "100%", marginTop: "2rem" }}
              />
            </Grid>
          </Grid>
        </form>
      </div>
      <ContactLocation />
      <Footer />
    </main>
  );
}

export default Contact;
