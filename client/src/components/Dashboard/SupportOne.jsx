import { Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SupportOne() {
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
    <div className="support_form_main">
      <p className="account-form-p">Support</p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid container justifyContent="space-evenly" gap={1}>
          <Grid item lg={5.5} xs={12} sm={12}>
            <label htmlFor="name">Full name</label>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Please enter your full name"
            />
          </Grid>
          <Grid item lg={5.5} xs={12} sm={12}>
            <label htmlFor="email"> Email</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Please enter your email"
            />
          </Grid>
          <hr />
          <Grid item lg={12} sm={6}>
            <label htmlFor="text">Subject</label>
            <br />
            <textarea
              id="w3review"
              name="subject"
              value={form.subject}
              required
              onChange={handleChange}
              rows="4"
              cols="50"
            ></textarea>
          </Grid>
          <Grid item lg={12} sm={6}>
            <label htmlFor="text">Message</label>
            <br />
            <textarea
              id="w3review"
              name="message"
              value={form.message}
              required
              onChange={handleChange}
              rows="4"
              cols="50"
            ></textarea>
          </Grid>
        </Grid>
        <Grid container justifyContent="start">
          <Grid item lg={4} sm={12} xs={12}>
            <input
              onClick={showToastMessage}
              type="submit"
              value="Send"
              className="acount-form-button-one"
            />
            <ToastContainer />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
export default SupportOne;
