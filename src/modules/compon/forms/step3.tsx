import React, { useState, useEffect, useRef, useImperativeHandle } from "react";

import { Box, IconButton, InputAdornment } from "@mui/material";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import Container from "@mui/material/Container";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Step3 = ({ change, button, handleChange, handleRadio, getData }) => {
  const [emailError, setEmailError] = useState("");

  const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .matches(passwordRegExp, "Password error")
      .min(8, "must be at 10 char long"),
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

  const [showPassword1, setShowPassword1] = React.useState(true);
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword1 = () => {
    setShowPassword1((prev) => !prev);
  };

  function onSubmit(data) {
    // console.log(JSON.stringify(data, null, 4));
    let formData = data;
    getData(formData);

    return false;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mt: 5, mb: 5 }}>
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
            />
          </Container>

          <Container component="main" maxWidth="lg">
            <TextField
              {...register("password")}
              margin="dense"
              label="Password"
              name="password"
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
            />
          </Container>

          <div className="pwText">
            <p className="pwText1">
              Password must be at least 8 characters long with 1 uppercase 1
              lowercase & 1 numeric character
            </p>
          </div>

          <Container component="main" maxWidth="lg">
            <TextField
              {...register("confirmPwd")}
              margin="dense"
              label="Confirm Password"
              name="confirmPwd"
              type={showPassword1 ? "text" : "password"}
              fullWidth
              variant={"outlined"}
              error={errors.confirmPwd?.message}
              helperText={errors.confirmPwd?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword1}
                    >
                      {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
              mt: 2,
              mb: 2,
            }}
            color="primary"
           
            type="submit"
          >
           
            {button}
          </Button>
        </Container>
      </Box>
    </form>
  );
};

export default Step3;
