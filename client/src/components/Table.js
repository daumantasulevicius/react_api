import React, { useEffect } from "react";
import axios from "axios";
import {
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import TableMUI from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Table = ({ inputValues, setInputValues }) => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/',)
      .then(function (response) {
        setInputValues((prev) => ({ ...prev, "data":  response.data}));
      })
      .catch(function (error) {
        console.log(error);
      });
    }, []);

    function getDetails(reqID){
        navigate('/details', {state:{id: reqID}});
    }
    function goToAddPage(){
        navigate('/add');
    }
return (
    <div>
    <Paper>
        <TableContainer component={Paper}>
      <TableMUI sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">State ID</TableCell>
            <TableCell align="right">State Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inputValues.data.map((value, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => getDetails(value.id)}
            >
              <TableCell component="th" scope="row">
                {value.id} 
              </TableCell>
              <TableCell align="right">{value.name}</TableCell>
              <TableCell align="right">{value.state_id}</TableCell>
              <TableCell align="right">{value.state_code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMUI>
    </TableContainer>
        
    </Paper>
    <Button
        variant = "contained"
        onClick={() => goToAddPage()}>
            Pridėti
        </Button>
    </div>
    );
};

export default Table;