import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Button, Grid, Card, ListItem, List, Divider, CardContent } from '@mui/material';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetShopByIdQuery } from '../../Features/API/Api';

const Update_Rent = () => {
  const { id } = useParams();
  const { data: shop, isLoading, isError, refetch } = useGetShopByIdQuery(id);
  console.log(shop)

  useEffect(() => {
    refetch();
  }, [refetch]);


  const goBack = () => {
    window.history.go(-1);
  };

  if (isError) {
    return (
      <div>
        <Typography variant="h5" color="initial" textAlign="center">
          Error fetching shop
        </Typography>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <Typography variant="h5" color="initial" textAlign="center">
          Loading shop...
        </Typography>
      </div>
    );
  }

  if (!shop) {
    return (
      <div>
        <Typography variant="h5" color="initial" textAlign="center">
          Shop not found
        </Typography>
      </div>
    );
  }
  return (
    <div>
      {shop && (
        <Box mr={2}>
          <Box display="flex" justifyContent="space-between" py={2}>
            <h2>
              Shop Rental:<span style={{ color: "#FF8E53" }}> {shop.shop.shopRental}</span>
            </h2>
            <Button onClick={goBack}>
              <FontAwesomeIcon icon={faBackward} /> <span style={{ marginLeft: "7px" }}>Go Back</span>
            </Button>
          </Box>
        </Box>
      )
      }


    </div>
  )
}

export default Update_Rent