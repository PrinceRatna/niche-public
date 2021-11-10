import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
  const [loginData,setLoginData]=useState({});

   const handleOnChange=e=>{
     const field=e.target.name;
     const value=e.target.value;
    //  console.log(field,value)
    const newLoginData={...loginData};
    newLoginData[field]=value;
    setLoginData(newLoginData);


   }

    const handleLogInSubmit=e=>{
      e.preventDefault();
    }


    return (
        <Container>
         <Typography  sx={{ textAlign: 'center',m: 2,p:2, fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
         SIGN IN
        </Typography>





    <form onSubmit={handleLogInSubmit}>
    <TextField
     sx={{width: '75%',m:1}}
      id="standard-basic"
      label="Your E-mail"
      name="email"
      type="email"
      onBlur={handleOnChange}
      variant="standard" />


        <TextField
        sx={{width: '75%',m:1}}
          id="filled-password-input"
          label="Your Password"
          name="password"
          onBlur={handleOnChange}
          type="password"
          autoComplete="current-password"
          variant="standard"
        />

        <Button
         sx={{width: '75%',m:1}}
         variant="contained"
         type="submit"
        >Login</Button>


    </form>







{/*           
          <Grid container spacing={2}>
          <Grid item xs={12} md={6}>

            </Grid>
          <Grid item xs={12} md={6}>
            </Grid>
            </Grid> */}
            
      

       


         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New User ? Please  <NavLink to="/register" style={{color:'red',textDecoration:'none'}}>Sign Up</NavLink>
         </Typography>
        </Container>
        
       
  
    );
};

export default LogIn;