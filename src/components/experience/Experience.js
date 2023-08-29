import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import { Button, Divider, IconButton, InputLabel, MenuItem, Modal, Select, Stack, TextField, TextareaAutosize, Tooltip, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { saveExperience } from '../../features/resumeSlice';
import ShowExperience from './ShowExperience';
const Experience = () => {

  const [openExperience,setOpenExperience]=useState(false)
  
  const handleOpenExperience = () => {
    setExperience({})
    setPoints([])
    setOpenExperience(true)};
  const handleExperienceClose = () => setOpenExperience(false);

  const [experience,setExperience]=useState({})

  const [points,setPoints]=useState([])
  const [point,setPoint]=useState('')

  const addPoint=()=>{
    const newPoint={id:'1',point:point}
    setPoints(prev => [
      ...prev,
      newPoint
    ]);
    setExperience(prev=>({
      ...prev,
      points:points
    }))
    setPoint('')
  }

  const dispatch=useDispatch()

  useEffect(() => {
    // Update `secondState` with the latest value from `firstState`
    setExperience(prev=>({
      ...prev,
      points:points
    }))
  }, [points]);
  
  const handleAdd=()=>{

    console.log('sub points',points)
    console.log('sub exe',experience)
    // setExperience(prev=>({
    //   ...prev,
    //   points:points
    // }))
    
    dispatch(saveExperience(experience))
    setExperience({})
    setPoints([])
    handleExperienceClose()
  }
  const handlePointInputChange = (e) => {
      const { name, value } = e.target;
      setPoint(value)
      
  };
  const handleEdit=(exp)=>{
    
    setExperience(exp)
    setPoints(exp.points)
    console.log(exp)
    setOpenExperience(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExperience(prevUser => ({
      ...prevUser,
      [name]: value
    }));

    console.log('edit ',experience)
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
                  Experience
              </Typography>
              <Button style={{fontWeight:'bold'}} onClick={handleOpenExperience} ><FontAwesomeIcon icon={faPlus} style={{paddingRight:'10px'}}/>Add</Button>

          </Stack>
          <Divider light />
          <ShowExperience handleEdit={handleEdit}/>
            
            <Box>
               
                <Modal
                open={openExperience}
                onClose={handleExperienceClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
                >
                <Box sx={style} >
                    <Typography style={{textAlign:'center',fontWeight:'bold'}} id="modal-modal-title" variant="h6" component="h2">
                        Experience
                    </Typography>
                    <Divider/>
                    <Box style={{paddingBottom:'15px'}}></Box>
                    
                    <Stack direction='row'>
                      <TextField style={{paddingBottom:'15px',width:'80%',paddingRight:'2rem'}} name='role' value={experience.role} onChange={handleInputChange} label="Role" color="info" variant="standard"  focused/>
                    
                      <TextField style={{paddingBottom:'15px',width:'80%'}} name='company' value={experience.company} onChange={handleInputChange} label="Company" color="info" variant="standard"  focused/>
                    </Stack>
                    <Stack direction='row'>
                      <TextField style={{paddingBottom:'15px',width:'80%',paddingRight:'2rem'}} name='location' value={experience.location} onChange={handleInputChange} label="Location" color="info" variant="standard"  focused/>
                      <TextField style={{paddingBottom:'15px',width:'80%',paddingRight:'2rem'}} name='startdate' value={experience.startdate} onChange={handleInputChange} label="Start Date" type='date' color="info" variant="standard"  focused/>

                      <TextField style={{paddingBottom:'15px',width:'80%'}} name='enddate' value={experience.enddate} onChange={handleInputChange} label="End Date / Expected" type='date' color="info" variant="standard"  focused/>

                    </Stack>
                    <Typography style={{textAlign:'center'}} id="modal-modal-title" variant="h7" component="h3">
                                        Points
                                    </Typography>
                                    {points &&  points.map((point)=><Typography variant='p' component="p">*{point.point}</Typography>)}

                                    <Stack direction='row' sx={{justifyContent:'center',textAlign:'center'}}>
                                        <TextField style={{paddingBottom:'15px',width:'100%'}} name='point' value={point} onChange={handlePointInputChange} label="Point" color="info" variant="standard"  focused/>
                                        <Button onClick={addPoint} style={{float:'right'}} >Add</Button>
                                    </Stack>

                    
                    <Button style={{float:'right'}} variant="contained" onClick={handleAdd}>Add</Button>
                </Box>
                </Modal>
            </Box>
            
        </Box>
    </Stack>

    </Box>
  )
}

export default Experience