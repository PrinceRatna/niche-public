import React, { useState } from 'react';
// import React, { useState } from 'react';
import { Typography,TextareaAutosize, Button, TextField } from '@mui/material';


const AddProducts = () => {

    const [product,setProduct]=useState({});
        

    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
       //  console.log(field,value)
       const newProduct={...product};
       newProduct[field]=value;
       console.log(newProduct);
       setProduct(newProduct);
      
      }

      const handleProductSubmit=e=>{
         
        fetch('http://localhost:5000/explores',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Successfully Added Product .')
                e.target.reset(); 
            }
        })


            e.preventDefault();

      }





    return (
        <div style={{textAlign:'center'}}>
        <Typography variant="h5">
      Please Add Product
   </Typography>
  

<form onSubmit={handleProductSubmit}>


<TextareaAutosize

name="title"
onBlur={handleOnBlur}
aria-label="minimum height"
minRows={3}
placeholder="Add Title"
style={{ width:'75%' }}
/>

<br/>

<TextareaAutosize

name="price"
onBlur={handleOnBlur}
aria-label="minimum height"
minRows={3}
placeholder="Add Price"
style={{ width:'75%' }}
/>

<br/>

<TextareaAutosize

name="url"
onBlur={handleOnBlur}
aria-label="minimum height"
minRows={3}
placeholder="Add Image Url"
style={{ width:'75%' }}
/>

<br/>




<TextareaAutosize

name="description"
onBlur={handleOnBlur}
aria-label="minimum height"
minRows={3}
placeholder="Add Description"
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
export default AddProducts;


    




    
       

