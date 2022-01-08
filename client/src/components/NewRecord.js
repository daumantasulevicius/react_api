import React from "react";
import axios from "axios";
import {
  Paper,
  Box,
  FormControl,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewRecord = ({ inputValues, setInputValues }) => {
  
    const navigate = useNavigate();
    const handleInputChange = (e, field) => {
        const input = e.target.value;
        setInputValues({ ...inputValues, [field]: input });
    };

    function postAPI(){
        axios.post('http://localhost:8081/', 
            {name : inputValues.name, 
            state_id : inputValues.stateID,
            state_code : inputValues.stateCode,
            country_id : inputValues.countryID,
            country_code : inputValues.countryCode,
            latitude : inputValues.latitude,
            longitude : inputValues.longitude,
            wikiDataId : inputValues.wikiData
            })
        .then(function (response) {
            if(response.data === "Completed")
                navigate('/');
        })
        .catch(function (error) {
            console.log(error);
        });
    };

  return (
    <Paper style={{width: "600px"}}>
      <Box sx={{ padding: 2 }}>
        <FormControl>
          <Grid container>
            <Grid item sm={16} py={1}>
              <TextField
                label="Name"
                variant="outlined"
                required
                onChange={(e) => handleInputChange(e, "name")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={1}>
              <TextField
                label="State ID"
                variant="outlined"
                required
                onChange={(e) => handleInputChange(e, "stateID")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={1}>
              <TextField
                label="State Code"
                variant="outlined"
                required
                onChange={(e) => handleInputChange(e, "stateCode")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={1}>
              <TextField
                label="Country ID"
                variant="outlined"
                required
                onChange={(e) => handleInputChange(e, "countryID")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={1}>
              <TextField
                label="Country Code"
                variant="outlined"
                required
                onChange={(e) => handleInputChange(e, "countryCode")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={1}>
              <TextField
                label="Latitude"
                variant="outlined"
                required
                onChange={(e) => handleInputChange(e, "latitude")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={1}>
              <TextField
                label="Longitude"
                variant="outlined"
                required
                onChange={(e) => handleInputChange(e, "longitude")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={1}>
              <TextField
                label="Wiki Data ID"
                variant="outlined"
                required
                onChange={(e) => handleInputChange(e, "wikiData")}
                fullWidth
              />
            </Grid>
           </Grid>
          <Button
            type="submit"
            onClick={() => postAPI()}
            sx={{ paddingTop: 2 }}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default NewRecord;
