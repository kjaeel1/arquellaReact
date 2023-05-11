import React, { useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { Box, StepLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./register.css";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";

import Container from "@mui/material/Container";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";

import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import OutlinedInput from "@mui/material/OutlinedInput";

import InputAdornment from "@mui/material/InputAdornment";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import IconButton from "@mui/material/IconButton";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import logo from "../../../static/assets/images/arquellaLogoPng.png";
import { registerUser } from "../../services/auth";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Register() {
  const [age, setAge] = React.useState("");

  const [selectedValue, setSelectedValue] = React.useState("a");

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [careGroupName, setCareGroupName] = useState();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [topMessage, setTopMessage] = useState('');
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function getSteps() {
    return ["", "", ""];
  }

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };


  const handleNext = async (data) => {
    console.log("step ..", activeStep);
    console.log(data);

    if (activeStep == 2) {
      await registerUser(data).then((data) => {
        // console.log("LOGIN", JSON.stringify( data.data.refresh_token, null, 2));
        if (data === undefined) {
          console.log("here in error");
          openAlert();
        } else {
          // localStorage.setItem('refreshToken',data.data.refresh_token);
          // navigate("/dashboard");
          alert("hhhhhhhh");
        }
      });
    }

    if (activeStep == steps.length - 1) {
    } else {
      // setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const handleChange1 = (event) => {
    // setCareGroupName(event)
    console.log(event.target.value);
  };


  const registerUser = async ({
    email,
    password,
    phoneNumber,
    confirmPassword,
    firstName,
    lastName,
    // displayName
    data
  }) => {

    console.log('HERE',data )

    if (!email.includes("@") || !email.includes(".")) {
      console.log('Not a real email');
      setTopMessage("Not a real email")
      return;
    }

    // console.log(firstName, lastName, displayName)

    if (firstName.length == 0) {
      console.log('enter a name');
      setTopMessage("Enter a name")
      return;
    }

    if (!toggleCheckBox1 || !toggleCheckBox2) {
      console.log(
        'Please accept the terms and conditions and privacy policies',
      );

      setTopMessage("Ensure the checkboxes are ticked")
      return;
    }
    if (password != confirmPassword) {
      console.log(password + confirmPassword);
      setTopMessage("Passwords do not match")
      return;
    }

    if (password.length < 6) {
      setTopMessage("Password not long enough")
      Alert.alert("Password must be over 6 characters")

    }

    else{
      console.log(" -- - - - - - - - - - - - - - -in else 1")
    try {
      console.log("- - - - - - - - - - - - - -in try 1",)
    

    } catch (error) {
      console.log(error);
      if (error.code === 'auth/weak-password') {
        console.log('That password is invalid!');
      }
    }
  }
  };


  const Step1a = () => {
    return (
      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Must be at least 8 characters')
          .required('Required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="register-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <TextField type="text" name="firstName" className="form-control" />
            <ErrorMessage name="firstName" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <TextField type="text" name="lastName" className="form-control" />
            <ErrorMessage name="lastName" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <TextField type="email" name="email" className="form-control" />
            <ErrorMessage name="email" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <TextField type="password" name="password" className="form-control" />
            <ErrorMessage name="password" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <TextField type="password" name="confirmPassword" className="form-control" />
            <ErrorMessage name="confirmPassword" className="error-message" />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn btn-primary">
            Register
          </button>
        </Form>
      )}
    </Formik>
   
  
    );
  };

  const Step1 = () => {
    return <h1>dddd</h1>;
  };

  const Step2 = () => {
    return <h1>ddd</h1>;
  };

  const Step3 = () => {
    return <h1>ssss</h1>;
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return selectedValue == "a" ? <Step1a /> : <Step1 />;

      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
     
    }
  }

  return (
    <div className="">
      <Box sx={{ flexGrow: 1 }} xs={12} md={12} ls={12}>
        <Grid
          container
          spacing={0}
          xs={12}
          sm={12}
          lg={12}
          className="leftImgContainer"
        >
          <Grid item xs={12} sm={6} lg={6} className="loginImageCont">
            <div className="loginImageCont">
              <div className="textWrap">
                <div>
                  <p className="hedOne">Smart, wireless nurse call systems.</p>
                </div>
                <div>
                  <p className="hedTwo">Driven by data, inspired by care.</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} ls={6}>
            <div className="formContainerTop">
              <div className="uperContian">
                <div className="logoCont">
                  <img src={logo} />
                  {/* <div className='textLogo'>
                    <div><p className='hedOneLogo'>This is Arquella </p></div>
                    <div><p className='hedTwoLogo' >Capturing moments of care </p></div>
                  </div> */}
                </div>

                <Container component="main" maxWidth="xs">
                  <Stepper
                    alternativeLabel
                    activeStep={activeStep}
                    // onClick={ ()=>  setActiveStep(activeStep + 1) }
                  >
                    {steps.map((step, index) => {
                      const labelProps = {};
                      const stepProps = {};
                      // if (isStepOptional(index)) {
                      //   labelProps.optional = (
                      //     <Typography
                      //       variant="caption"
                      //       align="center"
                      //       style={{ display: "block" }}
                      //     >
                      //       optional
                      //     </Typography>
                      //   );
                      // }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step
                          {...stepProps}
                          key={index}
                          style={{ marginTop: 16 }}
                          sx={{
                            "& .MuiStepLabel-root .Mui-completed": {
                              color: "#10CFC9", // circle color (COMPLETED)
                            },
                            "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                              {
                                color: "grey.500", // Just text label (COMPLETED)
                              },
                            "& .MuiStepLabel-root .Mui-active": {
                              color: "#10CFC9", // circle color (ACTIVE)
                            },
                            "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                              {
                                color: "common.white", // Just text label (ACTIVE)
                              },
                            "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text":
                              {
                                fill: "white", // circle's number (ACTIVE)
                              },
                          }}
                        >
                          <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>

                  <p className="dynamicText">
                    {activeStep === 0 ? " Basic Information" : ""}
                    {activeStep === 1 ? " Care Home Details" : ""}
                    {activeStep === 2 ? " Manager login details" : ""}
                  </p>

                  {activeStep === steps.length ? (
                    <Typography variant="h3" align="center">
                      Thank You
                    </Typography>
                  ) : (
                    <>
                
                 
                          
                    {getStepContent(activeStep)}
                
                    
                    </>
                  )}
                </Container>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Register;
