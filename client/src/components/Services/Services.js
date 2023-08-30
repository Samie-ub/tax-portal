import { Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import "./Services.css";
import Feature from "./Feature";
import Step from "./Step";
import Faqs from "../Faqs/Faqs";
import Footer from "../footer/Footer";
import Prising from "./Prising";
function Services() {
  return (
    <>
      <Navbar />
      <div>
        <Feature />
        <Step />
        <Prising />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default Services;
