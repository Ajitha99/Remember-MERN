import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography,Box } from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import apiUrl from '../appConfig';
import axios from 'axios';


function Blog({id ,title, description, imageUrl, userName , isUser}) {
  //console.log(title,isUser)
  console.log(id);
  const navigate = useNavigate();
  const deleteBlog = async () =>{
    try {
      const response = await axios.delete(`${apiUrl}/blogs/${id}`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
    
  }
  const handleDelete = () =>{
    deleteBlog().then((data) => console.log(data)).then(() =>navigate("/blogs"));
  }
  // #51ba42
  return (
    <div>
      {/* {" "} */}
      <Card sx={{ width: "50%", margin:'auto',marginTop: 2,marginBottom: 3, padding: 2, borderRadius: 3, boxShadow :"5px 5px 10px #69b4b9","&:hover": { 
        boxShadow: "10px 10px 20px #69b4b9"  
      }}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {userName && userName.at(0)}
          </Avatar>
        }
        
        title={title}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>{userName} : </b>{description}
        </Typography>
      </CardContent>
      {/* #0a32b1 */}
      {
        isUser && (
          <Box sx={{float:'right'}} display = 'flex'>
            <IconButton onClick={()=>navigate(`/myBlogs/${id}`)}><ModeEditOutlineIcon sx={{color: '#22c1c3',"&:hover": { color:'#51ba42'}}}/></IconButton>
            <IconButton onClick={handleDelete}><DeleteOutlineIcon sx={{color:'red'}} /></IconButton>
          </Box>
        )
      }
     
      </Card>
    </div>
  )
}

export default Blog
