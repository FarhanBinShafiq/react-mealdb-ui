
import {   Card,  CardContent, CardHeader, CardMedia,  Typography } from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';





const Meal = (props) => {

    const {idMeal,strMeal,strMealThumb,strInstructions}=props.meal;
    return (
        
        <Card >
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

      </Card> 

 )
};
    export default Meal; 
