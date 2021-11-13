import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AddAdmin = () => {

    const [adminData,setAdminData]=useState({});
    // const {admins}=useAuth();
    // const {user,logOut,admin}=useAuth();



    

    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
       //  console.log(field,value)
       const newAdminData={...adminData};
       newAdminData[field]=value;
       setAdminData(newAdminData);
   
   
      }




      const handleAdminSubmit=e=>{
        //   const user=adminData.email


        fetch('https://obscure-peak-03535.herokuapp.com/users',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(adminData)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                alert('Successfully Added New Admin .')
                e.target.reset(); 


            }
        })

        
         e.preventDefault();
       }














   
      /* const handleAdminSubmit=e=>{

        fetch('http:///addAdmin',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(adminData)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Successfully Added New Admin .')
                e.target.reset(); 
            }
        })

        
         e.preventDefault();
       }

*/
    return (
        <div>
          

        <div style={{textAlign:'center',marginTop:'20px'}}>
        <Container>
         <form onSubmit={handleAdminSubmit}>
          <TextField
           sx={{width: '30%',m:1}}
            id="standard-basic"
            label="Set Admin E-mail"
            name="email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard" />
      
      <br/>
              <TextField
              sx={{width: '30%',m:1}}
                id="filled-password-input"
                label="Set Admin Password"
                name="password"
                onBlur={handleOnBlur}
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <br/>
      
              <Button
               sx={{width: '20px',m:1}}
               variant="contained"
               type="submit"
              >Add </Button>
      
      
          </form>
          </Container>
              </div>
      
 

               
              
            
     
    
      
        </div>
    );
};

export default AddAdmin;