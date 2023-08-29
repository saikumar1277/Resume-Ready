import React from 'react';
import { PDFViewer,PDFDownloadLink  } from '@react-pdf/renderer';
import MyPDF from './MyPDF';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload  } from '@fortawesome/free-solid-svg-icons'

const DownloadPDF = ({name,gmail,github,linkedin,phonenumber,education,experience,skills,projects}) => (
    <Stack direction='row'>
       
    <PDFViewer showToolbar={false} style={{width:'794px',height:'99vh'}} >  
        <MyPDF name={name}
        gmail={gmail}
        linkedin={linkedin}
        github={github}
        phonenumber={phonenumber}
        education={education}
        projects={projects}
        experience={experience}
        skills={skills}
        />      
    </PDFViewer>
  
    <Stack direction='column'>
        <Stack >
            <Box sx={{padding:'1rem',margin:'1rem', border:'1px soild black', boxShadow:'1px 2px 3px black',borderRadius:'3px'}}>
                <Typography variant='p'>
                    Download resume as PDF
                </Typography>
                <PDFDownloadLink style={{width:'90%'}} document={<MyPDF name={name}
        gmail={gmail}
        linkedin={linkedin}
        github={github}
        phonenumber={phonenumber}
        projects={projects}
        experience={experience}
        skills={skills}
        education={education}/>} fileName="resume.pdf">
            {({ blob, url, loading, error }) =>
                loading ? <Button style={{width:'100%'}}><FontAwesomeIcon icon={faDownload} /></Button> : <Button style={{width:'100%'}}><FontAwesomeIcon icon={faDownload} /></Button>
            }
            </PDFDownloadLink>
            </Box>
                
        </Stack>

    </Stack>
  </Stack>
);

export default DownloadPDF;
