import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
import { Grid } from "@mui/material";





function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
    ]
  };
  return (
    <div className="slick-container">
      <h2 className="slick_top">See for yourself why we're <br/>
trusted by millions</h2>
<p className="slick_top_para">We've been helping people slay their taxes for over 50 years</p>
<Grid container>
  <Grid item xs={11.9} lg={12}>
  <Slider {...settings}>
   <div className="box">
    <h4 className="slick_text">Do Not Spend $$$ For<br/> Someone To Prepare<br/> Your Taxes!</h4>
    <p className="slick-p">The "guide me" feature ensures<br/> I won't miss anything. I also love<br/> the "help" feature, it's a great<br/> resource!</p>
    <p className="slick_card_text">— Jhon , TaxSlayer Customer</p>
   </div>
   <div className="box">
   <h4 className="slick_text">Do Not Spend $$$ For<br/> Someone To Prepare<br/> Your Taxes!</h4>
    <p className="slick-p">The "guide me" feature ensures<br/> I won't miss anything. I also love<br/> the "help" feature, it's a great<br/> resource!</p>
    <p className="slick_card_text">— Jhon , TaxSlayer Customer</p>
   </div>
   <div className="box">
   <h4 className="slick_text">Do Not Spend $$$ For<br/> Someone To Prepare<br/> Your Taxes!</h4>
    <p className="slick-p">The "guide me" feature ensures<br/> I won't miss anything. I also love<br/> the "help" feature, it's a great<br/> resource!</p>
    <p className="slick_card_text">— Jhon , TaxSlayer Customer</p>
   </div>
   <div className="box">
   <h4 className="slick_text">Do Not Spend $$$ For<br/> Someone To Prepare<br/> Your Taxes!</h4>
    <p className="slick-p">The "guide me" feature ensures<br/> I won't miss anything. I also love<br/> the "help" feature, it's a great<br/> resource!</p>
    <p className="slick_card_text">— Jhon , TaxSlayer Customer</p>
   </div>
   <div className="box">
   <h4 className="slick_text">Do Not Spend $$$ For<br/> Someone To Prepare<br/> Your Taxes!</h4>
    <p className="slick-p">The "guide me" feature ensures<br/> I won't miss anything. I also love<br/> the "help" feature, it's a great<br/> resource!</p>
    <p className="slick_card_text">— Jhon , TaxSlayer Customer</p>
   </div>
   <div className="box">
   <h4 className="slick_text">Do Not Spend $$$ For<br/> Someone To Prepare<br/> Your Taxes!</h4>
    <p className="slick-p">The "guide me" feature ensures<br/> I won't miss anything. I also love<br/> the "help" feature, it's a great<br/> resource!</p>
    <p className="slick_card_text">— Jhon , TaxSlayer Customer</p>
   </div>
   </Slider>
  </Grid>
</Grid>
    
    </div>
  );
}

export default Carousel;
