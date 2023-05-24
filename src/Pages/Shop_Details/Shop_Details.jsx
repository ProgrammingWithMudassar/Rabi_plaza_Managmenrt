import React from 'react'
import { useParams } from 'react-router-dom';
import {Typography,Box} from '@mui/material'

const Shop_Details = () => {
    const { id } = useParams();

    // Logic to fetch the details of the shop with the given ID
  
    return (
      <Box>
        <h2>Shop Details - ID: {id}</h2>
        <Typography variant="body1" color="initial">dsfgs</Typography>
        {/* Display the details of the shop */}
      </Box>
    );
}

export default Shop_Details