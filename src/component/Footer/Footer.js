import { Margin } from '@mui/icons-material';
import { Container, Grid } from '@mui/material';
import { padding } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        
        <footer style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',background:'black',color:'white', padding:'5px',minHeight:'200px' ,marginTop:'200px'}}>

<div >
 <h3>OUR SHOP LOCATION</h3>
<ul>
 <li>AZIMPUR</li>
 <li>MIRPUR</li>
 <li>DASHAR</li>
</ul>
</div>  
<div>
 <h3> VISIT NOW </h3>
<ul>
 <li><a  style={{color:'white'}} href="https://www.facebook.com/">Facebook</a></li>
 <li><a  style={{color:'white'}} href="https://twitter.com/?lang=en">Twitter</a></li>
 <li><a  style={{color:'white'}} href="https://www.whatsapp.com/">What's Up</a></li>
 
</ul>
</div>  
<div>
 <h3> OUR NEW CAR </h3>
<ul>
 <li>Tesla</li>
 <li>BMW</li>
 <li>Ferrari</li>
</ul>
</div>  

      </footer>
    );
};

export default Footer;