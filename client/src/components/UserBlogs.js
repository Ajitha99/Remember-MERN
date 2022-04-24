import React, { useState,useEffect } from 'react'
import axios from 'axios';
import apiUrl from '../appConfig';
import Blog from './Blog';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const UserBlogs = () => {
  const [user,setUser] = useState({});
  const [blogs, setBlogs] = useState([]);
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.isLoggedIn);


  const fetchData = async () =>{
    try {
      const response = await axios.get(`${apiUrl}/blogs/user/${id}`);
      //console.log(response);
      setUser(response.data.user);
      //console.log(response.data.user.blogs)
      setBlogs(response.data.user.blogs)
     
      // setUser(response.data.blogs.blogs);
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
        // ><Button variant = 'contained' sx = {{fontSize:20}} onClick ={()=>{navigate("/blogs/add")}}>Add BLOG +</Button></Box>
        ><Button variant = 'contained' sx = {{fontSize:20}} onClick ={handleRouting}>Add BLOG +</Button></Box>
     {user && blogs && blogs.map((blog,index) =>(
          <Blog
          key={index}
          isUser = {true}
          id = {blog._id}
          title = {blog.title}
          description={blog.description}
          imageUrl ={blog.image}
          userName={user.name}
          />
        ))}
    </div>
  )
}

export default UserBlogs;
