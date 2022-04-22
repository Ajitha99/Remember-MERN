import React from 'react';
import { Box, InputLabel, TextField, Typography } from '@mui/material';
const AddBlog = () => {
  return (
    <div>
      <form>
        <Box
          display = 'flex'
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent ={'center'}
          width= {'60vw'}
          height={'60vh'}
          border = {3}
          borderColor="#22aa0f"
          borderRadius={2}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={3}
        >
          <Typography variant='h4' textAlign={'center'} sx={{marginTop:-10,marginBottom: 1, color:"#22aa0f"}}>Add New Blog </Typography>
          <InputLabel sx ={{marginBottom: 1, marginTop: 2, fontSize: '20px', fontWeight:'bold', color: '#0a32b1'}}>Title</InputLabel>
          <TextField></TextField>
          <InputLabel sx ={{marginBottom: 1, marginTop: 2, fontSize: '20px', fontWeight:'bold', color: '#0a32b1'}}>Description</InputLabel>
          <TextField></TextField>
          <InputLabel sx ={{marginBottom: 1, marginTop: 2, fontSize: '20px', fontWeight:'bold', color: '#0a32b1'}}>Image URL</InputLabel>
          <TextField></TextField>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog
