import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'red'} sx={{ flexGrow: 1}} align='left'>NewApp</Typography>
                <Button variant='text' >
                  <Link to={'/'} style={{textDecoration:'none',color:'white'}} >Home</Link>
                  </Button>
                    <Button variant='text' >
                      <Link to={'/first'}style={{textDecoration:'none',color:'white'}} > First</Link>
                  </Button>
                  <Button variant='text' >
                      <Link to={'/table'}style={{textDecoration:'none',color:'white'}} > Tableab</Link>
                  </Button>
                  <Button variant='text' >
                      <Link to={'/axios'}style={{textDecoration:'none',color:'white'}} > ApiGet</Link>
                  </Button>
            </Toolbar>
        </AppBar>
    </div>    
  )
}

export default Navbar