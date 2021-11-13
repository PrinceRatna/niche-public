import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const {user,logOut,admin,isLoading}=useAuth();
  
  
    return (
        <div>  
<Box sx={{ flexGrow: 1  }}>
        <AppBar position="static">
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"

              sx={{ mr: 2}}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/home"style={{color:'white',textDecoration:'none'}}>Home</NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/explore" style={{color:'white',textDecoration:'none'}}>Explore</NavLink>
            </Typography>

           {admin&&<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/allOrders" style={{color:'white',textDecoration:'none'}}>All Orders</NavLink>
            </Typography>
          }
           {admin&&<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/manageProducts" style={{color:'white',textDecoration:'none'}}>Manage Products</NavLink>
            </Typography>
          }

            {
           admin&&<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/admin" style={{color:'white',textDecoration:'none'}}>Add Admin</NavLink>
            </Typography>
             }
            {
           admin&&<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/addProducts" style={{color:'white',textDecoration:'none'}}>Add Product</NavLink>
            </Typography>
             }

            {
              !admin&&<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/dashboard" style={{color:'white',textDecoration:'none'}}>Dashboard</NavLink>   </Typography>

            }

            {
              user?.email?<Button onClick={logOut} color="inherit">logOut</Button>:<NavLink to="/log" style={{color:'white',textDecoration:'none'}}><Button color="inherit">Login</Button></NavLink>
            }
            
            
          </Toolbar>
          
        </AppBar>

        
            
      </Box>


        </div>
    );
};

export default Header;