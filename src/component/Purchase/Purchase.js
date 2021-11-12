
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import useAuth from '../hooks/useAuth';
import EmailIcon from '@mui/icons-material/Email';
import { autocompleteClasses, Container, TextField } from '@mui/material';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';






const Purchase = () => {
    const {user}=useAuth();
    const email=user.email;
    console.log(user)
    const {id}=useParams();
    console.log(id)
        const [purcaseCarDetail,setPurcaseCarDetail]=useState({});
        useEffect(()=>{
            const url=`http://localhost:5000/singleCarDetail/${id}`
            fetch(url)
            .then(res=>res.json())
            .then(data=>setPurcaseCarDetail(data))
        },[])


        const [loginData,setLoginData]=useState({});
        

        const handleOnBlur=e=>{
            const field=e.target.name;
            const value=e.target.value;
           //  console.log(field,value)
           const newLoginData={...loginData};
           newLoginData[field]=value;
           console.log({...newLoginData,email});
           setLoginData({...newLoginData,email,title:purcaseCarDetail.title  
           });
        
          
          }
          // console.log(loginData);

          const handleLogInSubmit=e=>{
            console.log(loginData);

            fetch('http://localhost:5000/addOrders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(loginData)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Successfully Added Your Orders .')
                e.target.reset(); 
            }
        })


            e.preventDefault();
          }


    return (
        <div
         style={{display:'flex'}}>



<div style={{width:'90%',padding:'20px'}} >
      {/* <CardContent> */}
        <Typography variant="h5">
          Title:  {
             purcaseCarDetail.title  
          }
        </Typography>
        <Typography variant="h6">
          Description:  {
             purcaseCarDetail.description 
          }
        </Typography>
      {/* </CardContent> */}
    
    </div>
    
        <hr/>
    <List
      sx={{
        mx:'auto',
        mt:'2',
        width: '100%',
        maxWidth: 360,
        // bgcolor: 'background.paper',
        // bgcolor: 'yellow',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <EmailIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="E-mail  " secondary={user.email}/>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <Avatar alt="Travis Howard" src={user?.photoURL} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name  " secondary={user.displayName} />
      </ListItem>
      <Divider variant="inset" component="li" />

<form onSubmit={handleLogInSubmit}>
      <TextField
     sx={{width: '100%',m:1}}
      id="standard-basic"
      label="Enter Your Phone Number"
      name="phoneNumber"
      // type="email"
      onBlur={handleOnBlur}
      variant="standard" />
      <TextField
     sx={{width: '100%',m:1}}
      id="standard-basic"
      label="Enter Your Address"
      name="address"
      // type="email"
      onBlur={handleOnBlur}
      variant="standard" />

<Button
         sx={{width: '75%',m:1}}
         variant="contained"
         type="submit"
        >Submit</Button>
        </form>
      
    </List>

   

                 

        </div>
    );
};

export default Purchase;
// purcaseCarDetail.title