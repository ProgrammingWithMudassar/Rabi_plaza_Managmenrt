import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Button, Grid, Card, ListItem, List, Divider, CardContent } from '@mui/material';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetRentShopByIdQuery } from '../../Features/API/Api';

const RentShopDetails = () => {
  const { id } = useParams();
  const { data: shop, isLoading, isError, refetch } = useGetRentShopByIdQuery(id);
  console.log(shop)


  useEffect(() => {
    refetch(); // Call the API when the component mounts
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
    <Box>
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

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ minHeight: '200px' }}>
                <List>
                  <Grid container spacing={0}>
                    <Grid xs={5} md={5}>
                      <ListItem>
                        <Typography variant="body1" fontWeight={600}>
                          Shop Number
                        </Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1" fontWeight={600}>
                          Shop Size
                        </Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1" fontWeight={600}>
                          Mobile Number
                        </Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1" fontWeight={600}>
                          Shop Owner
                        </Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1" fontWeight={600}>
                          Register Date
                        </Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1" fontWeight={600}>
                          Shop Floor
                        </Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1" fontWeight={600}>
                          Monthly Rent
                        </Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1" fontWeight={600}>
                          Remaining Rent
                        </Typography>
                      </ListItem>
                    </Grid>
                    <Grid xs={7} md={7}>
                      <ListItem>
                        <Typography variant="body1"> {shop.shop.shopNumber}</Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1">{shop.shop.shopSize}</Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1">{shop.shop.mobileNumber}</Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1">{shop.shop.shopOwner}</Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1"> {shop.shop.registrationDate}</Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1">{shop.shop.floorNo}</Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1">{shop.shop.Monthly_rent}</Typography>
                      </ListItem>
                      <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem>
                        <Typography variant="body1">{Number(shop.shop.ShopRent) + Number(shop.shop.shop_remaining_rent)}</Typography>
                      </ListItem>
                    </Grid>
                  </Grid>
                </List>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ minHeight: '200px', position: 'relative' }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1" color="initial">
                      Remaining Rent
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {Number(shop.shop.ShopRent) + Number(shop.shop.shop_remaining_rent)}
                    </Typography>
                  </Box>
                  <Box mt={2} sx={{ maxHeight: "300px", minHeight: "200px", overflow: "scroll" }}>
                    <Typography variant="h6">Charge's History:</Typography>
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
        </Box>
      )}
    </Box>
  );
};

export default RentShopDetails;