import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{color: "white", textDecoration:'none'}} to={'/'}>Employee App</Link>
          </Typography>
          <Button color="inherit">
            <Link style={{color: "white"}} to={'/home'}>Home</Link>
        </Button>
        <Button color="inherit">
            <Link style={{color: "white"}} to={'/form'}>Employee form</Link>
        </Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    </div>
  )
}

export default Navbar
