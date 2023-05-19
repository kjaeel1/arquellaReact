import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import clsx from "clsx";
// import styles from "./Register.css";



import axios from "axios";
import { styled } from "@mui/material/styles";
import { Box, StepLabel } from "@mui/material";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";


import Link from "@mui/material/Link";


import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


import Container from "@mui/material/Container";

import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
    useWatch
  } from "react-hook-form";


import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'








const Step2 = ({change,button, handleChange,handleRadio, getData} ) => {
    const [age, setAge] = React.useState("");

    const [selectedValue, setSelectedValue] = React.useState("a");
  
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    
    
    // const [showPassword1, setShowPassword1] = React.useState(false);
    const [careGroupName, setCareGroupName] = useState();
  
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('')
    const [text, setText] = useState("");
  
    const [password, setPassword] = useState(false);
  
    const [password1, setPassword1] = useState("");


    const [data, setData] = useState('');
    

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
   
    const formSchema = Yup.object().shape({
        NumberOfRoomsInCareHome: Yup.string().required("This Field is mandatory"),
        numberOfZonesInCareHome: Yup.string().required("This Field is mandatory"),
  
        NumberOfCommunityRoomsInCareHome: Yup.string().required(
          "This Field is mandatory"
        ),
        careHomeNumberOfEnSuitesInCareHome: Yup.string().required(
          "This Field is mandatory"
        ),
      });
      const formOptions = { resolver: yupResolver(formSchema) };
      const { register, handleSubmit, reset, formState } = useForm(formOptions);
      const { errors } = formState;
      function onSubmit(data) {
        // console.log(JSON.stringify(data, null, 4));

        let formData = data
        getData(formData)
    
        return false;
      }
  


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                boxShadow: 1,
                width: 396,
                // height: 707,
                // px: 2,
                // py: 2,
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                borderRadius: 5,
                border: "1px solid #888C8C",
                alignContent: "center",
                alignSelf: "center",
                marginLeft: -3,
              }}
            >
              <Box sx={{ mt: 5, mb: 5 }}>
                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}
                <Container component="main" maxWidth="lg">
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    // style={{ minHeight: '100vh' }}
                  >
                    <Grid item md={6}>
                      <TextField
                        {...register("NumberOfRoomsInCareHome")}
                        margin="dense"
                        required
                        size={"large"}
                        id="NumberOfRoomsInCareHome"
                        label="Number Of Rooms"
                        name="NumberOfRoomsInCareHome"
                        type="number"
                        autoFocus
                        fullWidth
                        variant={"outlined"}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <TextField
                        {...register("numberOfZonesInCareHome")}
                        margin="dense"
                        required
                        size={"large"}
                        id="numberOfZonesInCareHome"
                        label="Number of Zones"
                        name="numberOfZonesInCareHome"
                        type="number"
                        fullWidth
                        variant={"outlined"}
                      />
                    </Grid>
                  </Grid>
                </Container>

                <Container component="main" maxWidth="lg">
                  <TextField
                    {...register("NumberOfCommunityRoomsInCareHome")}
                    margin="dense"
                    required
                    size={"large"}
                    id="NumberOfCommunityRoomsInCareHome"
                    label="Number of Community Rooms"
                    name="NumberOfCommunityRoomsInCareHome"
                    type="number"
                    fullWidth
                    variant={"outlined"}
                  />
                </Container>

                <Container component="main" maxWidth="lg">
                  <TextField
                    {...register("careHomeNumberOfEnSuitesInCareHome")}
                    margin="dense"
                    required
                    size={"large"}
                    id="careHomeNumberOfEnSuitesInCareHome"
                    label="Number of en Suites"
                    name="careHomeNumberOfEnSuitesInCareHome"
                    type="number"
                    fullWidth
                    variant={"outlined"}
                  />
                </Container>
                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}
              </Box>
              <Container component="main" maxWidth="lg">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "40px",
                    width: "294px",
                    backgroundColor: "#10CFC9",
                  }}
                  color="primary"
                  // onClick={handleNext}
                  type="submit"
                >
                  {/* {activeStep === steps.length - 1 ? "Finish" : "Next"}
                   */}
                     {button}
                </Button>
              </Container>
            
              {/* <button type="submit" className="btn btn-primary">
              Submit
            </button> */}

              <Container component="main" maxWidth="lg">
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  style={{ marginTop: 8, marginBottom: 30 }}
                >
                  <Grid item xs={8}>
                    <p className="already">Already have an account?</p>
                  </Grid>
                  <Grid item xs={4}>
                    <Link
                      href="/Login"
                      className="login"
                      style={{ textDecoration: "none", marginLeft: 25 }}
                    >
                      {"Login"}
                    </Link>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Container>
        </div>
      </form>
    )
  };

  export default Step2;