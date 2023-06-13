import React from 'react'
import DashboardNav from "../Navbar/DashboardNav";
import DashSidebar from "./DashSidebar";
import { Grid } from "@mui/material";
import SettingOne from './SettingOne';
function Setting() {
  return (
    <div className="dashboard_main">
    <DashboardNav />
    <DashSidebar />
    <Grid container justifyContent={"space-between"}>
      <Grid item lg={2}></Grid>
      <Grid item lg={9}>
       <SettingOne />
      </Grid>
    </Grid>
  </div>
  )
}

export default Setting