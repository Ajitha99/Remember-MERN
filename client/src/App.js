import React ,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Auth from "./components/Auth";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Blogs from "./components/Blogs";
import Codes from "./components/Codes";
import AddBlog from "./components/AddBlog";
import AddCode from "./components/AddCode";
import UserBlogs from "./components/UserBlogs";
import BlogDetails from "./components/BlogDetails";
import UserCodes from "./components/UserCodes";
import CodeDetails from "./components/CodeDetails";
import Protected from "./components/Protected";
import { useSelector } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Switch } from "@mui/material";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });



function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  console.log(isLoggedIn);
  const [darktheme,setdarkTheme] = useState(false);

  // const theme = createTheme({
  //   palette: {
  //     type: darktheme ? "dark":"light",
  //   },
  // });


  const darkTheme = createTheme({
    palette: {
      mode: darktheme ? 'dark' : 'light',
    },
  });




  return <React.Fragment>
    <ThemeProvider theme = {darkTheme} sx={{position:'relative', minheight: '100vh'}}>
    <CssBaseline />
      <header>
        <Header/>
      </header>
      <main>
      <Switch sx={{bottom:30,left:"50%",marginLeft: -95, position: 'fixed',background: 'rgba(81,186,66,1)', borderRadius:4}} checked={darktheme} onChange={()=>setdarkTheme(!darktheme)}/>
      
        <Routes>
        {/* <Route path ='/auth' element={<Auth/>}/> */}
            <Route path ='/' element={<Main/>}/>
            <Route path ='/login' element={<Login/>}/>
            <Route path ='/signup' element={<SignUp/>}/>
        {/* protected routes */}
            <Route path ='/blogs' element={<Protected isLoggedIn={isLoggedIn}><Blogs/></Protected>}/>
            <Route path ='/codes' element={<Protected isLoggedIn={isLoggedIn}><Codes/></Protected>} />
            <Route path ='/blogs/add' element={<Protected isLoggedIn={isLoggedIn}><AddBlog/></Protected>} />
            <Route path ='/codes/add' element={<Protected isLoggedIn={isLoggedIn}><AddCode/></Protected>} />
            <Route path ='/myBlogs' element={<Protected isLoggedIn={isLoggedIn}><UserBlogs/></Protected>} />
            <Route path ='/myBlogs/:id' element={<Protected isLoggedIn={isLoggedIn}><BlogDetails/></Protected>} />
            <Route path ='/myCodes' element={<Protected isLoggedIn={isLoggedIn}><UserCodes/></Protected>} />
            <Route path ='/myCodes/:id' element={<Protected isLoggedIn={isLoggedIn}><CodeDetails/></Protected>} />
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </main>
      <footer style={{position:'fixed', bottom:0,width:"100%", height: '3rem'}}><Footer/></footer>
    </ThemeProvider>
    
  </React.Fragment>
}

export default App;
