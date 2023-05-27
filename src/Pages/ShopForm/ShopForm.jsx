import React from 'react'
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material'
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShopForm = () => {

  const options = [1, 2, 3, 4, 5];
  const goBack = () => {
    window.history.go(-1);
  };
  return (
    <Box>
      <Box display='flex' justifyContent='space-between' alignItems="center" py={2} mr={2}>
        <Typography variant="h5" color="initial" my={2} fontWeight={600}>Add New Shop</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <label for="Shop__number" style={{ fontWeight: "600", }}>Shop Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
          <input type="text" id="Shop__number" placeholder='#1234' className='form_input' /><br />
          <Box mt={1}>
            <label for="email" style={{ fontWeight: "600" }}>Honor Email <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
            <input type="email" id="email" placeholder='Email' className='form_input' /><br />
          </Box>
          <Box mt={1}>
            <label for="Shop__honor" style={{ fontWeight: "600" }}>Shop Honor <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
            <input type="text" id="Shop__honor" placeholder='Honor Name' className='form_input' /><br />
          </Box>
          <Box mt={1}>
            <label for="starting__date" style={{ fontWeight: "600" }}>Registration Date <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
            <input type="date" id="starting__date" placeholder='Honor Name' className='form_input' /><br />
          </Box>
        </Grid>



        <Grid item xs={6} sx={{ pr: { xs: 0, md: 2 } }}>
          <label for="shop__size" style={{ fontWeight: "600", }}>Shop Size <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
          <input type="text" id="shop__size" placeholder='50x123' className='form_input' /><br />
          <Box mt={1}>
            <label for="mobile__number" style={{ fontWeight: "600" }}> Mobile Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
            <input type="text" id="mobile__number" placeholder='03000000000' className='form_input' /><br />
          </Box>
          <Box mt={1}>
            <label for="shop__rental" style={{ fontWeight: "600" }}>Shop Rental <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
            <input type="text" id="shop__rental" placeholder='Rental Name' className='form_input' /><br />
          </Box>
          <Box mt={1}>
            <label for="floor" style={{ fontWeight: "600" }}>Floor No.<span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
            <input type="text" id="floor" placeholder='Floor Number' className='form_input' list="options" /><br />
            <datalist id="options" style={{ width: "100%" }}>
              {options.map((option, index) => (
                <option key={index} value={option} />
              ))}
            </datalist>
          </Box>
        </Grid>
      </Grid>
      <Box mt={2} pr={2}>
        <Button sx={{ width: "100%", height: '35px' }}> Add New</Button>
      </Box>
    </Box>
  )
}

export default ShopForm