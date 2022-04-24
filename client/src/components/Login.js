import { Box, Button, TextField,Typography } from '@mui/material'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import axios from "axios";
import apiUrl from '../appConfig';
import { useNavigate } from 'react-router-dom';



function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [loginStatus, setLoginStatus] = useState("");
  
  const [inputs,setInputs] = useState({
      email : "",
      password :""
  });
const handleChange= (e) =>{

  setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
  }))
  // console.log(e.target.name, "value",e.target.value);
}

const sendRequest = async () =>{
  const res = await axios.post(`${apiUrl}/users/login`, {
      email: inputs.email,
      password: inputs.password
  }).catch(error => console.log(error));
  const data = await res.data;
 
  // window.alert(data.message);
  console.log(data);
  return data;
}


const handleSubmit = (e) =>{
  e.preventDefault();
  // console.log(inputs);
  sendRequest().then((data)=>localStorage.setItem("userId",data.user._id))
  .then(()=>dispatch(authActions.login())).then(()=>navigate("/"));
  // .then(()=>dispatch(authActions.login())).then(()=>navigate("/blogs"))
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
           maxWidth = {400}>
              <Typography variant='h2' padding={3} textAlign='center' color={'#51ba42'}>Login</Typography>
              <TextField onChange = {handleChange} name = 'email' value = {inputs.email} placeholder='E-mail' type={'email'} margin ="normal"></TextField>
              <TextField onChange = {handleChange} name = 'password' value = {inputs.password} placeholder='Password' type={'password'} margin ="normal"></TextField>
              <Button type='submit' variant='contained' sx={{borderRadius: 2, backgroundColor:'#51ba42', color: 'white',fontWeight:'bolder', margin: 1,  "&:hover": {
          backgroundColor: "#5a7be3",
          color:"white"
          }}}>Login</Button>
          {/* <h1>{loginStatus}</h1>  can also use <InputLabel> from mui*/}
          </Box>
      </form>
  </div>
)
}

export default Login
