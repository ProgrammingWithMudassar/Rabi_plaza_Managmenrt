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
              Shop No:<span style={{ color: "#FF8E53" }}> {shop.shop.shopNumber}</span>
            </h2>
            <Button onClick={goBack}>
              <FontAwesomeIcon icon={faBackward} /> <span style={{ marginLeft: "7px" }}>Go Back</span>
            </Button>
          </Box>
        </Box>
      )
      }

      <Grid container spacing={4} pr={2}>
        <Grid item xs={8} className='Right'>

        </Grid>
        <Grid item xs={4} >
          <Card sx={{ minHeight: '200px', position: 'relative' }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="initial" fontWeight={600}>
                  Remaining Rent
                </Typography>
                <Typography variant="h5" color="initial" fontWeight={600}>
                  {shop.shop.ShopRent}
                </Typography>
              </Box>
              <Box mt={2} sx={{ maxHeight: "500px", minHeight: "200px", overflow: "scroll" }}>
                <Typography variant="h6">Rent History:</Typography>
                {[...shop.shop.rent]
                  .sort((a, b) => new Date(b.rent_paid_date) - new Date(a.rent_paid_date))
                  .map((rent, index) => (
                    <Box key={index}>
                      <Typography variant="body1">
                        Date: {new Date(rent.rent_paid_date).toLocaleDateString()} Paid Rent: {rent.rent_paid_amount}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </div>
  )
}

export default Update_Rent