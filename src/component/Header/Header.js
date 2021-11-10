import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { NavLink } from 'react-router-dom';

const Header = () => {
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
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/home"style={{color:'white',textDecoration:'none'}}>Home</NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/explore" style={{color:'white',textDecoration:'none'}}>Explore</NavLink>
            </Typography>
            
            

            <NavLink to="/log" style={{color:'white',textDecoration:'none'}}><Button color="inherit">Login</Button> 
            </NavLink>
          </Toolbar>
          
        </AppBar>

        
            
      </Box>


        </div>
    );
};

export default Header;