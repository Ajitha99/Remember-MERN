import React, { useState,useEffect } from 'react'
import axios from 'axios';
import apiUrl from '../appConfig';
import Blog from './Blog';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
const UserBlogs = () => {
  const [blogs,setBlogs] = useState([])
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const fetchData = async () =>{
    try {
      const response = await axios.get(`${apiUrl}/blogs/user/${id}`);
      console.log(response.data.blogs.blogs);
      setBlogs(response.data.blogs.blogs);
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
        ><Button variant = 'contained' sx = {{fontSize:20}} onClick ={()=>{navigate("/blogs/add")}}>Add BLOG +</Button></Box>
     {blogs && blogs.map((blog,index) =>(
          <Blog
          key={index}
          title = {blog.title}
          description={blog.description}
          imageUrl ={blog.image}
          userName={blog.user.name}
          />
        ))}
    </div>
  )
}

export default UserBlogs;
