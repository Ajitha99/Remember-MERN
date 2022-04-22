import React, { useState,useEffect } from 'react'
import axios from 'axios';
import apiUrl from '../appConfig';
import Code from './Code';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const UserCodes = () => {
  const [codes,setCodes] = useState([])
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const fetchData = async () =>{
    try {
      const response = await axios.get(`${apiUrl}/codes/user/${id}`);
      console.log(response.data.Codes.codeSnippets);
      setCodes(response.data.Codes.codeSnippets);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      <Box
        display="flex"  
        alignItems='center'
        justifyContent={'center'} 
        margin = {5} 
        ><Button variant = 'contained' sx = {{fontSize:20}} onClick ={()=>{navigate("/codes/add")}}>Add SNIPPET +</Button></Box>
     {codes && codes.map((code,index) =>(
           <Code 
           key={index}
           title = {code.title}
           snippet={code.snippet}
           userName={code.user.name}
           />
        ))}
    </div>
  )
}

export default UserCodes
