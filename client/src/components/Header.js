import { AppBar,  Button, Toolbar, Typography, Box, Tabs,Tab } from '@mui/material';
// import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import image from '../images/remember-image.png'
import { authActions } from '../store';





const Header = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [value, setValue] = useState(0);
 
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  
  // const handleChange =(e,val) =>{
  //   setValue(val);
  // }


  return (
    <AppBar position='sticky' sx={{background:"linear-gradient(90deg, rgba(81,186,66,1) 25%, rgba(0,242,255,1) 80%);"}}>
      <Toolbar>
          <Typography variant='h4'sx={{color:'white'}}><img style={{width: "250px" ,height: "100px" }}src= {image} alt='just text' onClick = {()=>navigate("/")}/>
          </Typography>
         
  

          {/* box - acts as div inside the material UI*/}
            
            {/* {!isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight ={'auto'}>
            <Tabs  textColor ="inherit" value ={value} onChange ={handleChange}>
              <Tab LinkComponent={Link} to="/blogs" label = "All Blogs"/>
              <Tab LinkComponent={Link} to="/codes" label = "All Code Snippets"/>
            </Tabs>
            </Box> } */}

          { isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight ={'auto'}>
            {/* <Tabs  textColor ="inherit" value ={value} onChange ={handleChange}> */}
            <Tabs  textColor ="inherit" >
              <Tab LinkComponent={Link} to="/blogs" label = "All Blogs" variant="contained" sx={{color: 'blue',fontWeight:'bolder',fontSize :20, margin: 1,"&:hover": {
        textDecoration:"underline",
        fontSize: 21,
        color: 'blue',
      fontWeight:"bolder"
      }}}/>
              <Tab LinkComponent={Link} to="/codes" label = "All Code Snippets" sx={{color: 'blue',fontWeight:'bolder',fontSize :20, margin: 1,"&:hover": {
        textDecoration:"underline",
        fontSize: 21,
      fontWeight:"bolder"
      }}}/>
              <Tab LinkComponent={Link} to="/myBlogs" label = "My Blogs" sx={{color: 'blue',fontWeight:'bolder', fontSize :20, margin: 1,"&:hover": {
        textDecoration:"underline",
        fontSize: 21,
      fontWeight:"bolder"
      }}}/>
              <Tab LinkComponent={Link} to="/myCodes" label = "My Code Snippets" sx={{color: 'blue',fontWeight:'bolder', fontSize :20, margin: 1,"&:hover": {
        textDecoration:"underline",
        fontSize: 21,
      fontWeight:"bolder"
      }}} />
            </Tabs>
          </Box>}
          {/* <Box display="flex" marginLeft="auto" >
            {!isLoggedIn && <div><Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,color:'white',backgroundColor: '#51ba42',fontWeight:'bolder',borderRadius: 2}}>Login</Button>
              <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,color:'white',backgroundColor: '#51ba42',fontWeight:'bolder',borderRadius: 2}}>Signup</Button></div>}
            { isLoggedIn && <Button onClick={() => dispatch(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,color:'white',backgroundColor: '#51ba42',fontWeight:'bolder',borderRadius: 2}}>Logout</Button>}
          </Box> */}
          <Box display="flex" marginLeft="auto" >
            {!isLoggedIn && <div><Button LinkComponent={Link} to="/login" variant='contained' sx={{margin:1,color:'white',backgroundColor: '#51ba42',fontWeight:'bolder',borderRadius: 2}}>Login</Button>
              <Button LinkComponent={Link} to="/signup" variant='contained' sx={{margin:1,color:'white',backgroundColor: '#51ba42',fontWeight:'bolder',borderRadius: 2}}>Signup</Button></div>}
            { isLoggedIn && <Button onClick={() => dispatch(authActions.logout())} LinkComponent={Link} to="/login" variant='contained' sx={{margin:1,color:'white',backgroundColor: '#51ba42',fontWeight:'bolder',borderRadius: 2}}>Logout</Button>}
          </Box>
          
      </Toolbar>
    </AppBar>
  )
}

export default Header
