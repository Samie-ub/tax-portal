import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SettingOne() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    verifyPassword: "",
  });

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      if (formData.newPassword !== formData.verifyPassword) {
        alert("New password and verification do not match.");
        return;
      }

      const response = await axios.post(
        "https://tax-portal-backend.vercel.app/api/setting/change-password",
        {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      if (response.status === 200) {
        toast.success("Password updated successfully");
      } else {
        const data = await response.json();

        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred while changing the password.");
    }
  };

  return (
    <div className="setting_form_main">
      <h4 className="setting_heading">Change Password</h4>
      <Grid container justifyContent="start">
        <Grid item lg={8} sm={12}>
          <label htmlFor="currentPassword">Current Password</label>
          <input
        type="password"
        name="currentPassword"
        placeholder="Current Password"
        value={formData.currentPassword}
        onChange={handleChange}
      />
        </Grid>
        <Grid item lg={8} sm={12}>
          <label htmlFor="newPassword">New Password</label>
          <input
           type="password"
           name="newPassword"
           placeholder="New Password"
           value={formData.newPassword}
           onChange={handleChange}
          />
        </Grid>
        <Grid item lg={8} sm={12}>
          <label htmlFor="verifyPassword">Verify Password</label>
          <input
           type="password"
           name="verifyPassword"
           placeholder="Verify New Password"
           value={formData.verifyPassword}
           onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item lg={4} sm={5}>
          <button
            className="acount-form-button-one"
            onClick={handlePasswordChange}
          >
            Submit
          </button>
          <button
            className="acount-form-button-two"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </button>
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
}

export default SettingOne;
