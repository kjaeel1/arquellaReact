import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Box, StepLabel } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Typography from "@mui/material/Typography";
import Step1a from "../../compon/forms/step1a";
import logo from "../../../static/assets/images/arquellaLogoPng.png";
import Step1 from "../../compon/forms/step1";
import Step2 from "../../compon/forms/step2";
import Step3 from "../../compon/forms/step3";


import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Register = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const [careGroupName, setCareGroupName] = useState("");
  const [noOfHomes, setNoOfHomes] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [cno, setCno] = useState("");
  const [groupEmail, setGroupEmail] = useState("");

  const [careHomeName, setCareHomeName] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [homeCity, setHomeCity] = useState("");
  const [homeCountry, setHomeCountry] = useState("");
  const [homeCno, setHomeCno] = useState("");
  const [homeEmail, SetHomeEmail] = useState("");

  const [noOfRoom, SetNoOfRoom] = useState("");
  const [noOfZones, SetNoOfZones] = useState("");
  const [noOfCommRooms, SetNoOfCommRooms] = useState("");
  const [noOfEnSuite, SetNoOfEnSuite] = useState("");

  const [loginEmail, SetLoginEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  // const [careGroupName, setCareGroupName] = useState("");

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

 
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const getStep1a = (data) => {
    setActiveStep(activeStep + 1);
    setCareGroupName(data.careGroupName);
    setNoOfHomes(data.noOfHomes);
    setHomeAddress(data.address);
    setAddress(data.address);
    setCity(data.city);
    setCountry(data.country);
    setCno(data.cno);

    setGroupEmail(data.email);

    console.log(JSON.stringify(data, null, 2));
  };

  function getStep1(data) {

    setActiveStep(activeStep + 1);

    setCareHomeName(data.careGroupName);

    setAddress(data.address);
    setHomeCity(data.city);
    setHomeCountry(data.country);
    setHomeCno(data.cno);
    SetHomeEmail(data.email);
    setHomeAddress(data.address);
    console.log(JSON.stringify(data, null, 2));
  }

  function getStep2(data) {
    setActiveStep(activeStep + 1);

    SetNoOfRoom(data.NumberOfRoomsInCareHome);
    SetNoOfZones(data.numberOfZonesInCareHome);
    SetNoOfCommRooms(data.NumberOfCommunityRoomsInCareHome);
    SetNoOfEnSuite(data.careHomeNumberOfEnSuitesInCareHome);

    console.log(JSON.stringify(data, null, 2));
  }

  function getStep3(data) {
    console.log("--0-", data);

    SetLoginEmail(data.email);
    setPassword(data.password);
    setConfirmPassword(data.confirmPwd);

    handleNext(data);
  }

  const handleNext = async (data) => {
    const updatedReqPyloadData = {
      // care_group_name: careGroupName,
      // care_group_email: groupEmail,
      // care_group_contact_no: cno,
      // care_home_name: careHomeName,
      // care_home_email: homeEmail,
      // care_home_contact_no: homeCno,
      // user_email_address: loginEmail,
      // password: password,
      // care_group_address: address,
      // care_home_address:homeAddress,
      // care_group_city: city,
      // care_group_country:country,
      // care_home_city: homeCity,
      // care_home_country:homeCountry,
      // number_of_zones_in_care_home: noOfZones,
      // number_of_community_rooms_in_care_home: noOfCommRooms,
      // number_of_rooms_in_care_home: noOfRoom,
      // number_of_en_suites_in_care_home: noOfEnSuite,
      // no_of_care_homes: noOfHomes

      care_group_name: careGroupName,
      care_group_email: groupEmail,
      care_group_contact_no: cno,
      care_home_name: careHomeName,
      care_home_email: homeEmail,
      care_home_contact_no: homeCno,
      user_email_address: data.email,
      password: data.password,
      care_group_address: address,
      care_home_address: homeAddress,
      care_group_city: city,
      care_group_country: country,
      total_number_of_rooms_in_care_group: noOfRoom,
      total_number_of_zones_in_care_group: noOfZones,
      total_number_of_community_rooms_in_care_group: noOfCommRooms,
      total_number_of_en_suites_in_care_group: noOfEnSuite,
      care_home_city: homeCity,
      care_home_country: homeCountry,
      number_of_zones_in_care_home: "0",
      number_of_community_rooms_in_care_home: "0",
      number_of_rooms_in_care_home: "0",
      number_of_en_suites_in_care_home: "0",
      no_of_care_homes: noOfHomes,
    };

    console.log("üpdated req payload", updatedReqPyloadData);
    console.log("step ..", activeStep);

    if (activeStep == steps.length - 1) {
      await axios
        .post("http://localhost:3007/auth/register", updatedReqPyloadData)
        .then((res) => {
          localStorage.setItem("refreshToken", res.data.refresh_token);
          // setSuccessMessage(res);
          navigate("/dashboard");
          // redirect to home page or dashboard
        })
        .catch((error) => {
          // setErrorMessage(error);
          // alert(error)
          console.log("condii runn *//*-", JSON.stringify(error, null, 2));
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }

    // if (activeStep == steps.length - 1) {

    // } else {
    //   if (data.careHomename == '') {
    //     console.log("condition run");
    //     // setActiveStep(activeStep - 1);
    //     setSelectedValue('b');

    //   }

    //   if (data.careHomename !== '') {

    //     setActiveStep(activeStep + 1);
    //     setSkippedSteps(
    //       skippedSteps.filter((skipItem) => skipItem !== activeStep)
    //     );
    //   }
    // }
  };

  

  function getStepContent(step) {
    switch (step) {
      case 0:
        return selectedValue == "a" ? (
          <Step1a
            button={activeStep === steps.length - 1 ? "Finish" : "Next"}
            // change={handleState}
            handleChange={handleChange}
            handleRadio={selectedValue === "b"}
            getData={getStep1a}
          />
        ) : (
          <Step1
            button={activeStep === steps.length - 1 ? "Finish" : "Next"}
            // handleChange={handleChange}
            // change={handleState}
            handleRadio={selectedValue === "a"}
            getData={getStep1}
          />
        );

      case 1:
        return (
          <Step2
            // change={handleState}
            button={activeStep === steps.length - 1 ? "Finish" : "Next"}
            getData={getStep2}
          />
        );
      case 2:
        return (
          <Step3
            button={activeStep === steps.length - 1 ? "Finish" : "Next"}
            getData={getStep3}
          />
        );
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
                      <>{getStepContent(activeStep)}</></>
                  )}
                </Container>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Register;
