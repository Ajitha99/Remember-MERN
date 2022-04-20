import { Button, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import apiUrl from '../appConfig'

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    password: ""
  })

  const handleChange = (e) =>{
    e.preventDefault();
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }


  

  const sendRequest = async () => {
    try {

      const response = await axios.post(` ${apiUrl}/users/login`,{
        email: inputs.email.toLowerCase(),
        password: inputs.password
      });
      const data = await response.data;
      return data;

    }catch(error){
      console.log(error);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputs);
    sendRequest();
  }

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
          maxWidth = {400}

          >
          <Typography variant='h2' padding={3} textAlign='center' color={'#51ba42'}>{isSignUp? "Sign Up" : "Login"}</Typography>
          {isSignUp && <TextField name = 'name' placeholder='Name' value={inputs.name} onChange={handleChange}  margin ="normal"/>}
          <TextField name= 'email' placeholder='Email' value={inputs.email} onChange={handleChange}  type={'email'} margin ="normal"/>
          <TextField name= 'password' placeholder='Password' value={inputs.password} onChange={handleChange} type={'password'} margin ="normal"/>
          <Button type ='submit' variant='contained' sx={{borderRadius: 2, backgroundColor:'#51ba42', color: 'white',fontWeight:'bolder', margin: 1,  "&:hover": {
      backgroundColor: "#5a7be3",
      color:"white"
    }}}>Submit</Button>
          <Button onClick={() =>setIsSignUp(!isSignUp)} sx={{borderRadius: 2, backgroundColor:'#51ba42', color: 'white',fontWeight:'bolder', margin: 1,"&:hover": {
      backgroundColor: "#5a7be3",
      color:"white"
    }}}>Change to {isSignUp? "Login" : "Sign Up"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth;
