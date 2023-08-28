import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
function FormValidation() {
  const navigate = useNavigate();
  return (
    <div className="form_main">
      <div>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            textAlign: { xs: "center", md: "inherit" },
            marginBottom: { xs: "40vh", md: "auto" },
          }}
        >
          <Grid item xs={12} md={12} lg={5}>
            <p className="form_validation_p">
              Welcome back!{" "}
              <span className="form_validation_span">
                {" "}
                Let's finish your 2023 tax return.
              </span>{" "}
            </p>
          </Grid>
          <Grid
            item
            sx={{ display: { xs: "none", md: "block" } }}
            xs={11}
            md={12}
            lg={5}
          >
            <img
              src="./Assets/laptop.png"
              alt="laptop"
              className="form_validation_img"
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: { xs: "flex", md: "block" },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <button className="next_btn" onClick={() => navigate("/form")}>
            CONTINUE
          </button>
        </Grid>
      </div>
    </div>
  );
}
export default FormValidation;
