import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Dropdown from "../Dashboard/Dropdown";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div className="header-dash bg-color-secondary">
      <nav className="navbar">
      <a href="">
                <img src="./Assets/logo.png" alt="" />
              </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#FFFFFF" }} />
          ) : (
            <FaBars size={30} style={{ color: "#FFFFFF" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Grid container className="dash_nav">
            <Grid item lg={6}>
            </Grid>
            <Grid item lg={5}>
              <Grid container justifyContent={'space-between'} alignItems={'center'}>
                <Grid item lg={5.5}>
                  <div className="dash_search">
                    <span className="search_icon">
                      <img src="./Assets/search.png" alt="" />
                    </span>
                    <input type="text" placeholder="Search" />
                  </div>
                </Grid>
                <Grid item lg={5.5}>
                  <Dropdown />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;