//import { MedicalServicesTwoTone } from '@mui/icons-material';
//import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Details from '../Details/Details'



import { useParams } from 'react-router-dom';

const MealDetail = () => {
  

     const {MealDetail}=useParams();
     const [details,setDetails]=useState([]);

     useEffect(()=>{
         const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealDetail}`
         fetch(url)
         .then(res=>res.json())
         .then(data=>setDetails(data.meals))
     },[MealDetail])

     


    return (
     <div>
           <p>Meal Id:{MealDetail}</p>

           {
               details.map(meal=><Details meal={meal}></Details>)
           }
           
           
           
     
     </div>
  
       
       
    );
};

export default MealDetail;