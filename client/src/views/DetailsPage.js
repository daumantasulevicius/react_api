import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import Details from "../components/Details";

const DetailsPage = () => {
    const location = useLocation();
    const { id } = location.state;
    const [inputValues, setInputValues] = useState({
        id : id,
        data: []
      });

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Box py={4}>
          <Grid container spacing={2}>
            <Grid item xm={8}>
              <Details
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default DetailsPage;