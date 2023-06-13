import { Grid } from '@mui/material'
import React from 'react'

function SettingOne() {
  return (
    <div className='setting_form_main'>
        <h4 className='setting_heading'>Change Passward</h4>
    <Grid container justifyContent="start">
        <Grid item lg={8} sm={12}>
            <label htmlFor="">Current Password</label>
            <input type="password" placeholder='Enter Password'/>
        </Grid>
        <Grid item lg={8} sm={12}>
            <label htmlFor="">New Password</label>
            <input type="password" placeholder='Enter New Password'/>
        </Grid>
        <Grid item lg={8} sm={12}>
            <label htmlFor="">Verify Password</label>
            <input type="password" placeholder='Password '/>
        </Grid>
    </Grid>
    <Grid container justifyContent="center">
        <Grid item lg={4} sm={5}>
        <button className='acount-form-button-one'>Submit</button>
   <button  className='acount-form-button-two'>Cancel</button>
        </Grid>
    </Grid>
    </div>
  )
}

export default SettingOne