import axios from 'axios';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import React,{useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiUrl from '../appConfig';

const CodeDetails = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [codeData, setCodeData] = useState({});
  const [inputs,setInputs] = useState();
  const [updateItem, setUpdateItem] = useState(null);

  const handleChange = (e) =>{
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
  }))
  }
  const handleSumbit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    updateRequest().then((data) =>setUpdateItem(data)).catch(error => console.log(error))
  }
  const fetchCodeData = async () =>{
    try {
      const response = await axios.get(`${apiUrl}/codes/${id}`);
      console.log(response.data.code);
      const data = response.data.code;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchCodeData().
    then((data) => {
      setCodeData(data);
      setInputs({
        title: codeData.title,
        snippet: codeData.snippet,
      })
    });
  },[id,codeData.title,codeData.snippet]);

  useEffect(() =>{
    if(updateItem){
      return navigate('/myCodes')
    }
  },[updateItem,navigate]);

  const updateRequest = async () =>{
    const res = await axios.put(`${apiUrl}/codes/update/${id}`,{
      title: inputs.title,
      snippet: inputs.snippet,
    }).catch(error => console.log(error));
    const data = await res.data;
    return data;

  }

  return (
    <div>
      {inputs && 
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
          <Typography variant='h4' textAlign={'center'} sx={{marginBottom: 1, color:"#22aa0f"}}>Edit Code Snippet </Typography>
          <InputLabel sx ={{marginBottom: 1, marginTop: 2, fontSize: '20px', fontWeight:'bold', color: '#0a32b1'}}>Title</InputLabel>
          <TextField name="title" value={inputs.title} onChange={handleChange} variant ="outlined" margin='normal'/>
          <InputLabel sx ={{marginBottom: 1, marginTop: 2, fontSize: '20px', fontWeight:'bold', color: '#0a32b1'}}>Snippet</InputLabel>
          <TextField name="snippet" value={inputs.snippet} onChange={handleChange} variant ="outlined" margin='normal'/>
          <Button variant="outlined" type='submit' sx ={{marginBottom: 3, marginTop: 5,fontWeight:'bolder', fontSize:'large',color:'#0a32b1',height:'50px',borderColor:'#22aa0f'}}>Submit</Button>
        </Box>
      </form>
      }
    </div>
  )
}

export default CodeDetails;
