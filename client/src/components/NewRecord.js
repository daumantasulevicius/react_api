import React, { useEffect, useState } from "react";
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
    const DEFAULT_HELPERS = {
        name : "Enter a name",
        stateID : "Enter a state id",
        stateCode : "Enter a state code",
        countryID : "Enter a country id",
        countryCode : "Enter a country code",
        latitude : "Enter latitude",
        longitude : "Enter longitude",
        wikiData : "Enter wiki data id"
      };
    
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errors, setErrors] = useState({
        name : false,
        stateID : false,
        stateCode : false,
        countryID : false,
        countryCode : false,
        latitude : false,
        longitude : false,
        wikiData : false
    });
    const [helperTexts, setHelperTexts] = useState(DEFAULT_HELPERS);

    const handleInputChangeID = (e, field) => {
        const input = e.target.value;
    
        //do some validation
        if (!isValidID(input)) {
          setErrors({ ...errors, [field]: true });
          setHelperTexts({
            ...helperTexts,
            [field]: "Please enter a positive integer value",
          });
        } else {
          setErrors({ ...errors, [field]: false });
          setHelperTexts({ ...helperTexts, [field]: DEFAULT_HELPERS[field] });
          setInputValues({ ...inputValues, [field]: input });
        }
      };

    const handleInputChangeDecimal = (e, field) => {
        const input = e.target.value;
    
        //do some validation
        if (!isValidDecimal(input)) {
          setErrors({ ...errors, [field]: true });
          setHelperTexts({
            ...helperTexts,
            [field]: "Please enter a positive or negative decimal value",
          });
        } else {
          setErrors({ ...errors, [field]: false });
          setHelperTexts({ ...helperTexts, [field]: DEFAULT_HELPERS[field] });
          setInputValues({ ...inputValues, [field]: input });
        }
      };

    const handleInputChangeLetters = (e, field) => {
        const input = e.target.value;
    
        //do some validation
        if (!isValidLetters(input)) {
          setErrors({ ...errors, [field]: true });
          setHelperTexts({
            ...helperTexts,
            [field]: "Please enter only letters",
          });
        } else {
          setErrors({ ...errors, [field]: false });
          setHelperTexts({ ...helperTexts, [field]: DEFAULT_HELPERS[field] });
          setInputValues({ ...inputValues, [field]: input });
        }
      };

    const handleInputChangeWiki = (e, field) => {
        const input = e.target.value;
    
        //do some validation
        if (!isValidWikiID(input)) {
          setErrors({ ...errors, [field]: true });
          setHelperTexts({
            ...helperTexts,
            [field]: "Please enter one letter and integers",
          });
        } else {
          setErrors({ ...errors, [field]: false });
          setHelperTexts({ ...helperTexts, [field]: DEFAULT_HELPERS[field] });
          setInputValues({ ...inputValues, [field]: input });
        }
      };

    const isValidID = (str) => {
        return /^[0-9]+$/.test(
          str
        );
    };
    
    const isValidDecimal = (str) => {
        return /^[-+]?\d*\.?\d+$/.test(
            str
        );
    };

    const isValidLetters = (str) => {
        return /^[a-zA-Z]+$/.test(
            str
        );
    };

    const isValidWikiID = (str) => {
      return /^[a-zA-Z]+\d+$/.test(
          str
      );
  };

    useEffect(() => {
        setButtonDisabled(
          Object.values(errors).some(Boolean) ||
            Object.values(inputValues).some((i) => i === 0 || "") 
        );
      }, [errors, inputValues]);

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
            <Grid item sm={16} py={0.5}>
              <TextField
                label="Name"
                variant="outlined"
                helperText={helperTexts.name}
                error={errors.name}
                required
                onChange={(e) => handleInputChangeLetters(e, "name")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={0.5}>
              <TextField
                label="State ID"
                variant="outlined"
                helperText={helperTexts.stateID}
                error={errors.stateID}
                required
                onChange={(e) => handleInputChangeID(e, "stateID")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={0.5}>
              <TextField
                label="State Code"
                variant="outlined"
                helperText={helperTexts.stateCode}
                error={errors.stateCode}
                required
                onChange={(e) => handleInputChangeLetters(e, "stateCode")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={0.5}>
              <TextField
                label="Country ID"
                variant="outlined"
                helperText={helperTexts.countryID}
                error={errors.countryID}
                required
                onChange={(e) => handleInputChangeID(e, "countryID")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={0.5}>
              <TextField
                label="Country Code"
                variant="outlined"
                helperText={helperTexts.countryCode}
                error={errors.countryCode}
                required
                onChange={(e) => handleInputChangeLetters(e, "countryCode")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={0.5}>
              <TextField
                label="Latitude"
                variant="outlined"
                helperText={helperTexts.latitude}
                error={errors.latitude}
                required
                onChange={(e) => handleInputChangeDecimal(e, "latitude")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={0.5}>
              <TextField
                label="Longitude"
                variant="outlined"
                helperText={helperTexts.longitude}
                error={errors.longitude}
                required
                onChange={(e) => handleInputChangeDecimal(e, "longitude")}
                fullWidth
              />
            </Grid>
            <Grid item sm={16} py={0.5}>
              <TextField
                label="Wiki Data ID"
                variant="outlined"
                helperText={helperTexts.wikiData}
                error={errors.wikiData}
                required
                onChange={(e) => handleInputChangeWiki(e, "wikiData")}
                fullWidth
              />
            </Grid>
           </Grid>
          <Button
            type="submit"
            disabled={buttonDisabled}
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
