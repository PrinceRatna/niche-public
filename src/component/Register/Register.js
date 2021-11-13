import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Button, CircularProgress, Container, Typography } from '@mui/material';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Register = () => {
  const{user,registerUser,isLoading,error}=useAuth();

  const [loginData,setLoginData]=useState({});
  const history=useHistory();

  const handleOnBlur=e=>{
    const field=e.target.name;
    const value=e.target.value;
   //  console.log(field,value)
   const newLoginData={...loginData};
   newLoginData[field]=value;
   setLoginData(newLoginData);


  }

   const handleLogInSubmit=e=>{
     if(loginData.password!==loginData.password2){
       alert('Password did not match')
       return
     }

    
     fetch('https://obscure-peak-03535.herokuapp.com/users',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(loginData)

  })
  .then(res=>res.json())
  .then(data=>{
      if(data.insertedId){
          // alert('Successfully Added User .')
          e.target.reset(); 
      }
  })







     registerUser(loginData.email,loginData.password,loginData.name, history);
     e.preventDefault();
   }




    return (
        <Container sx={{ textAlign: 'center'}}>
           <Typography  sx={{ textAlign: 'center',m: 2,p:2, fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
         SIGN UP
        </Typography>




      {!isLoading&&<form onSubmit={handleLogInSubmit}>
    <TextField
     sx={{width: '75%',m:1}}
      id="standard-basic"
      label="Enter Your Name"
      name="name"
      // type="email"
      onBlur={handleOnBlur}
      variant="standard" />
    <TextField
     sx={{width: '75%',m:1}}
      id="standard-basic"
      label="Your E-mail"
      name="email"
      type="email"
      onBlur={handleOnBlur}
      variant="standard" />


        <TextField
        sx={{width: '75%',m:1}}
          id="filled-password-input"
          label="Your Password"
          name="password"
          onBlur={handleOnBlur}
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
        sx={{width: '75%',m:1}}
          id="filled-password-input"
          label="Re-type Your Password"
          name="password2"
          onBlur={handleOnBlur}
          type="password"
          autoComplete="current-password"
          variant="standard"
        />

        <Button
         sx={{width: '75%',m:1}}
         variant="contained"
         type="submit"
        >Sign Up</Button>


    </form>}
    {
      isLoading&&<CircularProgress />

    }
 {
   user.email&&<Alert severity="success">SuccessFully Added.</Alert>


 }
 {
   error&&<Alert severity="error">{error}</Alert>

 }


<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                   Already sign up ? Please  <NavLink
                    to="/log" style={{color:'red',textDecoration:'none'}}>Log In</NavLink>
             </Typography>

      </Container>
    );
};

export default Register;