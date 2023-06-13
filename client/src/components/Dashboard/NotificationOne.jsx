import React from "react";
import "./Dashboard.css";
import Switch from "@mui/material/Switch";
import { Grid } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
function NotificationOne() {
  const [checked, setChecked] = React.useState(true);
  const [blue, setBlue] = React.useState(true);
  const [box, setbox] = React.useState(true);
  const [open, setOpen] = React.useState(true);

  const handleOpen = (event) => {
    setbox(event.target.box);
  };
  const handleCheack = (event) => {
    setOpen(event.target.open);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleClick = (event) => {
    setBlue(event.target.blue);
  };
  return (
    <div className="setting_form_main">
      <h4 className="setting_heading">Notifications</h4>
      <Grid container justifyContent="space-between">
        <Grid item lg={6} sm={3}>
          <p>Email Notification:</p>
        </Grid>
        <Grid item lg={6} sm={3}>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Grid>
        <Grid item lg={6} sm={3}>
          <p>SMS Motification:</p>
        </Grid>
        <Grid item lg={6} sm={3}>
          <Switch
            blue={blue}
            onChange={handleClick}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Grid>
        <Grid item lg={6} sm={3}>
          <p>When you get Email:</p>
        </Grid>
        <Grid item lg={6} sm={3}>
        <Checkbox
      box={box}
      onChange={handleOpen}
      inputProps={{ 'aria-label': 'controlled' }}
    />
        </Grid>
        <Grid item lg={6} sm={3}>
          <p>When To Escalate Emails:</p>
        </Grid>
        <Grid item lg={6} sm={3}>
        <Checkbox
      open={open}
      onChange={handleCheack}
      inputProps={{ 'aria-label': 'controlled' }}
    />
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" className='acount-form-button'>
    <Grid item lg={4} sm={5}>
    <button className='acount-form-button-one'>Submit</button>
   <button  className='acount-form-button-two'>Cancel</button>
    </Grid>
   </Grid>
    </div>
  );
}

export default NotificationOne;
