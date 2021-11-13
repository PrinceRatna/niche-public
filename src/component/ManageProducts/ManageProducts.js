import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import  { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

const ManageProducts = () => {

    const [carDetails,setCarDetails]=useState([]);
    useEffect(()=>{
        fetch('https://obscure-peak-03535.herokuapp.com/explores')
        .then(res=>res.json())
        .then(data=>setCarDetails(data));
    },[]);
    console.log(carDetails)

    const handleProductsDelete=id=>{
        const proceed=window.confirm('Are you sure, you want to delete?');
        if(proceed){
           const url=`https://obscure-peak-03535.herokuapp.com/explores/${id}`;
           fetch(url,{
               method:'DELETE'
           })
           .then(res=>res.json())
           .then(data=>{
               if(data.deletedCount>0){
                   alert('Deleted Successfull');
                   const remainingOrders=carDetails.filter(allOrder=>allOrder._id!==id)
                   setCarDetails(remainingOrders);
               }
           })
       
        }
    
    
        }
    

    return (
        <Container>
        <Typography  sx={{ textAlign: 'center',m: 2,p:2, fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
        ALL PRODUCTS
       </Typography>
       
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             {carDetails.map((product, index) => {
            return <Grid item xs={2} sm={4} md={4} key={index}>
              
              <Card sx={{height:1,p:1,m:1}} >
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={product.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
         Price: $ {product.price}
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={()=>handleProductsDelete(product._id)} size="small">Delete</Button>


      
      </CardActions>
    </Card>
             </Grid>
              })}
             </Grid>
             
             </Container>
            
        
    );
};

export default ManageProducts;