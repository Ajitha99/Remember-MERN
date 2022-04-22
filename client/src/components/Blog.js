import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Blog({title, description, imageUrl, userName}) {
  return (
    <div>
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
          {description}
        </Typography>
      </CardContent>
     
      </Card>
    </div>
  )
}

export default Blog
