import React, { useState } from "react";
import { Grid, Box } from "@mui/material";

import Table from "../components/Table";

const TablePage = () => {
    const [inputValues, setInputValues] = useState({
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