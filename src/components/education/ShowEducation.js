import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare ,faTrash } from '@fortawesome/free-solid-svg-icons'
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteEducation } from '../../features/resumeSlice';

const ShowEducation = ({handleEdit}) => {
    const dispatch=useDispatch()

    const [userEducation,setUsereducation]=useState({})
    const eduactionList=useSelector(state=>state.education)
    console.log(eduactionList)

    


  return (
    <>
    {eduactionList && 
     eduactionList.map((education)=>
     <Box sx={{ margin:'1rem',paddingTop:'4px',paddingBottom:'4px', border:'2px solid black',borderRadius:'4px'}}>
        <Stack direction='row' sx={{marginLeft:'1rem',marginRight:'1rem'}} justifyContent='space-between'>
            <Typography noWrap >{education.university} </Typography>
            <Stack direction='row'>
            <Button  onClick={()=>handleEdit(education)} style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faPenToSquare} /></Button>
            <Button  onClick={()=>dispatch(deleteEducation(education.id))} style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faTrash}/></Button>
            </Stack>
        </Stack>

    </Box>
     )}
    
    
    </>
  )
}

export default ShowEducation