import React, { useState, useEffect } from "react";
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
  useWatch 
} from "react-hook-form";

import OutlinedInput from "@mui/material/OutlinedInput";

import InputAdornment from "@mui/material/InputAdornment";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import IconButton from "@mui/material/IconButton";

import validator from 'validator'

import logo from "../../../static/assets/images/arquellaLogoPng.png";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


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

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('')
  const [text, setText] = useState("");


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
    mode:"all",
    reValidateMode: 'onChange'
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid')
});
const formOptions = { resolver: yupResolver(validationSchema) };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword1 = (event) => {
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

  // data inititalisation for request payload according to backend
  const requestPayloadData = {
    care_group_name: "mahi cg",
    care_group_email: "mahi@gmail.com",
    care_group_contact_no: "25141747",
    care_home_name: "mahi ch",
    care_home_email: "mahich@gmail.com",
    care_home_contact_no: "251488536",
    user_email_address: "test@gmail.com",
    password: "test@123",
    care_group_address: "shanti nagar bsl",
    care_home_address: "shanti nagar bsl",
    care_group_city: "bhusawal",
    care_group_country: "India",
    care_home_city: "bhusawal",
    care_home_country: "India",
    number_of_zones_in_care_home: "10",
    number_of_community_rooms_in_care_home: "10",
    number_of_rooms_in_care_home: "10",
    number_of_en_suites_in_care_home: "10",
    no_of_care_homes: "10"

  }



  const handleNext = async (data) => {
    
    const updatedReqPyloadData = {
      ...requestPayloadData,
      care_group_name: data.careGroupName,
      care_group_email: data.careGroupEmail,
      care_group_contact_no: data.careGroupContactNo,
      care_home_name: data.careHomename,
      care_home_email: data.careHomeEmail,
      care_home_contact_no: data.careHomeContactNo,
      user_email_address: data.userEmailAddress,
      password: data.password,
      care_group_address: data.careGroupAddress,
      care_home_address: data.careHomeAddress,
      care_group_city: data.careGroupCity,
      care_group_country: data.careGroupCountry,
      care_home_city: data.careHomeCity,
      care_home_country: data.careHomeCountry,
      number_of_zones_in_care_home: data.numberOfZonesInCareHome,
      number_of_community_rooms_in_care_home: data.NumberOfCommunityRoomsInCareHome,
      number_of_rooms_in_care_home: data.NumberOfRoomsInCareHome,
      number_of_en_suites_in_care_home: data.careHomeNumberOfEnSuitesInCareHome,
      no_of_care_homes: data.noOfHomes
    };

    console.log("üpdated req payload", updatedReqPyloadData);
    console.log("step ..", activeStep);
    console.log("sssssssssssssssssssssssssss", methods.formState)


    if (activeStep == steps.length - 1) {
      await axios.post('http://localhost:3007/auth/register', updatedReqPyloadData)
        .then(res => {
          localStorage.setItem('refreshToken', res.data.refresh_token);
          setSuccessMessage(res);
          navigate("/dashboard");
          alert(res);
          console.log("condii runn *-*-", res);
          // redirect to home page or dashboard
        })
        .catch(error => {
      
          setErrorMessage(error);
          // alert(error)
          console.log("condii runn *//*-",JSON.stringify(error, null,2));

        });

    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }

  

    if (activeStep == steps.length - 1) {

    } else {
      if (data.careHomename == '') {
        console.log("condition run");
        // setActiveStep(activeStep - 1);
        setSelectedValue('b');

      }

      if (data.careHomename !== '') {

        setActiveStep(activeStep + 1);
        setSkippedSteps(
          skippedSteps.filter((skipItem) => skipItem !== activeStep)
        );
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handle submit called");
    const data = new FormData(event.currentTarget);
    console.log("submit fun", {
      email: data.get("email"),
      password: data.get("password"),
    });
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



 

  const validateEmail = (e) => {
    console.log(e)
    var email = e.target.value

    setText(email)

    if (email === '' || undefined) {
      setEmailError('Enter something)')
    }

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    }
    else {
      setEmailError('Enter valid Email!')
    }
  }
  

  const Step1a = () => {
    const { control } = useFormContext();
    return (
      <div>
        <Container>
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
            className="formRegisterParentDiv"
          >
            <FormProvider {...methods}>
              <Box
                component="form"
                onSubmit={handleSubmit}

                sx={{ mt: 5, mb: 5 }}
              >
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

                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}

                <Container
                  component="main"
                  maxWidth="lg"
                  style={{ alignContent: "center", alignItems: "center" }}
                >
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%", marginTop: 15 }}
                    required
                  >
                    <Controller
                      control={control}
                      name="careGroupName"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          margin="dense"
                          required
                          error={!!methods.formState.errors.careGroupName}
                          size={"large"}
                          id="careGroupName"
                          label="Care Group Name"
                          name="careGroupName"
                          // autoFocus
                          // fullWidth
                          variant={"outlined"}
                          {...field}
                          // style={{width: 316, }}
                          helperText={!!methods.formState.errors.careGroupName && 'Enter the required field'}
                        />
                      )}
                    />
                  </FormControl>
                </Container>

                <Container
                  component="main"
                  maxWidth="lg"
                  style={{ alignContent: "center", alignItems: "center" }}
                >
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <Controller
                      control={control}
                      name="noOfHomes"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          margin="dense"
                          required
                          type="number"
                          
                          size={"large"}
                          id="noOfHomes"
                          label="Number of Homes"
                          name="noOfHomes"
                          // autoFocus
                          fullWidth
                          variant={"outlined"}
                          {...field}
                          error={!!methods.formState.errors.noOfHomes}
                          helperText={!!methods.formState.errors.noOfHomes && 'Enter the required field'}
                        // style={{width: 316,paddingRight: 20 }}
                        />
                      )}
                    />
                  </FormControl>
                </Container>

                <Container
                  component="main"
                  maxWidth="lg"
                  style={{ alignContent: "center", alignItems: "center" }}
                >
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <Controller
                      control={control}
                      name="careGroupAddress"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          margin="dense"
                          required
                          size={"large"}
                          id="careGroupAddress"
                          label="Address"
                          name="careGroupAddress"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={"outlined"}
                          error={!!methods.formState.errors.careGroupAddress}
                          helperText={!!methods.formState.errors.careGroupAddress && 'Enter the required field'}
                        // style={{width: 316,paddingRight: 20 }}
                        />
                      )}
                    />
                  </FormControl>
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
                    <Grid item md={6} className="fullWidthDiv">
                      <Controller
                        control={control}
                        name="careGroupCity"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            margin="dense"
                            required
                            size={"large"}
                            id="careGroupCity"
                            label="City"
                            name="careGroupCity"
                            {...field}
                            // autoFocus
                            fullWidth
                            variant={"outlined"}
                            error={!!methods.formState.errors.careGroupCity}
                            helperText={!!methods.formState.errors.careGroupCity && 'Enter the required field'}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item md={6} className="fullWidthDiv">
                      <Controller
                        control={control}
                        name="careGroupCountry"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            margin="dense"
                            required
                            size={"large"}
                            id="careGroupCountry"
                            label="Country"
                            name="careGroupCountry"
                            {...field}
                            // autoFocus
                            fullWidth
                            variant={"outlined"}
                            error={!!methods.formState.errors.careGroupCountry}
                            helperText={!!methods.formState.errors.careGroupCountry && 'Enter the required field'}
                          />
                        )}
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
                    <Grid item md={6} className="fullWidthDiv">
                      <Controller
                        control={control}
                        name="careGroupContactNo"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            margin="dense"
                            required
                            size={"large"}
                            id="cno"
                            label="Contact No"
                            name="careGroupContactNo"
                            type="number"
                            {...field}
                            // autoFocus
                            fullWidth
                            variant={"outlined"}
                            error={!!methods.formState.errors.careGroupContactNo}
                            helperText={!!methods.formState.errors.careGroupContactNo && 'Enter the required field'}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item md={6} className="fullWidthDiv">
                      <Controller
                        control={control}
                        name="careGroupEmail"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            margin="dense"
                            required
                            size={"large"}
                            id="email"
                            label="Email Address"
                            name="careGroupEmail"
                            {...field}
                            // autoFocus
                            fullWidth
                            variant={"outlined"}
                            error={!!methods.formState.errors.careGroupEmail}
                            helperText={!!methods.formState.errors.careGroupEmail && 'Enter the required field'}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Container>
                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}
              </Box>

              <div
                style={{
                  textAlign: "center",
                  marginTop: -10,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "40px",
                    width: "294px",
                    backgroundColor: "#10CFC9",
                    marginBottom: 5,
                  }}
                  color="primary"
                  // onClick={handleNext}
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>

              <Container component="main" maxWidth="lg">
                <Grid
                  container
                  spacing={0}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  style={{ marginTop: -12, marginBottom: 30 }}
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
            </FormProvider>
          </Box>
        </Container>
      </div>
    );
  };

  const Step1 = () => {
    const { control } = useFormContext();
    return (
      <div>
        <Container>
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
            <FormProvider {...methods}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 5, mb: 5 }}
              >
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

                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}
                <Container component="main" maxWidth="lg">
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%", marginTop: 15 }}
                  >
                    <Controller
                      control={control}
                      name="careHomename"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          margin="dense"
                          required
                          size={"large"}
                          id="careHomename"
                          label="Care Home Name"
                          name="careHomename"
                          {...field}
                          autoFocus
                          fullWidth
                          variant={"outlined"}
                          error={!!methods.formState.errors.careHomename}
                          helperText={!!methods.formState.errors.careHomename && 'Enter the required field'}
                        />
                      )}
                    />
                  </FormControl>
                </Container>

                <Container component="main">
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <Controller
                      control={control}
                      name="careHomeAddress"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          margin="dense"
                          required
                          size={"large"}
                          id="careHomeAddress"
                          label="Address"
                          name="careHomeAddress"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={"outlined"}
                          error={!!methods.formState.errors.careHomeAddress}
                          helperText={!!methods.formState.errors.careHomeAddress && 'Enter the required field'}
                        />
                      )}
                    />
                  </FormControl>
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
                    <Grid item sm={12} md={6}>
                      <Controller
                        control={control}
                        name="careHomeCity"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            margin="dense"
                            required
                            size={"large"}
                            id="careHomeCity"
                            label="City"
                            name="careHomeCity"
                            {...field}
                            // autoFocus
                            fullWidth
                            variant={"outlined"}
                            error={!!methods.formState.errors.careHomeCity}
                            helperText={!!methods.formState.errors.careHomeCity && 'Enter the required field'}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <Controller
                        control={control}
                        name="careHomeCountry"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            margin="dense"
                            required
                            size={"large"}
                            id="careHomeCountry"
                            label="Country"
                            name="careHomeCountry"
                            {...field}
                            // autoFocus
                            fullWidth
                            variant={"outlined"}
                            error={!!methods.formState.errors.careHomeCountry}
                            helperText={!!methods.formState.errors.careHomeCountry && 'Enter the required field'}
                          />
                        )}
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
                      <Controller
                        control={control}
                        name="careHomeContactNo"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            margin="dense"
                            required
                            size={"large"}
                            id="cno"
                            label="Contact No"
                            name="careHomeContactNo"
                            {...field}
                            // autoFocus
                            type="number"
                            fullWidth
                            variant={"outlined"}
                            error={!!methods.formState.errors.careHomeContactNo}
                            helperText={!!methods.formState.errors.careHomeContactNo && 'Enter the required field'}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Controller
                        control={control}
                        name="careHomeEmail"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            margin="dense"
                            required
                            size={"large"}
                            id="careHomeEmail"
                            label="Email Address"
                            name="careHomeEmail"
                            {...field}
                            // autoFocus
                            fullWidth
                            variant={"outlined"}
                            error={!!methods.formState.errors.careHomeEmail}
                            helperText={!!methods.formState.errors.careHomeEmail && 'Enter the required field'}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Container>
                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}
              </Box>

              <Container component="main" maxWidth="lg">
                <div
                  style={{
                    textAlign: "center",
                    marginTop: -16,
                  }}
                >
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
                </div>
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
            </FormProvider>
          </Box>
        </Container>
      </div>
    );
  };

  const Step2 = () => {
    const { control } = useFormContext();
    return (
      <div>
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
            <FormProvider {...methods}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
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
                      <Controller
                        control={control}
                        name="NumberOfRoomsInCareHome"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            margin="dense"
                            required
                            size={"large"}
                            id="NumberOfRoomsInCareHome"
                            label="Number Of Rooms"
                            name="NumberOfRoomsInCareHome"
                            type="number"
                            {...field}
                            autoFocus
                            fullWidth
                            variant={"outlined"}
                            error={!!methods.formState.errors.NumberOfRoomsInCareHome}
                            helperText={!!methods.formState.errors.NumberOfRoomsInCareHome && 'Enter the required field'}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Controller
                        control={control}
                        name="numberOfZonesInCareHome"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            margin="dense"
                            required
                            size={"large"}
                            id="numberOfZonesInCareHome"
                            label="Number of Zones"
                            name="numberOfZonesInCareHome"
                            type="number"
                            {...field}
                            fullWidth
                            variant={"outlined"}
                            error={!!methods.formState.errors.numberOfZonesInCareHome}
                            helperText={!!methods.formState.errors.numberOfZonesInCareHome && 'Enter the required field'}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Container>

                <Container component="main" maxWidth="lg">
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <Controller
                      control={control}
                      name="NumberOfCommunityRoomsInCareHome"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          margin="dense"
                          required
                          size={"large"}
                          id="NumberOfCommunityRoomsInCareHome"
                          label="Number of Community Rooms"
                          name="NumberOfCommunityRoomsInCareHome"
                          type="number"
                          {...field}
                          fullWidth
                          variant={"outlined"}
                          error={!!methods.formState.errors.NumberOfCommunityRoomsInCareHome}
                          helperText={!!methods.formState.errors.NumberOfCommunityRoomsInCareHome && 'Enter the required field'}
                        />
                      )}
                    />
                  </FormControl>
                </Container>

                <Container component="main" maxWidth="lg">
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <Controller
                      control={control}
                      name="careHomeNumberOfEnSuitesInCareHome"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          margin="dense"
                          required
                          size={"large"}
                          id="careHomeNumberOfEnSuitesInCareHome"
                          label="Number of en Suites"
                          name="careHomeNumberOfEnSuitesInCareHome"
                          type="number"
                          {...field}
                          fullWidth
                          variant={"outlined"}
                          error={!!methods.formState.errors.careHomeNumberOfEnSuitesInCareHome}
                          helperText={!!methods.formState.errors.careHomeNumberOfEnSuitesInCareHome && 'Enter the required field'}
                        />
                      )}
                    />
                  </FormControl>
                </Container>
                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}
              </Box>

              <div
                style={{
                  textAlign: "center",
                  marginTop: -8,
                }}
              >
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
              </div>

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
            </FormProvider>
          </Box>
        </Container>
      </div>
    );
  };

  const Step3 = () => {
    const { control } = useFormContext();
    const { register, errors, trigger, handleSubmit, clearErrors, onChange } = useForm({
      mode: 'onBlur',
      reValidateMode: 'onBlur'
    });
    return (
      <div>
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
            <FormProvider {...methods}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                
                sx={{ mt: 5, mb: 5 }}
              >
                {/* <!-------------------------------------------------------For Stepper 3 ---------------------------------------------------------------> */}
                <Container component="main" maxWidth="lg">
                  <Controller
                    control={control}
                    name="userEmailAddress"
                
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                      onChange={(text) => validateEmail(text)}
                        margin="dense"
                        required
                        size={"large"}
                        id="userEmailAddress"
                        label="Email Address"
                        name="userEmailAddress"
                        autoComplete="email"
                        // autoFocus
                        
                        fullWidth
                        type={"email"}
                        variant={"outlined"}
                        error={emailError}
                        helperText={emailError}
                        {...field}
                      />
                    )}
                  />
                     <span style={{
                          fontWeight: 'bold',
                          color: 'red',
                          fontSize: 14,
                          fontFamily: 'muli',
                          marginTop: 10

                        }}>
                          {emailError}
                        </span>
                </Container>
                <br />
                <Container component="main">
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>

                    <Controller
                      control={control}
                      name="password"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <OutlinedInput
                          id="outlined-adornment-password"
                          name="password"
                          {...field}
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                          fullWidth
                          error={!!methods.formState.errors.password}
                        />
                      )}
                    />
                  </FormControl>
                </Container>

                <div className="pwText">
                  <p className="pwText1">
                    Password must be at least 8 characters long with 1 uppercase
                    1 lowercase & 1 numeric character
                  </p>
                </div>

                <Container component="main">
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%", marginTop: 16 }}
                  >
                    <InputLabel htmlFor="outlined-adornment-password1">
                      Password
                    </InputLabel>
                    <Controller
                      control={control}
                      name="password1"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <OutlinedInput
                          id="outlined-adornment-password1"
                          name="password"
                          {...field}
                          type={showPassword1 ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword1}
                                onMouseDown={handleMouseDownPassword1}
                                edge="end"
                              >
                                {showPassword1 ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                          fullWidth
                          error={!!methods.formState.errors.password}
                        />
                      )}
                    />
                  </FormControl>
                </Container>

                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}
              </Box>

              <div
                style={{
                  textAlign: "center",
                  marginTop: -16,
                }}
              >
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
                  // onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>

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
            </FormProvider>
          </Box>
        </Container>
      </div>
    );
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return selectedValue == "a" ? <Step1a /> : <Step1 />;

      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
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
                          onClick={ ()=>  setActiveStep(index)}
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
                      <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
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
                        </form>
                      </FormProvider>
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
