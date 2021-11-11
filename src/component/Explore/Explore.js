import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import AllProducts from '../AllProducts/AllProducts';



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
const Explore = () => {
    return (
        <Container>
        <Typography  sx={{ textAlign: 'center',m: 2,p:2, fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
        ALL PRODUCTS
       </Typography>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             {products.map((product, index) => (
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
