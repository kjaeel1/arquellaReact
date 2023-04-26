import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import './register.css'
import Checkbox from '@mui/material/Checkbox';

import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';

import Container from "@mui/material/Container";




import OutlinedInput from '@mui/material/OutlinedInput';

import InputAdornment from '@mui/material/InputAdornment';


import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import IconButton from '@mui/material/IconButton';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Register() {

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };



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
            <div className='formContainer' >
              <div className='uperContian'>
                <div className='logoCont'>
                  <img src={require('../../../static/assets/images/arquellaLogoPng.png')} />
                  <div className='textLogo'>
                    <div><p className='hedOneLogo'>This is Arquella </p></div>
                    <div><p className='hedTwoLogo' >Capturing moments of care </p></div>
                  </div>
                </div>


                <Container component="main" maxWidth="xs" >
                  <Box
                    sx={{
                      boxShadow: 1,
                      width: 374,
                      // height: 707,
                      // px: 2,
                      // py: 2,
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: 5,
                      border: '1px solid #888C8C',
                      alignContent: 'center',
                      alignSelf: 'center',

                    }}
                  >

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5, mb: 5 }} >
                    <FormControl>
  
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="CareGroup" control={<Radio />} label="Care Group" />
        <FormControlLabel value="CareHome" control={<Radio />} label="Care Home" />
       
      </RadioGroup>
    </FormControl>


                      <Container component="main" maxWidth="lg" >
                      <FormControl  variant="outlined"   style={{width: '95%'}}>
                  
                  <TextField
                      margin="normal"
                      required
                      size={'large'}
                      id="careHomename"
                      label="Care Home Name"
                      name="Address"
                     
                      autoFocus
                      fullWidth
                      variant={'outlined'}
                    />
                </FormControl>
                      </Container>
                    
                      <Container component="main"   >
                      <FormControl  variant="outlined"   style={{width: '95%'}}>
                  
                      <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="address"
                          label="Address"
                          name="Address"
                         
                          autoFocus
                          fullWidth
                          variant={'outlined'}
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
         
                  
                      <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="city"
                          label="City"
                          name="city"
                         
                          autoFocus
                          fullWidth
                          variant={'outlined'}
                          
                          
                        />

                         </Grid>
                         <Grid item md={5}>
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="country"
                          label="Country"
                          name="country"
                         
                          autoFocus
                          fullWidth
                          variant={'outlined'}
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
         
                  
                      <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="cno"
                          label="Contact No"
                          name="cno"
                         
                          autoFocus
                          fullWidth
                          variant={'outlined'}
                          
                          
                        />

                         </Grid>
                         <Grid item xs={5}>
                        <TextField
                          margin="normal"
                          required
                          size={'large'}
                          id="email"
                          label="Email Address"
                          name="email"
                         
                          autoFocus
                          fullWidth
                          variant={'outlined'}
                        />
                        </Grid>
                        </Grid>

                        <Button variant="contained"  sx={{ background: '#10CFC9', width: 294, height: 40, borderRadius: 20, mt: 3 }}
                        className='next'
                        >
                        Next
                      </Button>
               
                    </Box>
                  </Box>
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