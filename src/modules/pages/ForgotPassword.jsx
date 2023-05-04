import React from 'react'
import '../../static/css/forgotPass.css'
import { Box, Button, Grid, TextField } from '@mui/material'
import img from '../../static/assets/images/loginpagePic.png'
import logo from '../../static/assets/images/arquellaLogoPng.png'


export const ForgotPassword = () => {
  return (

    <div> <Grid container spacing={2}>
      <Grid item  xs={12} sm={6} lg={6} className='loginImageCont'>
            <div className='loginImageCont' >
              <div className='textWrap'>
                <div><p className='hedOne'>Smart, wireless nurse call systems.</p></div>
                <div><p className='hedTwo' >Driven by data, inspired by care.</p></div>
              </div>
            </div>
          </Grid>
      <Grid item xs={6}>
        <div style={{
          backgroundColor: '',
          backgroundSize: "cover",
          height: "auto",
          color: "",
          margin: "0px 0px 0px 0px",
          padding: "90px 0px 0px 0px",

        }}>
          <div className='containerForm'>
            <div className='formUpperContent'>
              <img src={logo} width={236} height={73} />
              <div style={{
                color: "red",
                margin: '16px 0px 0px 16px',
                padding: '0px 0px 0px 0px',
                lineHeight: '53px',
              }}>

                <p style={{
                  margin: '0',
                  fontFamily: 'Muli',
                  color: '#000000',
                  fontSize: '28px',
                  fontWeight: '700'
                }}> This is Arquella  </p>

                <p style={{
                  color: "#4CC1BE",
                  fontFamily: 'Muli',
                  margin: '0',
                  fontSize: '28px',
                  fontWeight: '700'

                }} > Capturing moments of care </p>
              </div>
            </div>
            <div className='formContainer'>
              <div style={{

                margin: '0px 0px 16px 0px',
                padding: '0px 0px 0px 0px',

              }}>
                <TextField sx={{ color: '#10CFC9', width: '294px', }} id="outlined-basic" label="E-Mail" variant="outlined" />
              </div>

              <div style={{

                margin: '8px 0px 32px 0px',
                padding: '0px 0px 0px 0px',

              }}>
                <Button variant="contained" sx={{ borderRadius: '100px', width: '294px', backgroundColor: '#0EB9B3' }}>Submit</Button>
              </div>

              <div>
                <p style={{
                  color: "#10CFC9",
                  fontFamily: 'Muli',
                  margin: '0',
                  fontSize: '14px',
                  fontWeight: '700'

                }}>Back to login </p>
              </div>

            </div>

          </div>


        </div>
      </Grid>

    </Grid></div >
  )
}
