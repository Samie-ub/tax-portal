import { Grid } from "@mui/material";
import React from "react";

function SupportOne() {
  return (
    <div className="support_form_main">
      <p className="account-form-p">Support</p>
      <Grid container justifyContent="space-evenly" gap={1}>
        <Grid item lg={5.5} sm={12}>
          <label htmlFor="name">Full name</label>
          <input type="text" placeholder="Please enter your full name" />
        </Grid>
        <Grid item lg={5.5} sm={12}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Please enter your email" />
        </Grid>
        <hr />
        <Grid item lg={12} sm={6}>
          <label htmlFor="text">Subject</label>
          <br />
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
        </Grid>
        <Grid item lg={12} sm={6}>
          <label htmlFor="text">Message</label>
          <br />
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
        </Grid>
      </Grid>
      <Grid container justifyContent="start">
        <Grid item lg={4} sm={5}>
          <button className="acount-form-button-one">Submit</button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SupportOne;
