import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';


const Explore = () => {
    const [carDetails,setCarDetails]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/explores')
        .then(res=>res.json())
        .then(data=>setCarDetails(data));
    },[]);
    return (
        <Container>
        <Typography  sx={{ textAlign: 'center',m: 2,p:2, fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
        ALL PRODUCTS
       </Typography>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             {carDetails.map((product, index) => (
             <Grid item xs={2} sm={4} md={4} key={index}>
               <AllProducts
               product={product}
               key={product.title}
               ></AllProducts>
             </Grid>
              ))}
             </Grid>
             </Container>
    );
};

export default Explore;
