import React from "react";
import Navbar from "../Navbar/Navbar";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Grid from '@mui/material/Grid';
import "./Home.css";
import Footer from "../footer/Footer";
import AboutCard from "../card/AboutCard";
import { useNavigate } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Faqs from "../Faqs/Faqs";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Grid container rowSpacing={1} alignItems="center" justifyContent="center" style={{marginTop:"5rem"}} className="home-bag">
        <Grid item xs={10} lg={5} className="mobile-align">
        <p className="home_p">
              Pay Tax Any Where <br />{" "}
              <span className="home_text">Any Time </span>
            </p>
            <p className="home-para">
              Our Services are free and will help you in all
            </p>
            <div className="mobile-h-align">

            <button className="home-btn-two" onClick={() => navigate('/video')}>
            <PlayCircleIcon className="btn-icon" /> Play Video
          </button>
            </div>
        </Grid>
        <Grid item lg={5}>
        <img className="home-img" src="./Assets/wome.png" alt="home" />
        </Grid>
      </Grid>
      <AboutCard/>
      <Faqs/>
      <Carousel/>
      <Footer/>
    </>
  );
}

export default Home;
