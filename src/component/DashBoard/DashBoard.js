import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useAuth from '../hooks/useAuth';
import { Button, Card } from '@mui/material';
import { NavLink } from 'react-router-dom';
// `pay`,`My Orders`, `Review`, `Logout`
const DashBoard = () => {
    const {user,logOut}=useAuth();

    return (
        <div style={{marginLeft:'auto'}}>


<Paper   sx={{ mx:'auto', mt:'3'}} elevation={3} style={{width:'300px'}} >
    
    <ul>
        
        <li style={{padding:'5px'}}> <NavLink to="/myOrders"style={{textDecoration:'none',color:'black'}}>My Orders</NavLink></li><hr/>
        <li style={{padding:'5px'}}> <NavLink to="/pay"style={{textDecoration:'none',color:'black'}}>Payment</NavLink></li>
        <hr/>

        <li style={{padding:'5px'}}>Review</li><hr/>
    
        <li style={{padding:'5px'}}><Button onClick={logOut} color="inherit">logOut</Button> </li>
    </ul>
 </Paper>




            {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
          <Paper elevation={3} >My Orders </Paper>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <Paper elevation={3} > <NavLink to="/pay"style={{textDecoration:'none'}}>Payment</NavLink>
</Paper>

          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <Paper elevation={3} >Review </Paper>

          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <Paper elevation={3}><Button onClick={logOut} color="inherit">logOut</Button> 
</Paper>

          </Grid>
      </Grid> */}
    {/* </Box> */}
        </div>
    );
};

export default DashBoard;