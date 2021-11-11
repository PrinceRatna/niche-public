import React from 'react';
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
// the products will have a maximum of 6 items/products
// Each product should have a relevant name, image, short description, add a purchase or buy now button. If a user clicks on the purchase or buy now button it will take the user to the purchase page. 
// (Add one extra section)
// We will have another page on the top navigation bar (header) mentioning `explore` 
// Clicking on the link will take the user to the explore page. On this page, users will see all the products you have. This means, the user will see at least 10 products on this page. Each item will have a name, description, image, price and button. Once a user clicks on this button, it will take the user to the `purchase` page.
// The `purchase`page will be a private/protected route


// -------------------*******--------------------//

const products= [{
 
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
  "price":"909"
  
},
{

  "title": "reprehenderit est deserunt velit ipsam",
  "url": "https://via.placeholder.com/600/771796",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
  "price":"496"

  
},
{
 
  "title": "officia porro iure quia iusto qui ipsa ut modi",
  "url": "https://via.placeholder.com/600/24f355",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
  "price":"904"

 
},
{
  
  "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  "url": "https://via.placeholder.com/600/d32776",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
  "price":"678"

  
},
{
  
  "title": "natus nisi omnis corporis facere molestiae rerum in",
  "url": "https://via.placeholder.com/600/f66b97",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
  "price":"976"

 
},
{
  
  "title": "accusamus ea aliquid et amet sequi nemo",
  "url": "https://via.placeholder.com/600/56a8c2",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
  "price":"888"

},
{
 
  "title": "officia delectus consequatur vero aut veniam explicabo molestias",
  "url": "https://via.placeholder.com/600/b0f7cc",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
  "price":"340"

 
},
{
 
  "title": "aut porro officiis laborum odit ea laudantium corporis",
  "url": "https://via.placeholder.com/600/54176f",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
  "price":"680"

 
},
{
  
  "title": "qui eius qui autem sed",
  "url": "https://via.placeholder.com/600/51aa97",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
  "price":"435"

  
},
{
 
  "title": "beatae et provident et ut vel",
  "url": "https://via.placeholder.com/600/810b14",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
  "price":"555"

  
},
{
  
  "title": "nihil at amet non hic quia qui",
  "url": "https://via.placeholder.com/600/1ee8a4",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
  "price":"432"
  
 
},
{
  
  "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
  "url": "https://via.placeholder.com/600/66b7d2",
  "description":"lopokkojpoujpio iop iuio uy7 uitty iouyoi8 oiyuio iouoi",
    
  "price":"434"
  
  }
]



const Home = () => {

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
              {products.map((product, index)=> {
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