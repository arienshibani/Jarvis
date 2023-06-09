import ButtonAppBar from './components/AppBar';
import { Typography, Button, CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import SimpleAccordion from './components/Accordion';
import { display } from '@mui/system';
import BasicSelect from './components/Select';
import React, { useState, useEffect } from 'react';




export default function Home() {
  const [state, setState] = useState("results");

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
  
        <Typography variant="h3" component="h3">
          Loan Process
        </Typography>
  
  
        <img style={{maxWidth: "100%"}} src="https://i.imgur.com/fG8C1V6.png" />
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
    <SimpleAccordion/>
      </>
      
    )
  }
  else {
    return(
     <p>BEANS</p>
    )
  }
}
