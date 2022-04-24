import { Avatar, Card, CardContent, CardHeader, CardMedia, Icon, IconButton, Typography,Box, bottomNavigationClasses } from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Blog({id ,title, description, imageUrl, userName , isUser}) {
  //console.log(title,isUser)
  console.log(id);
  const navigate = useNavigate();
  
  return (
    <div>
      {" "}
      <Card sx={{ width: "50%", margin:'auto',marginTop: 2,padding: 2, borderRadius: 3, boxShadow :"5px 5px 10px #69b4b9","&:hover": { 
        boxShadow: "10px 10px 20px #51ba42"  
      }}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {userName && userName.at(0)}
          </Avatar>
        }
        
        title={title}
        subheader="September 14, 2016"
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
      {
        isUser && (
          <Box sx={{float:'right'}} display = 'flex'>
            <IconButton onClick={()=>navigate(`/myBlogs/${id}`)}><ModeEditOutlineIcon/></IconButton>
            <IconButton ><DeleteOutlineIcon/></IconButton>
          </Box>
        )
      }
     
      </Card>
    </div>
  )
}

export default Blog
