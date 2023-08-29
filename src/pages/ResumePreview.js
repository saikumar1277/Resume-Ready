// import { Box, Stack, Typography } from '@mui/material'
// import React,{useRef, useEffect} from 'react'
// import Scrollbars from 'react-custom-scrollbars-2'
// import  jsPDF  from "jspdf";
// import html2canvas from 'html2canvas';
// import { Button } from 'react-scroll';
// const ResumePreview = () => {
//     const divRef = useRef(null)
//     useEffect(() => {
//         // Now, divRef.current refers to the actual DOM element
//         const divElement = divRef.current;
    
//         // You can manipulate the divElement as needed
//         if (divElement) {
//           // Do something with the divElement, e.g., change its style
//           divElement.style.backgroundColor = 'red';
//         }
//       }, []);

//     const downloadResume=()=> {
    
//         const inp = divRef.current;
      
//         html2canvas(inp)
//           .then((canvas) => {
//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF("p", "mm", "a4");
//             var width = pdf.internal.pageSize.getWidth();
//             var height = pdf.internal.pageSize.getHeight();
//             pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
//             // pdf.output('dataurlnewwindow');
//             pdf.save("resume.pdf");
//           }).catch(function(error){
//             console.log(error)
//           })
//       }
//   return (
//         <Stack direction='row'>
//         <div id="resume-preview" ref={divRef}>
//         <Box  sx={{width:'800px',height:'100vh',overflow: 'auto',backgroundColor:'#fff',boxShadow:'0px 0px 2px rgba(0,0,0,0.25)' }} spacing={2} >
//             <style>
//                 {`
//                 /* Decrease the size of the scrollbar */
//                 ::-webkit-scrollbar {
                    
//                     width: 4px; /* Adjust this value to your preference */
//                 }

//                 ::-webkit-scrollbar-thumb {
                    
//                     background-color: #bbceed; /* Color of the scrollbar thumb */
//                 }
//                 ::-webkit-scrollbar-thumb {
                    
//                     height: 4px; /* Color of the scrollbar thumb */
//                 }

//                 ::-webkit-scrollbar-track {
                    
//                     background-color: #fff; /* Color of the scrollbar track */
//                 }
//                 `}
//             </style>

//             <Box sx={{width:'794px',height:'1123px'}}>
//                 <Stack>
//                     <Stack alignItems='center' >
//                         <Typography style={{fontSize:'24px',fontWeight:'bold'}}>Name</Typography>
//                     </Stack>
//                 </Stack>
//                 <Stack alignItems='center'>
//                     <Stack direction='row' >
//                         <Typography style={{fontSize:'16px'}}>Gmail</Typography>
//                         <Typography style={{fontSize:'16px'}}>Phone number</Typography>
//                         <Typography style={{fontSize:'16px'}}>Gmail</Typography>
//                         <Typography style={{fontSize:'16px'}}>Gmail</Typography>
//                     </Stack>

//                 </Stack>
//             </Box>

//         </Box>
//         </div>
//         <Box>
//             <button onClick={downloadResume}>download</button>
//         </Box>
//             {/* <Box>
//                 <Button variant="contained"  onClick={downloadResume}>download</Button>
//             </Box> */}
//         </Stack>

//   )
// }

// export default ResumePreview