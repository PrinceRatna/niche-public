import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {

    const {user}=useAuth();
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        // fetch(`https://polar-beach-07938.herokuapp.com/addOrders?email=${user.email}`)
        fetch(`http://localhost:5000/addOrders?email=${user.email}`)
        // http://localhost:5000/addOrders?email=arjnry125@gmail.com
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[]);


    const handleDeleteOder=id=>{
        const proceed=window.confirm('Are you sure, you want to delete?');
        if(proceed){
           const url=`http://localhost:5000/addOrders/${id}`;
           fetch(url,{
               method:'DELETE'
           })
           .then(res=>res.json())
           .then(data=>{
               if(data.deletedCount>0){
                   alert('Deleted Successfull');
                   const remainingOrders=orders.filter(allOrder=>allOrder._id!==id)
                   setOrders(remainingOrders);
               }
           })
       
        }
       
        }


  



    return (
        <div style={{textAlign:'center'}}>
             <Typography variant="h5">
          Welcome To Order Page
        </Typography>
            {/* {
                console.log(orders)
            } */}
            
            <ul>
           {
               orders.map(order=><li
               key={order._id}
               ><span>{order.phoneNumber} {order.title}</span><button onClick={()=>handleDeleteOder(order._id)} >Delete</button></li>)
           }

          </ul>

            {/* {order.title} */}
    
        </div>
    );
};

export default MyOrders;