import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";

import NewRecord from "../components/NewRecord";

const NewRecordPage = () => {
    const [inputValues, setInputValues] = useState({
        name : "",
        stateID : 0,
        stateCode : "",
        countryID : 0,
        countryCode : "",
        latitude : 0,
        longitude : 0,
        wikiData : ""
      });

  return (
    <div>
      <div style={{backgroundColor: '#1976D2', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'}}>
      <Typography variant="h3" py={2} px={2} sx={{color: 'white'}}>
        New Record Form
        </Typography>
        </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '85vh'}}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center">
          <Box py={4}>
            <Grid container spacing={2}>
              <Grid item xm={8}>
                <NewRecord
                  inputValues={inputValues}
                  setInputValues={setInputValues}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default NewRecordPage;