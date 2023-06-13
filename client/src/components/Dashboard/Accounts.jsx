import React from "react";
import DashboardNav from "../Navbar/DashboardNav";
import DashSidebar from "./DashSidebar";
import { Grid } from "@mui/material";
import "./Dashboard.css";
import AccountForm from "./AccountForm";

function Accounts() {
  return (
    <div className="dashboard_main">
      <DashboardNav />
      <DashSidebar />
      <Grid container justifyContent={"space-between"}>
        <Grid item lg={2}></Grid>
        <Grid item lg={9}>
         <AccountForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default Accounts;
