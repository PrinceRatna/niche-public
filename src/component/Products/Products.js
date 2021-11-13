import { Grid } from '@mui/material';
import React from 'react';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { yellow } from '@mui/material/colors';

// sx={{ maxWidth: 345, }}
const Products = (props) => {
    const {_id,url,title,description,price}=props.product;
    // console.log(props.product)
    return (
        <Card  sx={{height:1,p:1,m:1}} >
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
         Price: $ {price}
        </Typography>
      </CardContent>
      <CardActions>
      <NavLink to={`/purchase/${_id}`}><Button  size="small">purchase</Button>
</NavLink>

      
      </CardActions>
    </Card>
    );
};

export default Products;