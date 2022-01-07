import React, { useEffect } from "react";
import axios from "axios";
import {
  Paper,

} from "@mui/material";
import TableMUI from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Details = ({ inputValues, setInputValues }) => {
    useEffect(() => {
        axios.get('http://localhost:8081/' + inputValues.id)
      .then(function (response) {
        setInputValues((prev) => ({ ...prev, "data":  response.data}));
      })
      .catch(function (error) {
        console.log(error);
      });
    }, []);

return (
    <Paper>
        <TableContainer component={Paper}>
      <TableMUI sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">State ID</TableCell>
            <TableCell align="right">State Code</TableCell>
            <TableCell align="right">Country ID</TableCell>
            <TableCell align="right">Country Code</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Longitude ID</TableCell>
            <TableCell align="right">Wiki Data ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inputValues.data.map((value, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {value.id}
              </TableCell>
              <TableCell align="right">{value.name}</TableCell>
              <TableCell align="right">{value.state_id}</TableCell>
              <TableCell align="right">{value.state_code}</TableCell>
              <TableCell align="right">{value.country_id}</TableCell>
              <TableCell align="right">{value.country_code}</TableCell>
              <TableCell align="right">{value.latitude}</TableCell>
              <TableCell align="right">{value.longitude}</TableCell>
              <TableCell align="right">{value.wikiDataId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMUI>
    </TableContainer>
    </Paper>
    );
};

export default Details;