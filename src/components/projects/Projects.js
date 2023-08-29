import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import { Button, Divider, IconButton, InputLabel, MenuItem, Modal, Select, Stack, TextField, TextareaAutosize, Tooltip, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'
import { saveProjects } from '../../features/resumeSlice';
import { useDispatch } from 'react-redux';
import ShowProjects from './ShowProjects';
const Projects = () => {

    const [openProjects,setOpenProjects]=useState(false)

    const handleOpenProjects=()=>{
        setPoints([])
        setProject({})
        setOpenProjects(true)}

    const handleProjectsClose=()=>setOpenProjects(false)

    const [project,setProject]=useState({})
    const [points,setPoints]=useState([])
    const [point,setPoint]=useState('')
    const dispatch=useDispatch()
    
    const addPoint=()=>{
        const newPoint={id:'1',point:point}
        setPoints(prev => [
          ...prev,
          newPoint
        ]);
        setProject(prev=>({
          ...prev,
          points:points
        }))
        setPoint('')
      }
    useEffect(() => {
        // Update `secondState` with the latest value from `firstState`
        setProject(prev=>({
        ...prev,
        points:points
        }))
    }, [points]);
    
    const handleAdd=()=>{
        dispatch(saveProjects(project))
        setProject({})
        setPoints([])
        handleProjectsClose()
      }
    const handlePointInputChange = (e) => {
        const { name, value } = e.target;
        setPoint(value)
    };
      const handleEdit=(pro)=>{
        
        setProject(pro)
        setPoints(pro.points)
        console.log(pro)
        setOpenProjects(true)
      }
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject(prevUser => ({
          ...prevUser,
          [name]: value
        }));
      };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        borderRadius:'5px',
        boxShadow: 24,
        p: 4,
      };
  return (
    <Box sx={{height:'100%'}} spacing={2}>
                    <Stack textAlign='center' spacing={2}>
                        <Box sx={{paddingTop:'30px'}}>
                            <Stack direction='row' sx={{marginLeft:'1rem',marginRight:'1rem'}} justifyContent='space-between'>
                                <Typography variant="h5" gutterBottom style={{fontWeight:'bold'}}>
                                    Projects
                                </Typography>
                                <Button onClick={handleOpenProjects} style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faPlus} style={{paddingRight:'10px'}}/>Add</Button>

                            </Stack>
                            <Divider light />
                            <ShowProjects handleEdit={handleEdit}/>
                            
                            <Box>
                               
                                <Modal
                                open={openProjects}
                                onClose={handleProjectsClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                
                                >
                                <Box sx={style} >
                                    <Typography style={{textAlign:'center',fontWeight:'bold'}} id="modal-modal-title" variant="h6" component="h2">
                                        Projects
                                    </Typography>
                                    <Divider/>
                                    <Box style={{paddingBottom:'15px'}}></Box>
                                    
                                    <Stack direction='row'>
                                        <TextField style={{paddingBottom:'15px',width:'80%',paddingRight:'2rem'}} name='title' value={project.title} onChange={handleInputChange} label="Title" color="info" variant="standard"  focused/>
                                        <TextField style={{paddingBottom:'15px',width:'80%'}} name='github' value={project.github} label="Github Link" onChange={handleInputChange} color="info" variant="standard"  focused/>
                                    </Stack>
                                    <Stack direction='row'>
                                        <TextField style={{paddingBottom:'15px',width:'80%',paddingRight:'2rem'}} label="Start Date" type='date' name='startdate' value={project.startdate} onChange={handleInputChange} color="info" variant="standard"  focused/>

                                        <TextField style={{paddingBottom:'15px',width:'80%'}} label="End Date / Expected" type='date' color="info" name='enddate' value={project.enddate} onChange={handleInputChange} variant="standard"  focused/>
                                    </Stack>
                                    <TextField style={{paddingBottom:'15px',width:'100%'}} name='techstack' value={project.techstack} label="Tech Stack" onChange={handleInputChange} color="info" variant="standard"  focused/>
                                    <Typography style={{textAlign:'center'}} id="modal-modal-title" variant="h7" component="h3">
                                        Points
                                    </Typography>
                                    {points &&  points.map((point)=><Typography variant='p' component="p">*{point.point}</Typography>)}
                                    <Stack direction='row' sx={{justifyContent:'center',textAlign:'center'}}>
                                        <TextField style={{paddingBottom:'15px',width:'100%'}} name='point' value={point} onChange={handlePointInputChange} label="Point" color="info" variant="standard"  focused/>
                                        <Button onClick={addPoint} style={{float:'right'}} >Add</Button>
                                    </Stack>
                                   
                                    <Button onClick={handleAdd} style={{float:'right'}} variant="contained">Add</Button>
                                </Box>
                                </Modal>
                            </Box>
                            
                        </Box>
                    </Stack>

                </Box>
  )
}

export default Projects