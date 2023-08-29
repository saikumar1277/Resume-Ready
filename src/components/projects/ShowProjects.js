import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare ,faTrash } from '@fortawesome/free-solid-svg-icons'
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteProjects } from '../../features/resumeSlice';

const ShowProjects = ({handleEdit}) => {
    const dispatch=useDispatch()
    const [userProjects,setUserProjects]=useState({})
    const projectsList=useSelector(state=>state.projects)
    console.log(projectsList)


  return (
    <>
    {projectsList && 
     projectsList.map((projects)=>
     <Box sx={{ margin:'1rem',paddingTop:'4px',paddingBottom:'4px', border:'2px solid black',borderRadius:'4px'}}>
        <Stack direction='row' sx={{marginLeft:'1rem',marginRight:'1rem'}} justifyContent='space-between'>
            <Typography noWrap >{projects.title} </Typography>
            <Stack direction='row'>
            <Button  onClick={()=>handleEdit(projects)} style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faPenToSquare} /></Button>
            <Button  onClick={()=>dispatch(deleteProjects(projects.id))} style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faTrash}/></Button>
            </Stack>
        </Stack>

    </Box>
     )}
    
    
    </>
  )
}

export default ShowProjects