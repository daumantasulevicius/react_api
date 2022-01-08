import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";

import Table from "../components/Table";

const TablePage = () => {
    const [inputValues, setInputValues] = useState({
        data: []
      });

  return (
    <div>
      <div style={{backgroundColor: '#1976D2', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'}}>
      <Typography variant="h3" py={2} px={2} sx={{color: 'white'}}>
        List Page
        </Typography>
        </div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Box py={4}>
          <Grid container spacing={2}>
            <Grid item xm={8}>
              <Table
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

export default TablePage;