import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button, Divider, IconButton, InputLabel, MenuItem, Modal, Select, Stack, TextField, TextareaAutosize, Tooltip, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { saveSkills } from '../../features/resumeSlice';
import ShowSkills from './ShowSkills';
const Skills = () => {

  const dispatch=useDispatch()
  const [openSkills,setOpenSkills]=useState(false)
  const handleOpenSkills=()=>setOpenSkills(true)
  const handleSkillsClose=()=>setOpenSkills(false)

  const [skill,setSkill]=useState({})

  const handleAdd=()=>{
    dispatch(saveSkills(skill))
    setSkill({})
    handleSkillsClose()
  }
  const handleEdit=(sk)=>{
    
    setSkill(sk)
    handleOpenSkills()
  }

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSkill(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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
                    Skills
                </Typography>
                <Button sx={{fontWeight:'bold'}} onClick={handleOpenSkills} ><FontAwesomeIcon icon={faPlus} style={{paddingRight:'10px'}}/>Add</Button>

            </Stack>
            
            <Divider light />
            <ShowSkills handleEdit={handleEdit}/>
            <Box>
               
                <Modal
                open={openSkills}
                onClose={handleSkillsClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
                >
                <Box sx={[style,{minWidth:'600px'}]} >
                    <Typography style={{textAlign:'center',fontWeight:'bold'}} id="modal-modal-title" variant="h6" component="h2">
                        Skills
                    </Typography>
                    <Divider/>
                    
                    <Stack direction='row' sx={{paddingTop:'10px'}} spacing={3}>
                        <TextField style={{paddingBottom:'15px', width:'60%'}} name='subtitle' value={skill.subtitle} onChange={handleInputChange} label="subtitle" type='text' color="info" variant="standard" placeholder='Programming Languages'  focused/>
                        <TextField style={{paddingBottom:'15px',width:'100%'}} name='skills' value={skill.skills} onChange={handleInputChange} label="skills" type='text' color="info" variant="standard" placeholder='C, C++, Java, Python'  focused/>

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

export default Skills