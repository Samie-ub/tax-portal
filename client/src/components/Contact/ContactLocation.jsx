import React from "react";
import { Grid } from "@mui/material";
function ContactLocation() {
  return (
    <div className="locaton_main">
      <Grid container justifyContent={"center"}>
        <Grid item xs={11} sm={11.5} lg={11.5}  textAlign="center">
          <p className="ourvalue_heading">Locations</p>
          <p className="ourvalue_top">Our Offices</p>
          <p className="value_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </Grid>
        <Grid item xs={11} lg={11.9} sm={11.5}>
          <Grid container justifyContent="space-evenly">
            <Grid item xs={12} lg={3}>
              <h3 className="location_h3">New York</h3>
              <p className="location_para">
                40 Gates Court <br /> Endicott, NY 13760
              </p>
              <p className="location_text">contact@taxpayercentral.com</p>
              <p className="location_text">+1 (203) 991-6988</p>
            </Grid>
            <Grid item lg={3}>
              <h3 className="location_h3">Illinois</h3>
              <p className="location_para">
                602 Annadale Drive <br /> Dekalb, IL 60115
              </p>
              <p className="location_text">contact@taxpayercentral.com</p>
              <p className="location_text">+1 (203) 991-6988</p>
            </Grid>
            <Grid item lg={3}>
              <h3 className="location_h3"> California</h3>
              <p className="location_para">
                96 NE. Delaware Lane <br /> Sacramento, CA 95820
              </p>
              <p className="location_text">contact@taxpayercentral.com</p>
              <p className="location_text">+1 (203) 991-6988</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactLocation;
