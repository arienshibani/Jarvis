import ButtonAppBar from './components/AppBar';
import { Typography, Button, CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import SimpleAccordion from './components/Accordion';
import { display } from '@mui/system';
import BasicSelect from './components/Select';
import React, { useState, useEffect } from 'react';




export default function Home() {
  const [state, setState] = useState("init");

  const handleLoading = () => {
    setState("loading")
      
    setTimeout(() => {
      setState("results");

      console.log("Value changed to", state);
    }, 5000);
  

    console.log("det funke")
  };
  

  useEffect(() => {
    console.log("Value changed to", state);
  }, [state]);


  if(state === "init"){
    return (
      <>
      
        <ButtonAppBar className='appbar'/>
  
        <main style={{display: "flex", alignItems: "center", flexDirection: "column" }}>
        <div style={{paddingTop: "5rem"}}>

        <Typography paragraph="true" component="h3" style={{margin: "10em", textAlign: "center"}}>
          Jarvis is using <b>state of the art AI tech</b>, to analyze your business processes in order to generate improvements suggestions! <br/> 
          Using real time data from your monitoring logs, and AI trained on best practice benchmarks and blockchain.
        </Typography>
  
        <img style={{maxWidth: "75%", alignItems: "center", display: "flex", margin: "auto"}} src="https://i.imgur.com/fG8C1V6.png" />
        
        </div>
         <Button onClick={() => handleLoading()} style={{margin: "5rem"}} variant="contained">Analyze Process</Button>
        <div>

  
        </div>
      
        </main>
      </>)
  } else if (state === "loading") {
    return(
  
      <main style={{display: "flex", alignItems: "center", flexDirection: "column" }}>
      
        <Typography variant="h4" style={{margin: "10rem"}} component="h3">
        Doing super advanced AI analysis...
        </Typography>

        <CircularProgress />
  
      
      </main>
    )
  }
  else if (state === "results") {
    return(
      <>
        <Typography variant="h4" style={{margin: "10rem"}} component="h3">
           Jarvis has found <b>2</b> areas of your process that needs attention. 
        </Typography>
        <img style={{maxWidth: "50%", alignItems: "center", display: "flex", margin: "auto"}} src="https://i.imgur.com/fG8C1V6.png" />

      <div style={{maxWidth: "50%", alignItems: "center", display: "flex", margin: "auto", marginTop: "3rem"}}>

        <SimpleAccordion/>
      </div>
      </>
      
    )
  }
  else {
    return(
     <p>BEANS</p>
    )
  }
}
