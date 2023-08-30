import React from "react";
import DashboardNav from "../Navbar/DashboardNav";
import DashSidebar from "./DashSidebar";
import { Grid } from "@mui/material";
import "./Dashboard.css";
import AccountForm from "./AccountForm";

function Accounts() {
  return (
    <div className="dashboard_main">
       <Grid sx={{ display: { xs: "block", md: "none" } }}>
        <DashboardNav />
      </Grid>
      <Grid container justifyContent={"space-between"}
      alignItems={"center"} >
        <Grid item lg={2}>
        <DashSidebar />
        </Grid>
        <Grid item lg={9}>
         <AccountForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default Accounts;
