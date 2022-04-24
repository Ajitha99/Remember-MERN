import React, { useEffect, useState } from 'react';
import axios from "axios";
import Blog from './Blog';
import apiUrl from '../appConfig';
axios.defaults.withCredentials = true;

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);
  const id = localStorage.getItem("userId");

  // const [user, setUser] = useState();

  // const sendRequest = async () =>{
  //   const res = await axios.get(`${apiUrl}/users/userVerify`, {
  //     withCredentials: true
  //   }).catch(error => console.log(error));
  //   const data = await res.data;
  //   return data;
  // }

  const fetchData = async () =>{
    try {
      const response = await axios.get(`${apiUrl}/blogs/`,{withCredentials: true});
      console.log(response.data);
      setBlogs(response.data.blogs);

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
      {blogs && blogs.map((blog,index) =>(
          <Blog
          key={index}
          isUser = {id === blog.user._id}
          id = {blog._id}
          title = {blog.title}
          description={blog.description}
          imageUrl ={blog.image}
          userName={blog.user.name}
          />
        ))}
    </div>
  )
}

export default Blogs;
