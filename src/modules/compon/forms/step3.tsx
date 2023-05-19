import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import clsx from "clsx";
// import styles from "./Register.css";



import axios from "axios";
import { styled } from "@mui/material/styles";
import { Box, IconButton, InputAdornment, StepLabel } from "@mui/material";

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
import { Visibility, VisibilityOff } from "@mui/icons-material";








const Step3 = ({change,button, handleChange,handleRadio, getData} ) => {
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
    
    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required("Password is mendatory")
          .min(3, "Password must be at 3 char long"),
        confirmPwd: Yup.string()
          .required("Password is mendatory")
          .oneOf([Yup.ref("password")], "Passwords does not match"),
        email: Yup.string().email(),
      });
      const formOptions = { resolver: yupResolver(formSchema) };
      const { register, handleSubmit, reset, formState } = useForm(formOptions);
      const { errors } = formState;
  
      //showPassword State
      const [showPassword, setShowPassword] = React.useState(true);
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  
      const handleClickShowPassword = () => {
        console.log("here", showPassword);
        setShowPassword((prev) => !prev);
      };
  
      function onSubmit(data) {
        // console.log(JSON.stringify(data, null, 4));
        let formData = data
        getData(formData)
   
        return false;
      }
  


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
           <Box
           
                
                sx={{ mt: 5, mb: 5 }}
              >
          <div className="form-group">
            <Container component="main" maxWidth="lg">
              <TextField
                {...register("email")}
                margin="dense"
                required
                // size={"large"}
                id="userEmailAddress"
                label="Email Address"
                name="email"
                autoComplete="email"
                // autoFocus

                fullWidth
                type={"email"}
                variant={"outlined"}
                error={emailError}
                helperText={emailError}
                // className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
            </Container>
            

            <Container component="main" maxWidth="lg">
              <TextField
                {...register("password")}
                margin="dense"
                label="Password"
                name="password"
                // type={showPassword === true ?  console.log('herher') :    console.log('sssss')}
                type={showPassword ? "text" : "password"}
                fullWidth
                variant={"outlined"}
                error={errors.password?.message}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                // className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
            </Container>

            <div className="pwText">
                  <p className="pwText1">
                    Password must be at least 8 characters long with 1 uppercase
                    1 lowercase & 1 numeric character
                  </p>
                </div>



            <Container component="main" maxWidth="lg">
              <TextField
                {...register("confirmPwd")}
                margin="dense"
                required
                // size={"large"}
                // id="userEmailAddress"
                label="Password"
                name="confirmPwd"
                autoComplete="email"
                // autoFocus

                fullWidth
                // type={"email"}
                variant={"outlined"}
                error={errors.confirmPwd?.message}
                helperText={errors.confirmPwd?.message}
                // className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
            </Container>
          </div>
      
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
          </Box>
        </Box>
      </form>
    )
  };

  export default Step3;