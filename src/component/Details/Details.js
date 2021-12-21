import React from 'react';
import {   Card,  CardContent, CardHeader, CardMedia,  Typography } from '@mui/material';
import Link from '@mui/material/Link';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Details = (props) => {
  
    const navigate = useNavigate();
    const {idMeal,strMeal,strMealThumb,strInstructions}=props.meal;

    const handleClick=()=>{
        navigate('/resturant')
    }
    return (
        <Card  >
        <CardHeader
    
         
          title={strMeal}
         
       
        />
        <CardMedia
          component="img"
          height="194"
          width="250"
          image={strMealThumb}
          
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
         {strInstructions.slice(0,100)}
        
        
          </Typography>
        </CardContent>

        
        <Link href={`/resturant/${idMeal}`}>Link</Link>
           <br></br>
        <Link>
        <Button  onClick={handleClick}  variant="contained">Go Back To Menu</Button>
       </Link>




      </Card>
    );
};

export default Details;