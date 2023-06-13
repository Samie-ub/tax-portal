import { Grid } from "@mui/material";
import React, { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";

function AccountForm() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  return (
    <div className="account_form_main">
      <p className="account-form-p">Account Setting</p>
      <main>
        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />
          {image ? (
            <img src={image} width={130} height={130} alt={fileName} />
          ) : (
            <>
              <MdCloudUpload color="#1475cf" size={60} />
              <p className="upload-p">Upload your photo</p>
            </>
          )}
        </form>
      </main>
      <Grid container justifyContent="space-between">
        <Grid item lg={5} sm={12}>
          <label htmlFor="name">Full name</label>
          <input type="name" placeholder="Please enter your full name" />
        </Grid>
        <Grid item lg={5} sm={12}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Please enter your email" />
        </Grid>
        <Grid item lg={5} sm={12}>
          <label htmlFor="name">Username</label>
          <input type="name" placeholder="Please enter your username" />
        </Grid>
        <Grid item lg={5} sm={12}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Please enter your phone number"
            required
          />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        className="acount-form-button"
      >
        <Grid item lg={4} sm={5}>
          <button className="acount-form-button-one">Update Profile</button>
          <button className="acount-form-button-two">Reset</button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AccountForm;
