import React, { useState } from 'react'
import axios from 'axios';

const Apiurl = 'http://localhost:3007/auth/'

export const logInWithEmailAndPassword = async (
    userPayload
  )=> {
   
    try {
  
     
    
        const response = await 
        axios.post( Apiurl+'login', userPayload)
    
        const json = response;
        console.log(json)
        return json;
      
    } catch (error) {
      console.error('Error', error);
    }
  };


  export const registerUser = async (
    registrationPayload
  )=> {
   console.log("- - - - -  --- - - -",registrationPayload)
    try {

        const response = await 
  
        axios.post(Apiurl+'register', registrationPayload)
    
        const json = response;
        console.log(json)
        return json;
      
    } catch (error) {
      console.error('Error', error);
    }
  };
