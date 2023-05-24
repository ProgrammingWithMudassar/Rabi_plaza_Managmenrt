import React from 'react'
import { useParams } from 'react-router-dom';
import { Button, Box, Typography,Grid, Card, ListItem, List  } from '@mui/material'
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

          <Card >
            <List>
              <Grid container spacing={0}>
                <Grid xs={3} md={3}>
                  <ListItem><Typography variant="body1" fontWeight={600}>Age :</Typography></ListItem>
                  <ListItem><Typography variant="body1" fontWeight={600}>Email:</Typography></ListItem>
                  <ListItem><Typography variant="body1" fontWeight={600}>Number:</Typography></ListItem>
                  <ListItem><Typography variant="body1" fontWeight={600}>Degree:</Typography></ListItem>
                  <ListItem><Typography variant="body1" fontWeight={600}>Freelance:</Typography></ListItem>
                </Grid>
                <Grid xs={9} md={9}>
                  <ListItem><Typography variant="body1">22</Typography></ListItem>
                  <ListItem><Typography variant="body1">mudassar0920@gmail.com</Typography></ListItem>
                  <ListItem><Typography variant="body1">+923104602885</Typography></ListItem>
                  <ListItem><Typography variant="body1">BS Software Engineering</Typography></ListItem>
                  <ListItem><Typography variant="body1">Availabel</Typography></ListItem>
                  <ListItem>
                    <Button sx={{ fontSize: '12px' }}>Download CV</Button>
                  </ListItem>
                </Grid>
              </Grid>
            </List>
          </Card>
          {/* <p>Shop Number: {shop.Shop_No}</p>
          <p>Rental: {shop.rental}</p>
          <p>Shop Honor: {shop.S_honor}</p>
          <p>Shop Size: {shop.size}</p>
          <p>Floor: {shop.floor}</p>
          <p>Starting Date: {shop.S_date}</p>
          <p>Remaining Rent: {shop.r_rent}</p> */}
        </Box>
      )}
    </Box>
  );
}

export default Shop_Details