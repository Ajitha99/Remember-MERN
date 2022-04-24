import React, { useEffect, useState } from 'react';
import axios from "axios";
import Code from './Code';
import apiUrl from '../appConfig';
axios.defaults.withCredentials = true;
const Codes = () => {
  const [codes, setCodes] = useState([]);
  const id = localStorage.getItem("userId");

  const fetchData = async () =>{
    try {
      const response = await axios.get(`${apiUrl}/codes/`,{withCredentials: true});
      console.log(response.data.codes);
      setCodes(response.data.codes);

    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(()=>{
  //   sendRequest().then((data)=>setUser(data.user));
  // },[])

  useEffect(() =>{
    fetchData();
  },[]);
  return (
    <div>
    {/* {user && <h2>{user.name}</h2>} */}
    {codes && codes.map((code,index) =>(
        <Code
        key={index}
        isUser = {id === code.user._id}
        title = {code.title}
        snippet={code.snippet}
        userName={code.user.name}
        />
      ))}
  </div>
)
  
}

export default Codes;
