import React, {useState ,useEffect } from "react";

//redux imports
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/features/counter'
import { getCareGroup } from "../services/careGroupAndHomeSer";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextField, Button } from '@mui/material';


function DashBoardPage() {
  const [open, setOpen] = React.useState(false);

  const [resData, setResData] = React.useState({});

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send formData to the POST API
    fetch('https://example.com/api', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };



  useEffect(() => {
    getCareGroup({
      "care_group_name": "maruti cg"
    }).then(res => {
      console.log("++++++++", res)
      setResData(res)
    })
      .catch(err => console.log("err caregroup", err))

  }, [])


  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <div style={{ marginLeft: '120px' }}>

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Add CareHome</Typography>
          </AccordionSummary>
          <AccordionDetails>

            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="lastname"
                label="Lastname"
                value={formData.lastname}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>

          </AccordionDetails>
        </Accordion>
      </div>

      <p>Redux Counter</p>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>

      <p style={{ color: "Green" }}>
        {resData.message}
      </p>
      {resData.data &&
        <ul>
          <li style={{ color: "Purple" }} >Care Group Name:-  {resData.data.care_group_name}</li>
          <li>Care Group Email:-  {resData.data.care_group_email}</li>
          <li>Care Group Manager Email:-  {resData.data.care_group_manager_email}</li>
          <li>Care Group City:-  {resData.data.care_group_city}</li>
          <li>Care Group Contact no:-  {resData.data.care_group_contact_no}</li>
          <li>Care Group Country:-  {resData.data.care_group_country}</li>
          <li>Care Group Adress:-  {resData.data.care_group_address}</li>
        </ul>
      }


      <div style={{ marginTop: '24px' }}>
        <p style={{ color: "Red" }} >Care Homes Present in CareGroup  </p>

        {resData.data &&
          resData.data.careHomes.map((item) => (
            <div key={item.id} style={{ margin: '24px' }}>
              <li style={{ color: "Purple" }}>Name: {item.care_home_name}</li>
              <li>care_home_email: {item.care_home_email}</li>
              <li>care_home_manager_email: {item.care_home_manager_email}</li>
              <li>care_home_contact_no: {item.care_home_contact_no}</li>
              <li>care_home_address: {item.care_home_address}</li>
            </div>
          ))

        }

      </div>



    </div>
  );
}

export default DashBoardPage;
