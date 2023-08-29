import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare ,faTrash } from '@fortawesome/free-solid-svg-icons'
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteExperience } from '../../features/resumeSlice';

const ShowExperience = ({handleEdit}) => {
    const dispatch=useDispatch()
    const [userExperience,setUserExperience]=useState({})
    const experienceList=useSelector(state=>state.experience)
    console.log(experienceList)


  return (
    <>
    {experienceList && 
     experienceList.map((experience)=>
     <Box sx={{ margin:'1rem',paddingTop:'4px',paddingBottom:'4px', border:'2px solid black',borderRadius:'4px'}}>
        <Stack direction='row' sx={{marginLeft:'1rem',marginRight:'1rem'}} justifyContent='space-between'>
            <Typography noWrap >{experience.company} </Typography>
            <Stack direction='row'>
            <Button  onClick={()=>handleEdit(experience)} style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faPenToSquare} /></Button>
            <Button  onClick={()=>dispatch(deleteExperience(experience.id))} style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faTrash}/></Button>
            </Stack>
        </Stack>

    </Box>
     )}
    
    
    </>
  )
}

export default ShowExperience