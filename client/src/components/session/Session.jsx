import React from 'react'
import { useNavigate } from "react-router-dom";

function Session() {
    const navigate = useNavigate();
    const naviateLogin = () => {
    
        navigate("/login");
      };
  return (
    <div className='session_container'>
        <h1>Session Expired Return To Login</h1>
        <div className="btn_container">
            <button className='next_btn' onClick={naviateLogin}>login</button>
        </div>
    </div>
  )
}

export default Session