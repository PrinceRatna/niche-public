import { Typography,TextareaAutosize, Button } from '@mui/material';
import React, { useState } from 'react';

const AddReview = () => {

    const [review,setReview]=useState({});
        

    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
       //  console.log(field,value)
       const newReview={...review};
       newReview[field]=value;
       console.log(newReview);
       setReview(newReview);
      
      }

      const handleReviewSubmit=e=>{
         
        fetch('http://localhost:5000/addReview',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Successfully Added Your Review .')
                e.target.reset(); 
            }
        })


            e.preventDefault();

      }





    return (
        <div style={{textAlign:'center'}}>
             <Typography variant="h5">
           Please Add Review 
        </Typography>
       

<form onSubmit={handleReviewSubmit}>
<TextareaAutosize

  name="review"
  onBlur={handleOnBlur}
  aria-label="minimum height"
  minRows={3}
  placeholder="Add Review"
  style={{ width:'75%' }}
/>

 <br/>

        <Button
         sx={{width: '20px',m:1}}
         variant="contained"
         type="submit"
        >Submit</Button>


</form>








        </div>
    );
};

export default AddReview;