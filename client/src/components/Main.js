import React from 'react';
import bgImage from "../images/video-blue.mp4";
import './main.css';


const Main = () => {
  return (
    <div style={{paddingBottom:'2.5rem'}}>
       <div className="video-div" >
        <video className="video-home" autoPlay loop muted style={{position:'fixed',zIndex:-1,width:"100%"}}>
          <source src={bgImage} type="video/mp4" />
        </video>
        <div style={{textAlign:'center'}}>
        {/* <h1 style={{color: 'white', position:"absolute",marginLeft:'auto',float:'right'}}>Welcome to Remeber To Code</h1> */}
        <h1 style={{color: 'white',marginLeft:'auto',fontSize: '80px',fontWeight:600,display:'inline-block',marginTop:'250px'}}>Welcome to REMEMBER to code</h1>
        </div>
        
      </div>
      
    </div>
  )
}

export default Main
