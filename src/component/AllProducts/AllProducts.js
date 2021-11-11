import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AllProducts = (props) => {
    const {url,title,description,price}=props.product;

    return (
        <Card sx={{ maxWidth: 345 }}>
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
      <NavLink to="/purchase"><Button size="small">purchase</Button>
</NavLink>

        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    );
};

export default AllProducts;