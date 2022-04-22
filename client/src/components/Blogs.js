import React, { useEffect, useState } from 'react';
import axios from "axios";
import apiUrl from '../appConfig';

const Blogs = () => {

  // const [blogs, setBlogs] = useState([]);

  const fetchData = async () =>{
    try {
      const response = await axios.get(`${apiUrl}/blogs/`);
      console.log(response.data.blogs);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    fetchData();
  },[]);




  return (
    <div>
      
    </div>
  )
}

export default Blogs;
