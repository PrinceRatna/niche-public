import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AllProducts = (props) => {
    const {_id,url,title,description,price}=props.product;

    return (
      // sx={{ maxWidth: 345 }}
        <Card sx={{height:1,p:1,m:1}} >
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

export default AllProducts;