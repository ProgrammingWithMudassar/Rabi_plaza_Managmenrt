import React from 'react'
import { useParams } from 'react-router-dom';
import { Button, Box, Typography, Grid,  } from '@mui/material'
import { rows } from '../../Data/DummyData.js';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Edit_Shop = () => {

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
          <Box mt={4}>
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
              </Grid>
            </Grid>
            <Box mt={2} pr={2}>
              <Button sx={{ width: "100%", height: '35px' }}> Update </Button>
            </Box>
          </Box>
        </Box>
      )
      }
    </Box >
  );
}

export default Edit_Shop