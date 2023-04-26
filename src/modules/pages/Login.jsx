import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import '../../static/css/login.css'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Login() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  return (
    <div className=''>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className='loginImageCont'>
              <div className='textWrap'>
                <div><p className='hedOne'>Smart, wireless nurse call systems.</p></div>
                <div><p className='hedTwo' >Driven by data, inspired by care.</p></div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className='formContainer'>
              <div className='uperContian'>
                <div className='logoCont'>
                  <img src='../../static/assets/images/arquellaLogoPng.png' width={190} height={60} />
                  <div className='textLogo'>
                    <div><p className='hedOneLogo'>This is Arquella </p></div>
                    <div><p className='hedTwoLogo' >Capturing moments of care </p></div>
                  </div>
                </div>

                <div className='fomrCont'>

                  <div>
                    <TextField id="demo-helper-text-misaligned-no-helper" label="E-Mail" />
                  </div>

                  <div>
                    <TextField id="demo-helper-text-misaligned-no-helper" label="Password" />
                  </div>

                  <div>
                    <p>
                      Password must be at least 8 characters long with 1 uppercase 1 lowercase & 1 numeric character
                    </p>
                  </div>
                  <div className='checkboxCont'>
                    <Checkbox {...label} defaultChecked />
                    <p>Rememer me</p>
                  </div>

                  <div>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </div>

                  <div>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </div>

                  <div>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">English</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>


                </div>
              </div>

            </div>
          </Grid>

        </Grid>
      </Box>

    </div>

  )
}

export default Login