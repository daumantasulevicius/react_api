import React, { useState } from "react";
import { Grid, Box } from "@mui/material";

import NewRecord from "../components/NewRecord";

const NewRecordPage = () => {
    const [inputValues, setInputValues] = useState({
        name : "",
        stateID : 0,
        stateCode : "",
        countryID : 0,
        countryCode : "",
        latititude : 0,
        longitude : 0,
        wikiData : ""
      });

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NewRecord
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

export default NewRecordPage;