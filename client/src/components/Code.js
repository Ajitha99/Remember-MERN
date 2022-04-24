import { Avatar, Card, CardContent, CardHeader, Typography, IconButton, Box } from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import apiUrl from '../appConfig';
import axios from 'axios';

const Code = ({id , title,snippet, userName , isUser}) => {
  console.log(title,isUser);
  console.log(id);
  const navigate = useNavigate();
  const deleteCode = async () =>{
    try {
      const response = await axios.delete(`${apiUrl}/codes/${id}`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  const handleDelete = () =>{
    deleteCode().then((data) => console.log(data)).then(() =>navigate("/codes"));
  }
  return (
    <div>
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
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {snippet}
            </Typography>
        </CardContent>
        {
        isUser && (
          <Box sx={{float:'right'}} display = 'flex'>
            <IconButton onClick={()=>navigate(`/myCodes/${id}`)}><ModeEditOutlineIcon sx={{color: '#22c1c3',"&:hover": { color:'#51ba42'}}}/></IconButton>
            <IconButton onClick={handleDelete}><DeleteOutlineIcon sx={{color:'red'}} /></IconButton>
          </Box>
        )
        }
      </Card>
      
    </div>
  )
}

export default Code

