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

        <li style={{padding:'5px'}}><NavLink to="/addReview"style={{textDecoration:'none',color:'black'}}>Review</NavLink></li><hr/>
    
        <li style={{padding:'5px'}}><Button onClick={logOut} color="inherit">logOut</Button> </li>
    </ul>
 </Paper>


        </div>
    );
};

export default DashBoard;