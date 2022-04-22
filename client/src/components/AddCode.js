import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import apiUrl from '../appConfig';

const AddCode = () => {
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
    title : "",
    snippet : "",
});
const [createdItem, setCreatedItem] = useState(null);

const handleChange = (e) =>{
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name] : e.target.value,
}))
}
const sendRequest = async () =>{
  const res = await axios.post(`${apiUrl}/codes/add`, {
      title: inputs.title,
      snippet: inputs.snippet,
      user: id
  }).catch(err => console.log(err));
  const data = await res.data;
  return data;
}
const handleSumbit = (e) =>{
  e.preventDefault();
  // console.log(inputs);
  // console.log(id);
  sendRequest().then(data => setCreatedItem(data)).catch(console.error);
 
}

useEffect(() =>{
  if(createdItem){
    return navigate('/myCodes')
  }
},[createdItem,navigate])

  return (
    <div>
      <form onSubmit={handleSumbit}>
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
          margin={"auto"}
          marginTop={3}
        >
          <Typography variant='h4' textAlign={'center'} sx={{marginBottom: 1, color:"#22aa0f"}}>Add New Code Snippet </Typography>
          <InputLabel sx ={{marginBottom: 1, marginTop: 2, fontSize: '20px', fontWeight:'bold', color: '#0a32b1'}}>Title</InputLabel>
          <TextField name="title" value={inputs.title} onChange={handleChange} variant ="outlined" margin='normal'/>
          <InputLabel sx ={{marginBottom: 1, marginTop: 2, fontSize: '20px', fontWeight:'bold', color: '#0a32b1'}}>Snippet</InputLabel>
          <TextField name="snippet" value={inputs.snippet} onChange={handleChange} variant ="outlined" margin='normal'/>
          <Button variant="outlined" type='submit' sx ={{marginBottom: 3, marginTop: 5,fontWeight:'bolder', fontSize:'large',color:'#0a32b1',height:'50px',borderColor:'#22aa0f'}}>Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddCode
