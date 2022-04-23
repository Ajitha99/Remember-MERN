import React, { useState,useEffect } from 'react'
import axios from 'axios';
import apiUrl from '../appConfig';
import Code from './Code';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const UserCodes = () => {
  const [user,setUser] = useState({});
  const [codes,setCodes] = useState([]);
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  const fetchData = async () =>{
    try {
      const response = await axios.get(`${apiUrl}/codes/user/${id}`);
      console.log(response.data.user);
      setUser(response.data.user);
      setCodes(response.data.user.codeSnippets);
      // setCodes(response.data.Codes.codeSnippets);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[id])

  const handleRouting = () =>{
    if(isLoggedIn){
      navigate("/blogs/add");
    }
    else navigate("/");
  }

  return (
    <div>
      <Box
        display="flex"  
        alignItems='center'
        justifyContent={'center'} 
        margin = {5} 
        // ><Button variant = 'contained' sx = {{fontSize:20}} onClick ={()=>{navigate("/codes/add")}}>Add SNIPPET +</Button></Box>
        ><Button variant = 'contained' sx = {{fontSize:20}} onClick ={handleRouting}>Add SNIPPET +</Button></Box>
        {/* {(codes.length) === 0 ? "No blogs to display" : ""} */}
            {user && codes && codes.map((code,index) =>(
                <Code 
                  key={index}
                  title = {code.title}
                  snippet={code.snippet}
                  userName={user.name}
                />
        ))}
    </div>
  )
}

export default UserCodes
