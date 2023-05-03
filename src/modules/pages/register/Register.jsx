import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Box, StepLabel, } from '@mui/material'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import './register.css'
import Checkbox from '@mui/material/Checkbox';
import Link from "@mui/material/Link";
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';

import Container from "@mui/material/Container";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';

import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import OutlinedInput from '@mui/material/OutlinedInput';

import InputAdornment from '@mui/material/InputAdornment';


import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import IconButton from '@mui/material/IconButton';


import logo from '../../../static/assets/images/arquellaLogoPng.png'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Register() {

  const [age, setAge] = React.useState('');


  const [selectedValue, setSelectedValue] = React.useState('a');



  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword1, setShowPassword1] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  function getSteps() {
    return [
      "",
      "",
      "",
    ];
  }

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {

  //   {
  //     "email":"sarfaraz1@gmail.com",
  //     "password":"sushrut@123",
  //     "careGroupName": "EOV4", 
  //     "careGroupAddress": "D-372 10th Block near MOH snk", 
  //     "mobile": "5685474547", 
  //     "noOfCareHomes": "12",
  //     "careHomeName": "Elderly Home 2", 
  //     "careHomeAddress": "Gandhi Nagar 1", 
  //     "rooms": "4", 
  //     "zones": "1", 
  //     "enSuites": "1", 
  //     "managerName": "sarfaraz2"
  //  }

    console.log("here...", data);
    if (activeStep == steps.length - 1) {
      // axios.post('http://localhost:3007/auth/register', userPayload)
      // .then(res => {
      //   localStorage.setItem('refreshToken', res.data.refresh_token);
      //   // redirect to home page or dashboard
      // })
      // .catch(error => {
      //   setError(error.response.data.message);
      // });


      // fetch("https://jsonplaceholder.typicode.com/comments")
      //   .then((data) => data.json())
      //   .then((res) => {
      //     console.log(res);
      //     setActiveStep(activeStep + 1);
      //   });

    } else {
      setActiveStep(activeStep + 1);
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


  const Step1a = () => {
    const { control } = useFormContext();
    return (
      <div>

        <Container  >
          <Box
            sx={{
              boxShadow: 1,
              // width: 374,
              // height: 707,
              // px: 2,
              // py: 2,
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              borderRadius: 5,
              border: '1px solid #888C8C',
              // alignContent: 'center',
              // alignSelf: 'center',

            }}
          >
            <FormProvider  {...methods}>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5, mb: 5 }} >
                <FormControl>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="CareGroup" control={<Radio
                      checked={selectedValue === 'a'}
                      onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      slotProps={{ input: { 'aria-label': 'A' } }}

                    />} label="Care Group" />
                    <FormControlLabel value="CareHome" control={<Radio
                      checked={selectedValue === 'b'}
                      onChange={handleChange}
                      value="b"
                      name="radio-buttons"
                      slotProps={{ input: { 'aria-label': 'B' } }}

                    />} label="Care Home" />

                  </RadioGroup>
                </FormControl>

                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}


                <Container component="main" maxWidth="lg" >
                  <FormControl variant="outlined" style={{ width: '95%' }}>
                    <Controller
                      control={control}
                      name="careHomeName"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="careHomename"
                          label="Care Group Name"
                          name="careHomename"
                          autoFocus
                          fullWidth
                          variant={'outlined'}
                          {...field}
                        />
                      )}
                    />
                  </FormControl>
                </Container>



                <Container component="main" maxWidth="lg" >
                  <FormControl variant="outlined" style={{ width: '95%' }}>
                    <Controller
                      control={control}
                      name="noOfHomes"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="noOfHomes"
                          label="Number of Homes"
                          name="noOfHomes"

                          // autoFocus
                          fullWidth
                          variant={'outlined'}
                          {...field}
                        />
                      )}
                    />

                  </FormControl>
                </Container>

                <Container component="main"   >
                  <FormControl variant="outlined" style={{ width: '95%' }}>
                    <Controller
                      control={control}
                      name="careGroupAddress"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="careGroupAddress"
                          label="Address"
                          name="careGroupAddress"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />
                  </FormControl>
                </Container>

                <Grid container spacing={3}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                // style={{ minHeight: '100vh' }}
                >
                  <Grid item md={5}>
                    <Controller
                      control={control}
                      name="careGroupCity"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="careGroupCity"
                          label="City"
                          name="careGroupCity"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />

                  </Grid>
                  <Grid item md={5}>
                    <Controller
                      control={control}
                      name="careGroupCountry"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="careGroupCountry"
                          label="Country"
                          name="careGroupCountry"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />

                  </Grid>
                </Grid>

                <Grid container spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                // style={{ minHeight: '100vh' }}
                >
                  <Grid item xs={5}>
                    <Controller
                      control={control}
                      name="careGroupContactNo"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="cno"
                          label="Contact No"
                          name="careGroupContactNo"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />

                  </Grid>
                  <Grid item xs={5}>
                    <Controller
                      control={control}
                      name="careGroupEmail"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="email"
                          label="Email Address"
                          name="careGroupEmail"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />

                  </Grid>
                </Grid>
                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}





                {/* <Button variant="contained" sx={{ background: '#10CFC9', width: 294, height: 40, borderRadius: 20, mt: 3 }}
className='next'
>
Next
</Button> */}



                <Grid container spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                // style={{ minHeight: '100vh' }}
                >
                  <Grid item xs={8}>

                    <p className="already">
                      Already have an account?

                    </p>

                  </Grid>
                  <Grid item xs={4}>
                    <Link href="/Login" className='login' style={{ textDecoration: 'none', marginLeft: 25 }}>
                      {"Login"}
                    </Link>
                  </Grid>
                </Grid>

              </Box>
              <div style={{
                textAlign: 'center'
              }}>
                <Button
                  variant="contained" sx={{ borderRadius: '40px', width: '294px', backgroundColor: '#10CFC9', marginBottom: 5 }}
                  color="primary"
                  // onClick={handleNext}
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </FormProvider>
          </Box>
        </Container>
      </div>
    )
  }

  const Step1 = () => {
    const { control } = useFormContext();
    return (
      <div>

        <Container  >
          <Box
            sx={{
              boxShadow: 1,
              // width: 374,
              // height: 707,
              // px: 2,
              // py: 2,
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              borderRadius: 5,
              border: '1px solid #888C8C',
              // alignContent: 'center',
              // alignSelf: 'center',

            }}
          >
            <FormProvider {...methods}>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5, mb: 5 }} >
                <FormControl>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="CareGroup" control={<Radio
                      checked={selectedValue === 'a'}
                      onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      slotProps={{ input: { 'aria-label': 'A' } }}

                    />} label="Care Group" />
                    <FormControlLabel value="CareHome" control={<Radio
                      checked={selectedValue === 'b'}
                      onChange={handleChange}
                      value="b"
                      name="radio-buttons"
                      slotProps={{ input: { 'aria-label': 'B' } }}

                    />} label="Care Home" />

                  </RadioGroup>
                </FormControl>

                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}
                <Container component="main" maxWidth="lg" >
                  <FormControl variant="outlined" style={{ width: '95%' }}>
                    <Controller
                      control={control}
                      name="careHomename"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="careHomename"
                          label="Care Home Name"
                          name="careHomename"
                          {...field}
                          autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />


                  </FormControl>
                </Container>

                <Container component="main"   >
                  <FormControl variant="outlined" style={{ width: '95%' }}>
                    <Controller
                      control={control}
                      name="careHomeAddress"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="careHomeAddress"
                          label="Address"
                          name="careHomeAddress"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />
                  </FormControl>
                </Container>



                <Grid container spacing={3}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                // style={{ minHeight: '100vh' }}
                >
                  <Grid item md={5}>
                    <Controller
                      control={control}
                      name="careHomeCity"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="careHomeCity"
                          label="City"
                          name="careHomeCity"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />

                  </Grid>
                  <Grid item md={5}>
                    <Controller
                      control={control}
                      name="careHomeCity"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="careHomeCountry"
                          label="Country"
                          name="careHomeCountry"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                // style={{ minHeight: '100vh' }}
                >
                  <Grid item xs={5}>
                    <Controller
                      control={control}
                      name="careHomeContactNo"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="cno"
                          label="Contact No"
                          name="careHomeContactNo"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />

                  </Grid>
                  <Grid item xs={5}>
                    <Controller
                      control={control}
                      name="careHomeEmail"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="careHomeEmail"
                          label="Email Address"
                          name="careHomeEmail"
                          {...field}
                          // autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />

                  </Grid>
                </Grid>
                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}

                <Grid container spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                // style={{ minHeight: '100vh' }}
                >
                  <Grid item xs={8}>

                    <p className="already">
                      Already have an account?

                    </p>

                  </Grid>
                  <Grid item xs={4}>
                    <Link href="/Login" className='login' style={{ textDecoration: 'none', marginLeft: 25 }}>
                      {"Login"}
                    </Link>
                  </Grid>
                </Grid>

              </Box>
              <div style={{
                textAlign: 'center'
              }}>
                <Button
                  variant="contained" sx={{ borderRadius: '40px', width: '294px', backgroundColor: '#10CFC9', marginBottom: 5 }}
                  color="primary"
                  // onClick={handleNext}
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </FormProvider>
          </Box>
        </Container>
      </div>
    )
  }



  const Step2 = () => {
    const { control } = useFormContext();
    return (
      <div>

        <Container component="main" maxWidth="xs" >
          <Box
            sx={{
              boxShadow: 1,
              // width: 374,
              // height: 707,
              // px: 2,
              // py: 2,
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 5,
              border: '1px solid #888C8C',
              alignContent: 'center',
              alignSelf: 'center',

            }}
          >
            <FormProvider  {...methods}>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5, mb: 5 }} >


                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}
                <Grid container spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                // style={{ minHeight: '100vh' }}
                >
                  <Grid item xs={5}>
                    <Controller
                      control={control}
                      name="NumberOfRoomsIncareHome"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="NumberOfRoomsIncareHome"
                          label="Number Of Rooms"
                          name="NumberOfRoomsIncareHome"
                          {...field}
                          autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />

                  </Grid>
                  <Grid item xs={5}>
                    <Controller
                      control={control}
                      name="numberOfZonesInCareHome"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="numberOfZonesInCareHome"
                          label="Number of Zones"
                          name="numberOfZonesInCareHome"
                          {...field}
                          autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />

                  </Grid>
                </Grid>

                <Container component="main"   >
                  <FormControl variant="outlined" style={{ width: '95%' }}>
                    <Controller
                      control={control}
                      name="NumberOfCommunityRoomsInCareHome"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="NumberOfCommunityRoomsInCareHome"
                          label="Number of Community Rooms"
                          name="NumberOfCommunityRoomsInCareHome"
                          {...field}
                          autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />


                  </FormControl>
                </Container>

                <Container component="main"   >
                  <FormControl variant="outlined" style={{ width: '95%' }}>
                    <Controller
                      control={control}
                      name="careHomeNumberOfEnSuitesInCareHome"
                      render={({ field }) => (
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="careHomeNumberOfEnSuitesInCareHome"
                          label="Number of en Suites"
                          name="careHomeNumberOfEnSuitesInCareHome"
                          {...field}
                          autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                      )}
                    />


                  </FormControl>
                </Container>
                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}






                <Grid container spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                // style={{ minHeight: '100vh' }}
                >
                  <Grid item xs={8}>

                    <p className="already">
                      Already have an account?

                    </p>

                  </Grid>
                  <Grid item xs={4}>
                    <Link href="/Login" className='login' style={{ textDecoration: 'none', marginLeft: 25 }}>
                      {"Login"}
                    </Link>
                  </Grid>
                </Grid>

              </Box>
              <div style={{
                textAlign: 'center'
              }}>
                <Button
                  variant="contained" sx={{ borderRadius: '40px', width: '294px', backgroundColor: '#10CFC9', marginBottom: 5 }}
                  color="primary"
                  // onClick={handleNext}
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </FormProvider>
          </Box>
        </Container>
      </div>
    )
  }

  const Step3 = () => {
    const { control } = useFormContext();
    return (
      <div>

        <Container component="main" maxWidth="xs" >
          <Box
            sx={{
              boxShadow: 1,
              // width: 374,
              // height: 707,
              // px: 2,
              // py: 2,
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 5,
              border: '1px solid #888C8C',
              alignContent: 'center',
              alignSelf: 'center',

            }}
          >
            <FormProvider {...methods}>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5, mb: 5 }} >


                {/* <!-------------------------------------------------------For Stepper 3 ---------------------------------------------------------------> */}
                <Container component="main" maxWidth="lg" >
                  <Controller
                    control={control}
                    name="userEmailAddress"
                    render={({ field }) => (
                      <TextField
                        margin="normal"
                        required
                        size={'large'}
                        id="userEmailAddress"
                        label="Email Address"
                        name="userEmailAddress"
                        autoComplete="email"
                        autoFocus
                        fullWidth
                        variant={'outlined'}
                        {...field}
                      />
                    )}
                  />

                </Container>
                <br />
                <Container component="main"   >
                  <FormControl variant="outlined" style={{ width: '100%' }}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

                    <Controller
                      control={control}
                      name="password"
                      render={({ field }) => (
                        <OutlinedInput
                          id="outlined-adornment-password"
                          name='password'
                          {...field}
                          type={showPassword ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                          fullWidth
                        />
                      )}
                    />
                  </FormControl>
                </Container>

                <div className="pwText">
                  <p className="pwText1">
                    Password must be at least 8 characters long with 1 uppercase 1 lowercase & 1 numeric character
                  </p>
                </div>

                <Container component="main"   >
                  <FormControl variant="outlined" style={{ width: '100%' }}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"

                      type={showPassword1 ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword1}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword1 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      fullWidth
                    />
                  </FormControl>
                </Container>

                {/* <!-------------------------------------------------------For Stepper 1 ---------------------------------------------------------------> */}


                <Grid container spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                // style={{ minHeight: '100vh' }}
                >
                  <Grid item xs={8}>

                    <p className="already">
                      Already have an account?

                    </p>

                  </Grid>
                  <Grid item xs={4}>
                    <Link href="/Login" className='login' style={{ textDecoration: 'none', marginLeft: 25 }}>
                      {"Login"}
                    </Link>
                  </Grid>
                </Grid>


              </Box>
              <div style={{
                textAlign: 'center'
              }}>
                <Button
                  variant="contained" sx={{ borderRadius: '40px', width: '294px', backgroundColor: '#10CFC9', marginBottom: 5 }}
                  color="primary"
                  // onClick={handleNext}
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </FormProvider>
          </Box>
        </Container>
      </div>
    )
  }


  function getStepContent(step) {
    switch (step) {
      case 0:
        return (selectedValue == 'a' ? <Step1a /> : <Step1 />);

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

  const methods = useForm({
    defaultValues: {
      careHomeName: '',
      careGroupAddress: '',
      careHomeAddress: '',
      careGroupCity: '',
      careGroupCountry: '',
      careGroupContactNo: '',
      careGroupEmail: '',
      careHomeRooms: '',
      careHomeCity: '',
      careHomeCountry: '',
      careHomeContactNo: '',
      careHomeEmail: '',
      numberOfZonesInCareHome: '',
      NumberOfCommunityRoomsInCareHome: '',
      NumberOfRoomsIncareHome: '',
      careHomeNumberOfEnSuitesInCareHome: '',
      userEmailAddress: "",
      password: "",

    },
  });



  return (
    <div className=''>
      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={0} >
          <Grid item xs={6} >
            <div className='loginImageCont' >
              <div className='textWrap'>
                <div><p className='hedOne'>Smart, wireless nurse call systems.</p></div>
                <div><p className='hedTwo' >Driven by data, inspired by care.</p></div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}  >
            <div className='formContainerTop' >
              <div className='uperContian'>
                <div className='logoCont'>
                  <img src={logo} />
                  {/* <div className='textLogo'>
                    <div><p className='hedOneLogo'>This is Arquella </p></div>
                    <div><p className='hedTwoLogo' >Capturing moments of care </p></div>
                  </div> */}
                </div>



                <Container component="main" maxWidth="xs" >
                  <Stepper alternativeLabel activeStep={activeStep}>
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

                        <Step {...stepProps} key={index} style={{ marginTop: 20 }}
                          sx={{
                            '& .MuiStepLabel-root .Mui-completed': {
                              color: '#10CFC9', // circle color (COMPLETED)
                            },
                            '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                            {
                              color: 'grey.500', // Just text label (COMPLETED)
                            },
                            '& .MuiStepLabel-root .Mui-active': {
                              color: '#10CFC9', // circle color (ACTIVE)
                            },
                            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                            {
                              color: 'common.white', // Just text label (ACTIVE)
                            },
                            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                              fill: 'white', // circle's number (ACTIVE)
                            },
                          }}
                        >
                          <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>



                      );
                    })}
                  </Stepper>

                  <p className="dynamicText">
                    {activeStep === 0 ? ' Basic Information' : ''}
                    {activeStep === 1 ? ' Care Home Details' : ''}
                    {activeStep === 2 ? ' Manager login details' : ''}

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

                          {/* <Button

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
                          </div> */}
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


  )
}

export default Register