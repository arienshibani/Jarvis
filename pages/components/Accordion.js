import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Suggestion #1 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The following servicetask is <b>27.8% slower</b> than the expected benchmark. Consider refactoring your shit and firing all of your employees.
          
          </Typography>
          <img style={{maxWidth: "35%"}} src="https://i.imgur.com/kWwl6Js.png" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Suggestion #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The following usertask is <b>1230.8% slower</b> than the expected benchmark. <br/> Try to split the task into several sub-tasks, or provide the caseworkers with a better user interface in order to increase efficiency.
          
          </Typography>
          <img style={{maxWidth: "35%"}} src="https://i.imgur.com/BksLBTH.png" />
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
