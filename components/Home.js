import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react'
import { useGetAllFoodsQuery,useGetFatFreeFoodQuery,useGetVeganFoodQuery } from '../feature/ApiSlice'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  const dispatch = useDispatch();
  const { data:foods, error, isLoading } = useGetAllFoodsQuery();
  
  return (
    <View>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {foods?.map((food) => (
        <Card key={food.id} sx={{ minWidth: 275 ,backgroundColor: "lightgrey",border:"2px dashed"}}>
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
            <b>{food.title}</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
           {food.description}
          </Typography>
          <Typography variant="body2">
          {food.cuisine}
            <br />
           Vegan: {food.vegan?'Yes':'No'}
           <br />
           Fat free: {food.fat_free?'Yes':'No'}

          </Typography>
        </CardContent>
        
      </Card>
      ))}
      
    </View>
  )
}