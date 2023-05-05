import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./login.css";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LoginIcon from "@mui/icons-material/Login";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import FormControlLabel from "@mui/material/FormControlLabel";

import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";

import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import IconButton from "@mui/material/IconButton";

import logo from "../../../static/assets/images/arquellaLogoPng.png";
import axios from "axios";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { logInWithEmailAndPassword } from "../../services/auth";

// import logo from '../../../'

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Login() {
  const [age, setAge] = React.useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const openAlert = () => {
    handleClickOpen();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let userPayload = {
      email: data.get("email"),
      password: data.get("password"),
    };

    await logInWithEmailAndPassword(userPayload).then((data) => {
      // console.log("LOGIN", JSON.stringify( data.data.refresh_token, null, 2));
      if (data === undefined) {

        console.log("here in error");
        openAlert();
      } else {
        localStorage.setItem('refreshToken',data.data.refresh_token);
        navigate("/dashboard");
        
      }
    });
  };

  return (
    <div>
      <Box>
        <Grid container spacing={0} xs={12} sm={12} lg={12}>
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
          <Grid item xs={12} sm={6} lg={6} className="formContent">
            <div className="formContainerTop">
              <div className="uperContian">
                <div className="logoCont">
                  <img src={logo} />
                  <div className="textLogo">
                    <div>
                      <p className="hedOneLogo">This is Arquella </p>
                    </div>
                    <div>
                      <p className="hedTwoLogo">Capturing moments of care </p>
                    </div>
                  </div>
                </div>

                <Container component="main" maxWidth="xs">
                  <Box
                  className='formParentContainer'
                    sx={{
                      boxShadow: 1,
                      width: 374,
                      height: 525,
                      // px: 2,
                      // py: 2,
                      marginTop: 4.5,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: 5,
                      border: "1px solid #888C8C",
                      alignContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      noValidate
                      sx={{ mt: 2 }}
                    >
                      <Container component="main" maxWidth="lg">
                        <TextField
                          margin="normal"
                          required
                          size={"large"}
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          fullWidth
                          variant={"outlined"}
                          style={{ width: 294 }}
                        />
                      </Container>
                      <br />
                      <Container component="main">
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                        >
                          <InputLabel
                            htmlFor="outlined-adornment-password"
                            style={{ paddingLeft: 20 }}
                          >
                            Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            name="password"
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
                            // fullWidth
                            style={{
                              width: 294,
                              justifyContent: "center",
                              alignContent: "center",
                              alignSelf: "center",
                            }}
                          />
                        </FormControl>
                        {/* <FormControlLabel
            
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
                        <div className="pwText">
                          <p className="pwText1">
                            Password must be at least 8 characters long with 1
                            uppercase 1 lowercase & 1 numeric character
                          </p>
                        </div>
                        <div className="checkboxCont">
                          <Checkbox
                            {...label}
                            defaultChecked
                            style={{ color: "#0EB9B3" }}
                          />
                          <p className="remember"> Remember Me</p>
                        </div>
                        <Button
                          type="submit"
                          variant="contained"
                          startIcon={<LoginIcon style={{ color: "#1D192B" }} />}
                          sx={{
                            background: "#0EB9B3",
                            width: 294,
                            height: 40,
                            borderRadius: 20,
                            fontFamily: "muli",
                            fontWeight: 700,
                            fontSize: 14,
                            color: "#1D192B",
                            lineHeight:'20px'
                          }}
                          onClick={() => {}}
                        >
                          <span className="loginBtnLabel" >LogIn</span>
                        </Button>
                      </Container>

                      <Button
                        variant="outlined"
                        className="registerButton"
                        sx={{
                          width: 294,
                          height: 40,
                          borderRadius: 20,
                          marginTop: 2,
                        }}
                        onClick={() => {
                          navigate("/registration");
                        }}
                      >
                        Register Now
                      </Button>

                      <Grid container className="fwpw">
                        <Grid item xs={6}>
                          <FormControl
                            sx={{ m: 1, minWidth: 100, paddingRight: " 2px" }}
                            className="languageParentDiv"
                          >
                            <InputLabel
                              id="demo-select-small-label"
                              style={{
                                marginTop: -4,
                                fontSize: "14px",
                                fontWeight: 700,
                                lineHeight: "14px",
                              }}
                            >
                              English
                            </InputLabel>
                            <Select
                              labelId="demo-select-small-label"
                              id="demo-select-small"
                              value={age}
                              label="English"
                              onChange={handleChange}
                              size="small"
                              sx={{
                                color: "black",
                                ".MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#10CFC9",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "#10CFC9",
                                  },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#10CFC9",
                                },
                                ".MuiSvgIcon-root ": {
                                  fill: "black !important",
                                },
                                borderRadius: 2,
                              }}
                              IconComponent={() => (
                                <KeyboardArrowDownIcon
                                  style={{
                                    marginRight: 0,
                                    pointerEvents: "none",
                                  }}
                                />
                              )}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} style={{ marginTop: 15 }}>
                          <Link
                            href="/Forgotpw"
                            variant="body2"
                            className="forgotpw"
                            style={{ textDecoration: "none", marginLeft: 25 }}
                          >
                            {"Forgot password"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Container>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Entered Email id or Password is incorrect"}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>Try Again</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;
