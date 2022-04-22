import { Box, Button, TextField,Typography } from '@mui/material'

import React, {useState, useEffect} from 'react'
import axios from "axios";
import apiUrl from '../appConfig';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({
        name : "",
        email : "",
        password :""
    });
    const [createdItem, setCreatedItem] = useState(null);
    const handleChange= (e) =>{

    setInputs((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value,
    }))
    // console.log(e.target.name, "value",e.target.value);
    }

    const sendRequest = async () =>{
        const res = await axios.post(`${apiUrl}/users/signup`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password
        }).catch(err => console.log(err));
        const data = await res.data;
        return data;
    }


    const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(inputs);
    sendRequest().then(data => setCreatedItem(data)).catch(console.error);
    }

    useEffect(() =>{
        if(createdItem){
          return navigate('/login')
        }
      },[createdItem,navigate])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box 
            display="flex" 
            flexDirection={'column'} 
            alignItems='center' 
            justifyContent={'center'} 
            boxShadow="10px 10px 20px #69b4b9"
            padding ={3}
            margin='auto'
            marginTop={5}
            borderRadius = {5}
             maxWidth = {400}>
                <Typography variant='h2' padding={3} textAlign='center' color={'#51ba42'}>Sign Up</Typography>
                <TextField onChange = {handleChange} name = 'name' value = {inputs.name} placeholder='Name' margin ="normal"></TextField>
                <TextField onChange = {handleChange} name = 'email' value = {inputs.email} placeholder='E-mail' type={'email'} margin ="normal"></TextField>
                <TextField onChange = {handleChange} name = 'password' value = {inputs.password} placeholder='Password' type={'password'} margin ="normal"></TextField>
                <Button type='submit' variant='contained' sx={{borderRadius: 2, backgroundColor:'#51ba42', color: 'white',fontWeight:'bolder', margin: 1,  "&:hover": {
            backgroundColor: "#5a7be3",
            color:"white"
            }}}>SignUp</Button>
            </Box>
        </form>
    </div>
  )
}

export default SignUp
