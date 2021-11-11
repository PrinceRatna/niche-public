import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const LogIn = () => {
 
  
  const{loginUser,isLoading,user,error}=useAuth();

  const [loginData,setLoginData]=useState({});
  const location =useLocation();
  const history=useHistory();

   const handleOnChange=e=>{
     const field=e.target.name;
     const value=e.target.value;
    //  console.log(field,value)
    const newLoginData={...loginData};
    newLoginData[field]=value;
    setLoginData(newLoginData);


   }

    const handleLogInSubmit=e=>{
      loginUser(loginData?.email,loginData?.password,location,history)
      e.preventDefault();
    }


    return (
        <Container sx={{ textAlign: 'center'}}>
         <Typography  sx={{ textAlign: 'center',m: 2,p:2, fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
         SIGN IN
        </Typography>





  {!isLoading&&<form onSubmit={handleLogInSubmit}>
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


    </form>}
    {
      isLoading&&<CircularProgress />
    }
   {
   user.email&&<Alert severity="success">SuccessFully Logged In.</Alert>


 }
 {
   error&&<Alert severity="error">{error}</Alert>

 }






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