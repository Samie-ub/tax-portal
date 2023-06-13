import React from "react";
import { Grid } from "@mui/material";
import "../Dashboard.css";

function DigitalOne({ selectedValueDigital, handleCheckboxChangeDigital }) {
  return (
    <div className="status_form_main">
      <div className="digital_heading">
        <h1>Digital Assest</h1>
        <p className="digital_heading_blue">
          At any time during 2022, did you:
        </p>
        <p className="digital_heading_blue">See instructions</p>
      </div>
      <div className="spouse_box">
        <Grid container justifyContent={"space-evenly"} alignItems={"center"}>
          <Grid item lg={8}>
            <p className="didital_para">
              At any time during 2022, did you: (a) receive (as a reward, award,
              or payment for property or services); or (b) sell, exchange, gift,
              or otherwise dispose of a digital asset (or a financial interest
              in a digital asset)?
            </p>
          </Grid>
          <Grid item lg={0.5} className="digital_grid">
            <input
              type="checkbox"
              value="yes"
              checked={selectedValueDigital === "yes"}
              onChange={handleCheckboxChangeDigital}
            />
            <label>yes</label>
          </Grid>
          <Grid item lg={0.5} className="digital_grid">
            <input
              type="checkbox"
              value="no"
              checked={selectedValueDigital === "no"}
              onChange={handleCheckboxChangeDigital}
            />
            <label>No</label>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DigitalOne;
