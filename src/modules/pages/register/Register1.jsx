import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
// import styles from "./Register.css";
import { useLoginFormValidator } from "./FormValidation";


import axios from "axios";
import { styled } from "@mui/material/styles";
import { Box, StepLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

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
  useWatch
} from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import OutlinedInput from "@mui/material/OutlinedInput";

import InputAdornment from "@mui/material/InputAdornment";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import IconButton from "@mui/material/IconButton";

import validator from 'validator'

import logo from "../../../static/assets/images/arquellaLogoPng.png";




const Register = props => {
  const [age, setAge] = React.useState("");

  const [selectedValue, setSelectedValue] = React.useState("a");

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const [showPassword, setShowPassword] = React.useState(true);
  // const [showPassword1, setShowPassword1] = React.useState(false);
  const [careGroupName, setCareGroupName] = useState();


  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('')
  const [text, setText] = useState("");

  const [password, setPassword] = useState(false);

  const [password1, setPassword1] = useState("");

  const methods = useForm({
    defaultValues: {
      careGroupName: "",
      careHomename: "",
      careGroupAddress: "",
      careHomeAddress: "",
      careGroupCity: "",
      careGroupCountry: "",
      careGroupContactNo: "",
      careGroupEmail: "",
      careHomeCity: "",
      careHomeCountry: "",
      careHomeContactNo: "",
      careHomeEmail: "",
      numberOfZonesInCareHome: "",
      NumberOfCommunityRoomsInCareHome: "",
      NumberOfRoomsInCareHome: "",
      careHomeNumberOfEnSuitesInCareHome: "",
      userEmailAddress: "",
      password: "",
    },
    mode: "all",
    reValidateMode: 'onChange'
  });

  function getSteps() {
    return ["", "", ""];
  }

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
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



  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };


  const handleClickShowPassword = () => {

    console.log('here', showPassword)
    setShowPassword((prev)=>!prev );
  }


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  const Step1a = () => {
   
    const formSchema = Yup.object().shape({
      careGroupName: Yup.string()
        .required('This Field is mandatory'),
        noOfHomes: Yup.string()
        .required('This Field is mandatory'),
        address: Yup.string()
        .required('This Field is mandatory'),


        city: Yup.string()
        .required('This Field is mandatory'),
        country: Yup.string()
        .required('This Field is mandatory'),
       

        cno: Yup.string()
        .required('This Field is mandatory'),
        email: Yup.string()
        .required('This Field is mandatory'),

    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
    function onSubmit(data) {
      console.log(JSON.stringify(data, null, 4))
  
      return false
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
          
            <Box
         
            
              sx={{ mt: 5, mb: 5 }}
            >
              {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}
             
              <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="CareGroup"
                      control={
                        <Radio
                          checked={selectedValue === "a"}
                          onChange={handleChange}
                          value="a"
                          name="radio-buttons"
                          slotProps={{ input: { "aria-label": "A" } }}
                        />
                      }
                      label="Care Group"
                    />
                    <FormControlLabel
                      value="CareHome"
                      control={
                        <Radio
                          checked={selectedValue === "b"}
                          onChange={handleChange}
                          value="b"
                          name="radio-buttons"
                          slotProps={{ input: { "aria-label": "B" } }}
                        />
                      }
                      label="Care Home"
                    />
                  </RadioGroup>
                </FormControl>

              <Container component="main" maxWidth="lg">
        
         
                      <TextField
                         {...register('careGroupName')}
                        margin="dense"
                        required
                        size={"large"}
                        id="careGroupName"
                        label="Care Group Name"
                        name="careGroupName"
                        type="text"
                      
                        fullWidth
                        variant={"outlined"}
                   
                   
                  />
              
              </Container>

              <Container component="main" maxWidth="lg">
        
                        
                        <TextField
                          {...register('noOfHomes')}
                          margin="dense"
                          required
                          size={"large"}
                          id="noOfHomes"
                          label="Number of Homes"
                          name="noOfHomes"
                          type="text"
                        
                          fullWidth
                          variant={"outlined"}
                    
                    
                    />

                </Container>

              <Container component="main" maxWidth="lg">
            
           
                      <TextField
                       {...register('address')}
                        margin="dense"
                        required
                        size={"large"}
                        id="address"
                        label="Number of Homes"
                        name="address"
                        type="text"
                      
                        fullWidth
                        variant={"outlined"}
          
                      />
                 
              
              </Container>

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
                         {...register('city')}
                          margin="dense"
                          required
                          size={"large"}
                          id="city"
                          label="City"
                          name="city"
                          type="text"
                        
                          autoFocus
                          fullWidth
                          variant={"outlined"}
                        
                        />
                   
                  
                  </Grid>
                  <Grid item md={6}>
             
                        <TextField
                          {...register('country')}
                          margin="dense"
                          required
                          size={"large"}
                          id="country"
                          label="Country"
                          name="country"
                          type="text"
                          
                          fullWidth
                          variant={"outlined"}
                    
                     
                    />
                  </Grid>
                </Grid>
              </Container>

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
                         {...register('cno')}
                          margin="dense"
                          required
                          size={"large"}
                          id="cno"
                          label="Contact No"
                          name="cno"
                          type="number"
                        
                          autoFocus
                          fullWidth
                          variant={"outlined"}
                        
                        />
                   
                  
                  </Grid>
                  <Grid item md={6}>
             
                        <TextField
                          {...register('email')}
                          margin="dense"
                          required
                          size={"large"}
                          id="email"
                          label="Email"
                          name="email"
                          type="text"
                          
                          fullWidth
                          variant={"outlined"}
                    
                     
                    />
                  </Grid>
                </Grid>
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
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
              </Container>
           
           

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

  const Step1 = () => {
  
     const formSchema = Yup.object().shape({
      careHomeName: Yup.string()
        .required('This Field is mandatory'),
        address: Yup.string()
        .required('This Field is mandatory'),


        city: Yup.string()
        .required('This Field is mandatory'),
        country: Yup.string()
        .required('This Field is mandatory'),

        cno: Yup.string()
        .required('This Field is mandatory'),
        email: Yup.string()
        .required('This Field is mandatory'),

    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
    function onSubmit(data) {
      console.log(JSON.stringify(data, null, 4))
  
      return false
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
          
            <Box
         
            
              sx={{ mt: 5, mb: 5 }}
            >
              {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}
             
              <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="CareGroup"
                      control={
                        <Radio
                          checked={selectedValue === "a"}
                          onChange={handleChange}
                          value="a"
                          name="radio-buttons"
                          slotProps={{ input: { "aria-label": "A" } }}
                        />
                      }
                      label="Care Group"
                    />
                    <FormControlLabel
                      value="CareHome"
                      control={
                        <Radio
                          checked={selectedValue === "b"}
                          onChange={handleChange}
                          value="b"
                          name="radio-buttons"
                          slotProps={{ input: { "aria-label": "B" } }}
                        />
                      }
                      label="Care Home"
                    />
                  </RadioGroup>
                </FormControl>
              <Container component="main" maxWidth="lg">
        
         
                      <TextField
                         {...register('careHomeName')}
                        margin="dense"
                        required
                        size={"large"}
                        id="careHomeName"
                        label="Care Home Name"
                        name="careHomeName"
                        type="text"
                      
                        fullWidth
                        variant={"outlined"}
                   
                   
                  />
              
              </Container>

              <Container component="main" maxWidth="lg">
            
           
                      <TextField
                       {...register('address')}
                        margin="dense"
                        required
                        size={"large"}
                        id="address"
                        label="Address"
                        name="address"
                        type="text"
                      
                        fullWidth
                        variant={"outlined"}
          
                      />
                 
              
              </Container>

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
                         {...register('city')}
                          margin="dense"
                          required
                          size={"large"}
                          id="city"
                          label="City"
                          name="city"
                          type="text"
                        
                          autoFocus
                          fullWidth
                          variant={"outlined"}
                        
                        />
                   
                  
                  </Grid>
                  <Grid item md={6}>
             
                        <TextField
                          {...register('country')}
                          margin="dense"
                          required
                          size={"large"}
                          id="country"
                          label="Country"
                          name="country"
                          type="text"
                          
                          fullWidth
                          variant={"outlined"}
                    
                     
                    />
                  </Grid>
                </Grid>
              </Container>

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
                         {...register('cno')}
                          margin="dense"
                          required
                          size={"large"}
                          id="cno"
                          label="Contact No"
                          name="cno"
                          type="number"
                        
                          autoFocus
                          fullWidth
                          variant={"outlined"}
                        
                        />
                   
                  
                  </Grid>
                  <Grid item md={6}>
             
                        <TextField
                          {...register('email')}
                          margin="dense"
                          required
                          size={"large"}
                          id="email"
                          label="Email"
                          name="email"
                          type="text"
                          
                          fullWidth
                          variant={"outlined"}
                    
                     
                    />
                  </Grid>
                </Grid>
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
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
              </Container>
           
           

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
    );
  };


  
  
  const Step2 = () => {
    const formSchema = Yup.object().shape({
      NumberOfRoomsInCareHome: Yup.string()
        .required('This Field is mandatory'),
        numberOfZonesInCareHome: Yup.string()
        .required('This Field is mandatory'),


        NumberOfCommunityRoomsInCareHome: Yup.string()
        .required('This Field is mandatory'),
        careHomeNumberOfEnSuitesInCareHome: Yup.string()
        .required('This Field is mandatory'),

    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
    function onSubmit(data) {
      console.log(JSON.stringify(data, null, 4))
  
      return false
    }

    return(
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
            
              <Box
           
              
                sx={{ mt: 5, mb: 5 }}
              >
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
                           {...register('NumberOfRoomsInCareHome')}
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
                            {...register('numberOfZonesInCareHome')}
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
                           {...register('NumberOfCommunityRoomsInCareHome')}
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
                         {...register('careHomeNumberOfEnSuitesInCareHome')}
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
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
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


  }






  const Step3 = () => {
    const formSchema = Yup.object().shape({
      password: Yup.string()
        .required('Password is mendatory')
        .min(3, 'Password must be at 3 char long'),
      confirmPwd: Yup.string()
        .required('Password is mendatory')
        .oneOf([Yup.ref('password')], 'Passwords does not match'),
      email: Yup.string().email(),

    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
    function onSubmit(data) {
      console.log(JSON.stringify(data, null, 4))
      setPassword(data.password)
      setPassword1(data.confirmPwd)
      return false
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
          <div className="form-group">

            <Container component="main" maxWidth="lg">
              <TextField
                {...register('email')}
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


      
            <FormControl
                    variant="outlined"
                    style={{ width: "100%", marginTop: 16 }}
                  >
              <TextField
            
               {...register('password')}
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
                    <InputAdornment position="end"   >
                 

                          <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>


                    </InputAdornment>
                  )
                }}
              // className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
            
            </FormControl>

            <Container component="main" maxWidth="lg">
              <TextField
                {...register('confirmPwd')}
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
          {/* <div className="form-group">
            <label>Confirm Password</label>
            <input
              name="confirmPwd"
              type="password"
              {...register('confirmPwd')}
              className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
          </div> */}
          <div className="mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Box>
      </form>

    )
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return selectedValue == "a" ? <Step1a /> : <Step1 />;
        // return <Step1 />

      case 1:
        return <Step2 />
      case 2:
        return <Step3 />
      // case 3:
      //   return <PaymentForm />;
      default:
        return "unknown step";
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
                  <Stepper alternativeLabel activeStep={activeStep}
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
                          onClick={() => setActiveStep(index)}
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

                      <Button

                        disabled={activeStep === 0}
                        onClick={handleBack}
                      >
                        back
                      </Button>
                      {isStepOptional(activeStep) && (
                        <Button

                          variant="contained"
                          color="primary"
                          onClick={handleSkip}
                        >
                          skip
                        </Button>
                      )}
                      <div style={{
                        textAlign: 'center'
                      }}>
                        <Button
                          variant="contained" sx={{ borderRadius: '100px', width: '294px', backgroundColor: '#10CFC9' }}
                          color="primary"
                          // onClick={handleNext}
                          type="submit"
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>

                    </>
                  )}
                </Container>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
    // <form className={styles.form} onSubmit={onSubmitForm}>
    //   <div className={styles.formGroup}>
    //     <label className={styles.formLabel}>Email</label>
    //     <input
    //       className={clsx(
    //         styles.formField,
    //         errors.email.dirty && errors.email.error && styles.formFieldError
    //       )}
    //       type="text"
    //       aria-label="Email field"
    //       name="email"
    //       value={form.email}
    //       onChange={onUpdateField}
    //       onBlur={onBlurField}
    //     />
    //     {errors.email.dirty && errors.email.error ? (
    //       <p className={styles.formFieldErrorMessage}>{errors.email.message}</p>
    //     ) : null}
    //   </div>
    //   <div className={styles.formGroup}>
    //     <label className={styles.formLabel}>Password</label>
    //     <input
    //       className={clsx(
    //         styles.formField,
    //         errors.password.dirty &&
    //           errors.password.error &&
    //           styles.formFieldError
    //       )}
    //       type="password"
    //       aria-label="Password field"
    //       name="password"
    //       value={form.password}
    //       onChange={onUpdateField}
    //       onBlur={onBlurField}
    //     />
    //     {errors.password.dirty && errors.password.error ? (
    //       <p className={styles.formFieldErrorMessage}>
    //         {errors.password.message}
    //       </p>
    //     ) : null}
    //   </div>
    //   <div className={styles.formGroup}>
    //     <label className={styles.formLabel}>Confirm Password</label>
    //     <input
    //       className={clsx(
    //         styles.formField,
    //         errors.confirmPassword.dirty &&
    //           errors.confirmPassword.error &&
    //           styles.formFieldError
    //       )}
    //       type="password"
    //       aria-label="Confirm password field"
    //       name="confirmPassword"
    //       value={form.confirmPassword}
    //       onChange={onUpdateField}
    //       onBlur={onBlurField}
    //     />
    //     {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
    //       <p className={styles.formFieldErrorMessage}>
    //         {errors.confirmPassword.message}
    //       </p>
    //     ) : null}
    //   </div>
    //   <div className={styles.formActions}>
    //     <button className={styles.formSubmitBtn} type="submit">
    //       Login
    //     </button>
    //   </div>
    // </form>
  );
};

export default Register;