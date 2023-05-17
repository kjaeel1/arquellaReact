

import React, { useState } from 'react'
import axios from 'axios';

const Apiurl = 'http://localhost:3007/care/';
const token = localStorage.getItem('refreshToken')


export const getCareGroup = async (getCareGroupReqBody) => {
    try {
        const response = await axios.post(Apiurl + 'getcaregroup',
            getCareGroupReqBody,
             {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        // Handle the response data
        console.log("from registration fucn sucess", response.data);
        return response.data
    } catch (error) {
        // Handle any errors that occurred during the registration API call
        console.error("from error registartion fun", error);
        return error
    }

}




