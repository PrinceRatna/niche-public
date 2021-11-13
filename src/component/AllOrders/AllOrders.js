import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const AllOrders = () => {
 const [allOrders,setAllOrders]=useState([]);

 useEffect(()=>{

    fetch('https://obscure-peak-03535.herokuapp.com/addOrders')
    .then(res=>res.json())
    .then(data=>setAllOrders(data))
 },[])
// console.log(allOrders);
    return (
        <Container>
        <Typography  sx={{ textAlign: 'center',m: 2,p:2, fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
        ALL ORDERS 
       </Typography>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             {allOrders.map((order, index)=> {
               
             
                  <Grid item xs={2} sm={4} md={4} key={index}>
                      
                        <h1> {order?.title}</h1>
                      

                      
      <Paper   sx={{ mx:'auto', mt:'3'}} elevation={3} style={{width:'300px'}} >
    
    <ul>
        
        <li style={{padding:'5px'}}>Name: {order.title} </li><hr/>
        <li style={{padding:'5px'}}>Description: {order.description}</li>
        <hr/>

        <li style={{padding:'5px'}}>Price:${order.price}</li><hr/>
    
        {/* <li style={{padding:'5px'}}><Button onClick={logOut} color="inherit">logOut</Button> </li> */}
    </ul>
 </Paper>
                  
                 
                 </Grid>
               
            
             
          })}
             </Grid>
             </Container>
    );
};

export default AllOrders;