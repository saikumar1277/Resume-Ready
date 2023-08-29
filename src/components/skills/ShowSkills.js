import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare ,faTrash } from '@fortawesome/free-solid-svg-icons'
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteSkills } from '../../features/resumeSlice';

const ShowSkills = ({handleEdit}) => {
    const dispatch=useDispatch()
    const [userSkills,setUserSkills]=useState({})
    const skillsList=useSelector(state=>state.skills)
    console.log(skillsList)


  return (
    <>
    {skillsList && 
     skillsList.map((skills)=>
     <Box sx={{ margin:'1rem',paddingTop:'4px',paddingBottom:'4px', border:'2px solid black',borderRadius:'4px'}}>
        <Stack direction='row' sx={{marginLeft:'1rem',marginRight:'1rem'}} justifyContent='space-between'>
            <Typography noWrap >{skills.subtitle} </Typography>
            <Stack direction='row'>
            <Button  onClick={()=>handleEdit(skills)} style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faPenToSquare} /></Button>
            <Button  onClick={()=>dispatch(deleteSkills(skills.id))} style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faTrash}/></Button>
            </Stack>
        </Stack>

    </Box>
     )}
    
    
    </>
  )
}

export default ShowSkills