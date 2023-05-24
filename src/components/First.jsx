import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
const First = () => {
  return (
    <div>
      <h1>Anakha</h1>
      <input placeholder='name' />
      <br />
      <input type='password' placeholder='password' />
      <br />
      <button>submit</button>
      <br />


      <Typography variant='h1'>Anakha</Typography>
      <TextField variant='outlined' label='name' />
      <br />
      <Button variant='contained'>submit</Button>
    </div>
  )
}

export default First