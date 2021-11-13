import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const AllOrders = () => {
 const [allOrders,setAllOrders]=useState([]);

 useEffect(()=>{

    fetch('https://obscure-peak-03535.herokuapp.com/addOrders')
    
    .then(res=>res.json())
    .then(data=>setAllOrders(data))
 },[])
console.log(allOrders);


const handleOrders=id=>{

    const proceed=window.confirm('Are you sure, you want to delete?');
    if(proceed){
       const url=`https://obscure-peak-03535.herokuapp.com/addOrders/${id}`;
       fetch(url,{
           method:'DELETE'
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.deletedCount>0){
               alert('Deleted Successfull');
               const remainingOrders=allOrders.filter(allOrder=>allOrder._id!==id)
               setAllOrders(remainingOrders);
           }
       })
   
    }


}



    return (
        <div>
            
            
            <Container>
         <Typography  sx={{ textAlign: 'center',m: 2,p:2, fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
         All Orders
        </Typography>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {
              allOrders.map((order, index)=> {
        
                  return <Grid sx={{height:1}} xs={2} sm={4} md={4} key={index}>

<Paper   sx={{ mx:'auto', p:'1', mt:'3',height:1}} elevation={3} style={{width:'300px'}} >
    
    <ul>
        
        <li style={{padding:'5px'}}>
             <strong> Name : </strong>
              <span style={{}}>{order.title}</span>
              </li>

        <li style={{padding:'5px'}}>
        <strong>Description :</strong>
                    <span>{order.description}</span>
        </li>
        
        </ul>



        {/* <li style={{padding:'5px'}}></li><hr/> */}
    
        {/* <li style={{padding:'5px'}}> */}
        <div style={{textAlign:'center'}}>
            <Button sx={{bgcolor:'#e0f7fa' ,}} onClick={()=>handleOrders(order._id)} color="inherit">Delete</Button>
            </div>
             {/* </li> */}
        
 </Paper>


                      


            </Grid>
             
              
           })
           
           }
              </Grid>
              </Container>











          

        </div>
      
    );
};

export default AllOrders;