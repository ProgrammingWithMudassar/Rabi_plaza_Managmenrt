import React from 'react'
import { useParams } from 'react-router-dom';
import { Button, Box, Typography, Grid, Card, ListItem, List, Divider, CardContent, CardActions } from '@mui/material'
import { rows } from '../../Data/DummyData.js';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Shop_Details = () => {

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
      {shop && (
        <Box mr={2} >
          <Box display='flex' justifyContent='space-between' py={2}>
            <h2>Shop Rental:<span style={{ color: "#FF8E53" }}> {shop.rental}</span></h2>
            <Button onClick={goBack}>  <FontAwesomeIcon icon={faBackward} /> <span style={{ marginLeft: "7px" }}> Go Back</span></Button>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ minHeight: '200px' }} >
                <List>
                  <Grid container spacing={0}>
                    <Grid xs={5} md={5}>
                      <ListItem><Typography variant="body1" fontWeight={600}>Shop Number</Typography></ListItem> <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem><Typography variant="body1" fontWeight={600}>Shop Size</Typography></ListItem> <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem><Typography variant="body1" fontWeight={600}>Shop Floor</Typography></ListItem> <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem><Typography variant="body1" fontWeight={600}>Starting Date</Typography></ListItem> <Divider variant="fullWidth" orientation="horizontal" />
                    </Grid>
                    <Grid xs={7} md={7}>
                      <ListItem><Typography variant="body1"> {shop.Shop_No}</Typography></ListItem>  <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem><Typography variant="body1">{shop.size}</Typography></ListItem> <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem><Typography variant="body1">{shop.floor}</Typography></ListItem> <Divider variant="fullWidth" orientation="horizontal" />
                      <ListItem><Typography variant="body1">{shop.S_date}</Typography></ListItem> <Divider variant="fullWidth" orientation="horizontal" />
                    </Grid>
                  </Grid>
                </List>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ minHeight: '200px', position: 'relative' }}  >
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1" color="initial">  Remaining Rent </Typography>
                    <Typography variant="body1" color="initial">  {shop.r_rent} </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )
      }
    </Box >
  );
}

export default Shop_Details