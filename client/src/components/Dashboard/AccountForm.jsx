import { Grid } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AccountForm() {
  const initialData = {
    fullName: "",
    email: "",
    phoneNumber: "",
  };
  const [data, setData] = useState(initialData);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const phoneNumber = parseInt(data.phoneNumber);
      const updatedData = {};
      const areFieldsFilled = Object.values(updatedData).some((value) => value !== "");
      if (data.fullName !== "") {
        updatedData.fullName = data.fullName;
      }
      
      if (data.email !== "") {
        updatedData.email = data.email;
      }
      
      if (data.phoneNumber !== "") {
        updatedData.phoneNumber = data.phoneNumber;
      }
      const response = await axios.put(
        "https://tax-portal-backend.vercel.app/api/account/update-account",
         updatedData, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(initialData);
      toast.success("Account information updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error updating account information:", error);
      toast.error("there's a problem updating", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleReset = () => {
    // Reset input fields
    setData(initialData);
  };

  return (
    <div className="account_form_main">
      <p className="account-form-p">Account Setting</p>

      <Grid container justifyContent="space-between">
        <Grid item xs={12} lg={5} sm={12}>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={handleChange}
            value={data.fullName}
            required
          />
        </Grid>
        <Grid item xs={12} lg={5} sm={12}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />
        </Grid>
        <Grid item xs={12} lg={5} sm={12}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={handleChange}
            value={data.phoneNumber}
            required
          />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        className="acount-form-button"
      >
        <Grid item xs={12} lg={4} sm={5}>
          <button
            className="acount-form-button-one"
            onClick={handleUpdateProfile}
            disabled={!Object.values(data).some((value) => value !== "")}
          >
            Update Profile
          </button>
          <button className="acount-form-button-two" onClick={handleReset}>
            Reset
          </button>
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
}

export default AccountForm;
