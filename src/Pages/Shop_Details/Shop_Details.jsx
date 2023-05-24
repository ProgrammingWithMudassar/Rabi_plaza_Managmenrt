import React from 'react'
import { useParams } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material'
import { rows } from '../../Data/DummyData.js';
import { useHistory } from 'react-router-dom';

const Shop_Details = () => {

  const history = useHistory();
  const { id } = useParams();
  const shop = rows.find((row) => row.id === Number(id));

  const goBack = () => {
    window.history.go(-1);
  };

  if (!shop) {
    return <div>
      <Typography variant="h5" color="initial" textAlign='center'>Shop not found</Typography>
    </div>;
  }


  return (
    <Box>
        <Button onClick={goBack}>Go Back</Button>
      <h2>Shop Details - ID: {id}</h2>
      {shop && (
        <div>
          <p>Shop Number: {shop.Shop_No}</p>
          <p>Rental: {shop.rental}</p>
          <p>Shop Honor: {shop.S_honor}</p>
          <p>Shop Size: {shop.size}</p>
          <p>Floor: {shop.floor}</p>
          <p>Starting Date: {shop.S_date}</p>
          <p>Remaining Rent: {shop.r_rent}</p>
        </div>
      )}
    </Box>
  );
}

export default Shop_Details