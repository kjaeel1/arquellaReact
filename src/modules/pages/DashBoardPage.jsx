import React, { useEffect } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import axios from "axios";

function DashBoardPage() {
  const [open, setOpen] = React.useState(false);

  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImVtYWlsIjoidGF0YUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY4MzI3NjI2MywiZXhwIjoxNzE0ODMzODYzfQ.OcppcrQgm0_3GW8gBhOpMgdJnbKHX3RGC9sqkcdLN9E";

  const [resData, setResData] = React.useState([]);

  const apiUrl = "http://localhost:3007/care/caregroupandhomes";



    useEffect(()=> {

      axios.defaults.headers.common["Authorization"] = authToken;

      axios
        .post(apiUrl)
    
        .then((response) => {
          console.log("565", JSON.stringify(response.data, null,2) );
    
          setResData([response.data]);
        })
    
        .catch((error) => {
          console.log(error);
        });
    },[])

  return (
    <div>
    
<p>
  



{resData.map(info => <div>{info.working}</div>)}
  
 

  
   
</p>
 
      <p>ddd</p>
    </div>
  );
}

export default DashBoardPage;
