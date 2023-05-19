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








const Step1a = ({change,button, handleChange,handleRadio, getData} ) => {
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
       

        cno: Yup.string().matches(phoneRegExp, 'Phone number is not valid') .min(10, "must be at 10 char long"),
        email: Yup.string().email(),

    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
    function onSubmit(data: any) {
    //   console.log(JSON.stringify(data, null, 4))

    let formData = data;

    getData(formData)
   


      
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
                        //   checked={handleRadio}
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
                          checked={handleRadio}
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
                          type="number"
                        
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
                        label="address"
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
                        
                          fullWidth
                          variant={"outlined"}
                          error={errors.cno?.message}
                        helperText={errors.cno?.message}
                        
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
                {/* {activeStep === steps.length - 1 ? "Finish" : "Next"} */}
                {button}
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

  export default Step1a;