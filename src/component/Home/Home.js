import React, { useEffect, useState } from 'react';
import banner from '../../images/car-5.jpg';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Container, Grid, Paper } from '@mui/material';
import { height, styled, width } from '@mui/system';
import { Height } from '@mui/icons-material';
import Products from '../Products/Products';
import useAuth from '../hooks/useAuth';





// . If a user is logged in, he/she will see another option on the header is called `Dashboard` and inside that dashboard a normal user (not an admin) will see options like `pay`,`My Orders`, `Review`, `Logout`. Based on your website idea, you can change the name of these menu items. The `pay` page will say: Payment system coming soon. 

// On the my orders page, the logged in user will see only his/her orders. If the user wants, he/she should be able to cancel/delete any order. Ask a confirmation message before deleting or canceling an item. Using browser confirmation dialog is ok.


// On the Review page, users should be able to add a review and that review will appear on the home age. Right now you will see every review on the home page. There is no limit on the numbers of reviews or the order of the review.

// If an admin logs in, he/she will not see the options that a normal user sees. Insted an admin will see `Manage All Orders`, `Add A Product`, `Make Admin`, `Manage Products` `Logout`. Based on your website idea, you can change the name of these menu items. Details about Manage all orders or Manage products will be provided later.

// -------------------*******--------------------//


const Home = () => {
  const [carDetails,setCarDetails]=useState([]);
  const [reviews,setReviews]=useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/explores')
      .then(res=>res.json())
      .then(data=>setCarDetails(data));
  },[]);
  useEffect(()=>{
      fetch('http://localhost:5000/addReview')
      .then(res=>res.json())
      .then(data=>setReviews(data));
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



           




         {/* one extra section */}
         <Container sx={{mt:5}}>
           <h2 style={{textAlign:'center'}} > Why Choose Us</h2>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} sm={6} md={4}>
  <Paper elevation={3} sx={{height:1,p:2}}>
  <h5> The Best Price That You Expect</h5>
  <p>We will give you discount and gift.<br/> You can also buy a car using our loan method.<br/> we also give brand car at cheap rate. </p>
</Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
 < Paper  sx={{height:1,p:2}} elevation={3} >
<h5>Support Ready 24/7 To Serve You</h5>
<p>You  can buy our car any time at any where.<br/> If you want to repair your car ,you will come to our shop.<br/> Our shop open at morning 7 and close at night 5 </p>
</Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
 < Paper  sx={{height:1,p:2}} elevation={3} >
<h5>Top Brand In The World</h5>
<p>We have all top brands car like tesla,BMW, ferrari,lamborghiniLuxury,FordMass etc.<br/> We also sell latest car .. </p>
</Paper>
  </Grid>
</Grid>
</Container>

   {/* reviews */}

   <Container style={{margin:"50px 5px 50px 5px"}}>
        <Typography  sx={{ textAlign: 'center',m: 2,p:2, fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
        ALL REVIEWS
       </Typography>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             {reviews.map((review, index) => (
             <Grid item xs={2} sm={4} md={4} key={index}>
               <Paper  sx={{height:1,p:2}} style={{minHeight:"50px"}} elevation={3} >
                     {
                       review.review
                     }
                 </Paper>
             </Grid>
              ))}
             </Grid>
             </Container>
   









       


             


      
      </div>
    );
};

export default Home;