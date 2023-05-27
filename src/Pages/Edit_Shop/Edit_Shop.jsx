import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Box, Typography, Grid, Divider, } from '@mui/material'
import { rows } from '../../Data/DummyData.js';
import { faBackward, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';


const Edit_Shop = () => {

  const { id } = useParams();
  const shop = rows.find((row) => row.id === Number(id));
  const componentRef = useRef();
  const [paidAmount, setPaidAmount] = useState(0);
  const [rentPaidDate, setRentPaidDate] = useState('');

  const goBack = () => {
    window.history.go(-1);
  };

  if (!shop) {
    return <div>
      <Typography variant="h5" color="initial" textAlign='center'>Shop not found</Typography>
    </div>;
  }

  const handlePaidAmountChange = (event) => {
    setPaidAmount(parseInt(event.target.value));
  };

  const handleRentPaidDateChange = (event) => {
    setRentPaidDate(event.target.value);
  }

  const handleUpdateBill = () => {
    const remainingRent = shop.r_rent - paidAmount;
    // Perform any other necessary logic with the updated values
    console.log('Updated Paid Amount:', paidAmount);
    console.log('Updated Remaining Rent:', remainingRent);
  };


  return (
    <Box>
      {shop && (
        <Box mr={2} >
          <Box display='flex' justifyContent='space-between' py={2}>
            <h2>Shop Rental:<span style={{ color: "#FF8E53" }}> {shop.rental}</span></h2>
            <Box>
              <ReactToPrint
                trigger={() => <Button sx={{ mr: 2 }}>  <FontAwesomeIcon icon={faFileInvoice} /> <span style={{ marginLeft: "7px" }}> Generate Bill</span></Button>}
                content={() => componentRef.current}
              />
              <Button onClick={goBack}>  <FontAwesomeIcon icon={faBackward} /> <span style={{ marginLeft: "7px" }}> Go Back</span></Button>
            </Box>
          </Box>
          <Box mt={4}>
            <Grid container spacing={2}>


              <Grid item xs={3}>
                <label for="Shop__number" style={{ fontWeight: "600", }}>Shop Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                <input defaultValue={shop.Shop_No} type="number" id="Shop__number" placeholder='#1234' className='form_input' /><br />
                <Box mt={1}>
                  <label for="email" style={{ fontWeight: "600" }}>Owner Email <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input defaultValue={shop.email} type="email" id="email" placeholder='Email' className='form_input' /><br />
                </Box>
                <Box mt={1}>
                  <label for="Shop__Owner" style={{ fontWeight: "600" }}>Shop Owner <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input defaultValue={shop.S_Owner} type="text" id="Shop__Owner" placeholder='Owner Name' className='form_input' /><br />
                </Box>
                <Box mt={1}>
                  <label for="starting__date" style={{ fontWeight: "600" }}>Registration Date <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input defaultValue={shop.S_date} type="date" id="starting__date" placeholder='Owner Name' className='form_input' /><br />
                </Box>
                <Box mt={1}>
                  <label for="remaing__rent" style={{ fontWeight: "600" }}> Remaining Rent <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input defaultValue={shop.r_rent} type="number" id="remaing__rent" placeholder='Remaining Rent' className='form_input' disabled /><br />
                </Box>
              </Grid>


              <Grid item xs={3} sx={{ pr: { xs: 0, md: 2 } }}>
                <label for="shop__size" style={{ fontWeight: "600", }}>Shop Size <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                <input defaultValue={shop.size} type="text" id="shop__size" placeholder='50x123' className='form_input' /><br />
                <Box mt={1}>
                  <label for="mobile__number" style={{ fontWeight: "600" }}> Mobile Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input type="number" defaultValue={shop.m_num} id="mobile__number" placeholder='03000000000' className='form_input' /><br />
                </Box>
                <Box mt={1}>
                  <label for="shop__rental" style={{ fontWeight: "600" }}>Shop Rental <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input defaultValue={shop.rental} type="text" id="shop__rental" placeholder='Rental Name' className='form_input' /><br />
                </Box>
                <Box mt={1}>
                  <label for="floor" style={{ fontWeight: "600" }}>Floor No.<span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input defaultValue={shop.floor} type="text" id="floor" placeholder='Rental Name' className='form_input' /><br />
                </Box>
              </Grid>

              <Grid item xs={6} ref={componentRef} p={2}>
                <Typography variant="h4" color="initial" fontWeight={600} textAlign="center">Invoice Bill</Typography>
                <Divider variant="middle" orientation="horizontal" sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box width="60%">
                    <Typography variant="body1" color="initial" fontWeight={600} >Shop No</Typography>
                    <Typography variant="body1" color="initial" fontWeight={600} >Shop Rental</Typography>
                    <Typography variant="body1" color="initial" fontWeight={600} >Floor No</Typography>
                    <Typography variant="body1" color="initial" fontWeight={600} >Rent Paid Date</Typography>
                  </Box>
                  <Box width="30%">
                    <Typography variant="body1" color="initial" fontWeight={600} >{shop.Shop_No}</Typography>
                    <Typography variant="body1" color="initial" fontWeight={600} >{shop.rental}</Typography>
                    <Typography variant="body1" color="initial" fontWeight={600} >{shop.floor}</Typography>
                    <Typography variant="body1" color="initial" fontWeight={600} >{rentPaidDate}</Typography>
                  </Box>
                </Box>
                <Divider variant="middle" orientation="horizontal" sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box width="60%">
                    <Typography variant="body1" color="initial" fontWeight={600} >Paid Amount</Typography>
                    <Typography variant="body1" color="initial" fontWeight={600} >Remaining Rent</Typography>
                  </Box>
                  <Box width="30%">
                    <Typography variant="body1" color="initial" fontWeight={600} textAlign='left'>{paidAmount}</Typography>
                    <Typography variant="body1" color="initial" fontWeight={600} textAlign='left'>{shop.r_rent}</Typography>
                  </Box>
                </Box>
                <Divider variant="middle" orientation="horizontal" sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box width="60%">
                    <Typography variant="body1" color="initial" fontWeight={600} >Total Remaining Rent</Typography>
                  </Box>
                  <Box width="30%">
                    <Typography variant="body1" color="initial" fontWeight={800} >{shop.r_rent - paidAmount}</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>


            <Box mt={2} pr={2}>
              <Button
                sx={{
                  width: "24.3%", height: '35px',
                  backgroundColor: '#096AFF',
                  boxShadow: '0 3px 5px 2px rgba(9, 106, 255, .3)',
                  ':hover': {
                    backgroundColor: '#096AFF',
                    border: "1px solid #096AFF"
                  },
                }}> Update Data</Button>
            </Box>
          </Box>
        </Box>
      )
      }
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2 }} >
        <Box width='50%'>
          <label for="rent__paid__date" style={{ fontWeight: "600" }}> Rent Paid Date</label><br />
          <input type="date" id="rent__paid__date" className='Rent_input' onChange={handleRentPaidDateChange}/><br />
          <label for="rent__paid" style={{ fontWeight: "600" }}> Rent paid</label><br />
          <input type="number" id="rent__paid" className='Rent_input' placeholder='0000' onChange={handlePaidAmountChange} /><br />
          <Button
            onClick={handleUpdateBill}
            sx={{
              width: "50%", height: '35px', mt: 2,
              backgroundColor: '#096AFF',
              boxShadow: '0 3px 5px 2px rgba(9, 106, 255, .3)',
              ':hover': {
                backgroundColor: '#096AFF',
                border: "1px solid #096AFF"
              },
            }}>Update Bill</Button>
        </Box>
      </Box>

    </Box >
  );
}

export default Edit_Shop