import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Meal from '../Meal/Meal';
import { Container, CssBaseline, Grid } from '@mui/material';


const Resturant = () => {
  
    const [searchText,setSearchText]=useState('');
    const [meals,setMeals]=useState([])

    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
             console.log(data.meals)
            setMeals(data.meals)})
    },[searchText])

    const handleSearchField= e =>{

        const searchTextValue=e.target.value;
        setSearchText(searchTextValue)
        console.log(searchTextValue)
    
    }
    


    return (
      
         

<React.Fragment>
<CssBaseline />
<Container maxWidth="lg">
<div>
             
             <Box
             component="form"
             sx={{
               '& > :not(style)': { m: 1, width: '60ch' },
             }}
             noValidate
             autoComplete="off"
           >
             <TextField id="outlined-basic" label="Search Your Favourite Food" onClick={handleSearchField}  placeholder='Search Your Favourite Food'  variant="outlined" />
            
           </Box>
     
     
                 
     
         <Box sx={{ flexGrow: 1 }}>
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             {
              
                 
                     meals.map(meal=> 
                     
                     <Grid item xs={2} sm={4} md={4}>
                              <Meal key={meal.idMeal} meal={meal} ></Meal>
                     </Grid>)
                 
               
             }
           </Grid>
         </Box>
         
              </div>
</Container>
</React.Fragment>

    );
};

export default Resturant;