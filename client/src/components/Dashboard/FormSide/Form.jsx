import React, { useState } from "react";
import DashboardNav from "../../Navbar/DashboardNav";
import Status from "./Status";
import { Grid } from "@mui/material";
import DashSidebar from "../DashSidebar";
function Form() {
  const [formStep, setFormStep] = useState(1);

  return (
    <div className="status_main">
       <Grid sx={{ display: { xs: "block", md: "none" } }}>
        <DashboardNav />
      </Grid>
      <DashSidebar />
      <div className="tax_form_main">
        <Grid container justifyContent={"space-between"}>
          <Grid item lg={1}></Grid>
          <Grid item lg={9.5}>
            <Status formStep={formStep} setFormStep={setFormStep} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Form;
