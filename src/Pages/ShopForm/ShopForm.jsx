import React from 'react'
import { Box, Typography, Grid } from '@mui/material'


const ShopForm = () => {
  return (
    <Box>
      <Typography variant="h5" color="initial" my={2}>Add New Shop</Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <label for="ShopNo" style={{ fontWeight: "600", }}>Shop Number</label>
          <input type="text" id="ShopNo" placeholder='Shop No' className='form_input' /><br />
        </Grid>
        <Grid item xs={6} sx={{ pr: { xs: 0, md: 2 } }}>
          <label for="ShopNo" style={{ fontWeight: "600", }}>Shop Number</label>
          <input type="text" id="ShopNo" placeholder='Shop No' className='form_input' /><br />
        </Grid>
      </Grid>

    </Box>
  )
}

export default ShopForm