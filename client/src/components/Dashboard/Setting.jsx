import React from "react";
import DashboardNav from "../Navbar/DashboardNav";
import DashSidebar from "./DashSidebar";
import { Grid } from "@mui/material";
import SettingOne from "./SettingOne";
function Setting() {
  return (
    // setting try
    <div className="dashboard_main">
      <Grid sx={{ display: { xs: "block", md: "none" } }}>
        <DashboardNav />
      </Grid>
      <Grid
        container
        sx={{ justifyContent: { xs: "center", md: "space-between" } }}
        alignItems={"center"}
      >
        <Grid item xs={0} lg={2}>
          <DashSidebar />
        </Grid>
        <Grid item xs={11} lg={9}>
          <SettingOne />
        </Grid>
      </Grid>
    </div>
  );
}

export default Setting;
