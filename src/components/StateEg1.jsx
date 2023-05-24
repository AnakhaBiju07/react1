import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateEg1 = () => {
    var[hname,setHname] = useState("");
    const ChangeHname = ()=>{
        setHname("Home Page")
    }
    const changeGname =()=>{
        setHname("Gallery Page")
    }
    const changeCname =()=>{
        setHname("Contact Page")
    } 

  return (
    <div>
        <Button variant='contained' color='primary' onClick={ChangeHname}>Home</Button>
        <Button variant='contained' color='secondary' onClick={changeGname}>Gallery</Button>
        <Button variant='contained' color='success' onClick={changeCname}>Contact</Button>
        <br/>
        <Typography variant='h3'>Welcome to {hname}</Typography>
    </div>    
  )
}

export default StateEg1