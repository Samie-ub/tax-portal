import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import DashboardNav from "../Navbar/DashboardNav";
import DashSidebar from "./DashSidebar";
import FormValidation from "./FormValidation";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/session-expired");
  };
  const INACTIVITY_THRESHOLD = 900000; // 1 minute

  let inactivityTimer;

  // Function to log out the user due to inactivity
  function logoutDueToInactivity() {
    console.log("User has been logged out due to inactivity.");
    handleLogout();
  }

  // Reset the inactivity timer
  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(logoutDueToInactivity, INACTIVITY_THRESHOLD);
  }

  // Update the inactivity timer whenever there's user activity
  function updateUserActivity() {
    if (window.location.pathname !== "/login") {
      resetInactivityTimer();
    }
  }

  document.addEventListener("mousemove", updateUserActivity);
  document.addEventListener("keydown", updateUserActivity);
  document.addEventListener("scroll", updateUserActivity);

  // Start the inactivity timer when the page loads
  resetInactivityTimer();
  return (
    <div className="dashboard_main">
      <Grid sx={{ display: { xs: "block", md: "none" } }}>
        <DashboardNav />
      </Grid>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item lg={2}>
          <DashSidebar />
        </Grid>
        <Grid item lg={9}>
          <FormValidation />
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
