import React, { useState } from "react";
import DashboardNav from "../../Navbar/DashboardNav";
import Status from "./Status";
import { Grid } from "@mui/material";
import DashSidebar from "../DashSidebar";
function Form() {
  const [formStep, setFormStep] = useState(1);

  return (
    <div className="status_main">
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={12} lg={12}>
        <Grid sx={{ display: { xs: "block", md: "none" } }}>
        <DashboardNav />
      </Grid>
     
      <div className="tax_form_main">
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item lg={1}>
          <DashSidebar />
          </Grid>
          <Grid item xs={12} lg={9.5}>
            <Status formStep={formStep} setFormStep={setFormStep} />
          </Grid>
        </Grid>
      </div>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default Form;
