import React from 'react'
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material'


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
            <label for="shop__rental" style={{ fontWeight: "600" }}>Shop Rental <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
            <input type="text" id="shop__rental" placeholder='Rental Name' className='form_input' /><br />
          </Box>
          <Box mt={1}>
            <label for="floor" style={{ fontWeight: "600" }}>Floor No.<span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
            <input type="text" id="floor" placeholder='Rental Name' className='form_input' /><br />
          </Box>
          {/* <Box mt={1} display='flex'>
            <Card variant="outlined" sx={{ width: '50%' }}>
              <CardContent>
                <Typography variant="h6" color="initial" textAlign='center'>Remaing Rent</Typography>
                <Typography variant="h6" color="initial" textAlign='center'>0</Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ width: '50%' }}>
              <CardContent>
                <Typography variant="h6" color="initial" textAlign='center'>Remaing Rent</Typography>
                <Typography variant="h6" color="initial" textAlign='center'>20,000</Typography>
              </CardContent>
            </Card>
          </Box> */}
        </Grid>
      </Grid>
      <Box mt={2} pr={2}>
        <Button sx={{width:"100%"}}> Add New</Button>
      </Box>
    </Box>
  )
}

export default ShopForm