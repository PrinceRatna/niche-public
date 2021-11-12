import React, { useEffect, useState } from 'react';
import banner from '../../images/car-5.jpg';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Container, Grid } from '@mui/material';
import { height, styled, width } from '@mui/system';
import { Height } from '@mui/icons-material';
import Products from '../Products/Products';
import useAuth from '../hooks/useAuth';


// a header (simple navbar), banner, products, reviews, and (footer).
// the products will have a maximum of 6 items/product
// Each product should have a relevant name, image, short description, add a purchase or buy now button. If a user clicks on the purchase or buy now button it will take the user to the purchase page. 
// (Add one extra section)
// We will have another page on the top navigation bar (header) mentioning `explore` 
// Clicking on the link will take the user to the explore page. On this page, users will see all the products you have. This means, the user will see at least 10 products on this page. Each item will have a name, description, image, price and button. Once a user clicks on this button, it will take the user to the `purchase` page.
// The `purchase`page will be a private/protected route

// The purchase page should display detailed information of the item the user has clicked somewhere at the top. It will also display the user's name and email address from the login system and the user will have a field to provide address, phone number and necessary information to place the order or to complete the purchase.

// . If a user is logged in, he/she will see another option on the header is called `Dashboard` and inside that dashboard a normal user (not an admin) will see options like `pay`,`My Orders`, `Review`, `Logout`. Based on your website idea, you can change the name of these menu items. The `pay` page will say: Payment system coming soon. 

// On the my orders page, the logged in user will see only his/her orders. If the user wants, he/she should be able to cancel/delete any order. Ask a confirmation message before deleting or canceling an item. Using browser confirmation dialog is ok.

// -------------------*******--------------------//


const Home = () => {
  const [carDetails,setCarDetails]=useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/explores')
      .then(res=>res.json())
      .then(data=>setCarDetails(data));
  },[]);

    return (
        <div>
          {/*--------------- Nav bar -----------------*/}
       
          
      

      {/*------------ banner --------------*/}
              <img  style={{width:'100%'}} src={banner} alt=''/>

              {/*--------------- products -------------*/}
                

            <Container>
         <Typography  sx={{ textAlign: 'center',m: 2,p:2, fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
         SOME SPECIAL PRODUCTS
        </Typography>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {carDetails.map((product, index)=> {
                if(index<6){
                  return <Grid item xs={2} sm={4} md={4} key={index}>
                  <Products 
                  product={product}
                  key={product.title}
                  ></Products></Grid>
                }
             
              
           })}
              </Grid>
              </Container>

      
      </div>
    );
};

export default Home;