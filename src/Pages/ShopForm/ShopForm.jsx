import React from 'react'
import { Box, Typography, Grid } from '@mui/material'


const ShopForm = () => {
  return (
    <Box>
      <Typography variant="h5" color="initial" my={2}>Add New Shop</Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <label for="Shop__number" style={{ fontWeight: "600", }}>Shop Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
          <input type="text" id="Shop__number" placeholder='#1234' className='form_input' /><br />
          <Box mt={1}>
            <label for="Shop__honor" style={{ fontWeight: "600" }}>Shop Honor <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
            <input type="text" id="Shop__honor" placeholder='#1234' className='form_input' /><br />
          </Box>

        </Grid>
        <Grid item xs={6} sx={{ pr: { xs: 0, md: 2 } }}>
          <label for="shop__size" style={{ fontWeight: "600", }}>Shop Size <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
          <input type="text" id="shop__size" placeholder='50x123' className='form_input' /><br />
          <Box mt={1}>
            <label for="shop__rental" style={{ fontWeight: "600" }}>Shop Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
            <input type="text" id="shop__rental" placeholder='#1234' className='form_input' /><br />
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}

export default ShopForm