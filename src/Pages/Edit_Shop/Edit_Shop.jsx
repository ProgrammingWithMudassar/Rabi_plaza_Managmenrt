import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Box, Typography, Grid, Divider } from '@mui/material';
import { faBackward, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { useGetShopByIdQuery, useUpdateShopMutation } from '../../Features/API/Api';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Edit_Shop = () => {



  const { id } = useParams();
  const navigate = useNavigate();
  let [isPageRefreshed, setIsPageRefreshed] = useState(false);

  useEffect(() => {
    if (isPageRefreshed === true) {
      setIsPageRefreshed(false);
      // window.location.reload();
    }
  }, [isPageRefreshed]);


  const { data: shop, isLoading, isError, refetch } = useGetShopByIdQuery(id);
  const [updateShop, { isLoading: isUpdating }] = useUpdateShopMutation();
  const componentRef = useRef();
  const [paidAmount, setPaidAmount] = useState(0);
  const [rentPaidDate, setRentPaidDate] = useState('');
  const initialShop = {
    shopNumber: '',
    shopOwner: '',
    registrationDate: '',
    shopSize: '',
    mobileNumber: '',
    shopRental: '',
    floorNo: '',
    ShopRent: '',
  };
  let [formData, setFormData] = useState({
    shop: initialShop,
  });

  useEffect(() => {
    refetch(); // Call the API when the component mounts
  }, [refetch]);

  useEffect(() => {
    if (shop) {
      setFormData({
        shop: {
          shopNumber: shop.shop.shopNumber,
          shopOwner: shop.shop.shopOwner,
          registrationDate: shop.shop.registrationDate,
          shopSize: shop.shop.shopSize,
          mobileNumber: shop.shop.mobileNumber,
          shopRental: shop.shop.shopRental,
          floorNo: shop.shop.floorNo,
          ShopRent: shop.shop.ShopRent,
        },
      });
    }
  }, [shop]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      shop: {
        ...formData.shop,
        [e.target.id]: e.target.value,
      },
    });
  };

  const goBack = () => {
    window.history.go(-1);
  };

  const handlePaidAmountChange = (event) => {
    setPaidAmount(parseInt(event.target.value));
  };

  const handleRentPaidDateChange = (event) => {
    setRentPaidDate(event.target.value);
  };

  const handleUpdateBill = () => {
    const remainingRent = shop.r_rent - paidAmount;
    // Perform any other necessary logic with the updated values
    console.log('Updated Paid Amount:', paidAmount);
    console.log('Updated Remaining Rent:', remainingRent);
  };

  const handleUpdateData = () => {
    const {
      shopNumber, shopOwner, registrationDate,
      shopSize, mobileNumber, shopRental, floorNo, ShopRent
    } = formData.shop;
    const updatedShopData = {
      shopNumber,
      shopOwner,
      registrationDate,
      shopSize,
      mobileNumber,
      shopRental,
      floorNo, ShopRent
    };
    const res = updateShop({ shopId: id, updatedShopData })
    if (res) {
      console.log(res);
      window.location.reload();
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching shop data</div>;
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
        <Box mr={2} >
          <Box display='flex' justifyContent='space-between' py={2}>
            <h2>Shop Rental:<span style={{ color: "#FF8E53" }}> {shop.shop.shopRental}</span></h2>
            <Box>
              <Button onClick={goBack}>  <FontAwesomeIcon icon={faBackward} /> <span style={{ marginLeft: "7px" }}> Go Back</span></Button>
            </Box>
          </Box>
          <Box mt={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <label for="shopNumber" style={{ fontWeight: "600", }}>Shop Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                <input defaultValue={shop.shop.shopNumber} type="text" id="shopNumber" placeholder='#1234' className='form_input' onChange={handleInputChange} /><br />
                <Box mt={1}>
                  <label for="shopOwner" style={{ fontWeight: "600" }}>Shop Owner <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input defaultValue={shop.shop.shopOwner} type="text" id="shopOwner" placeholder='Owner Name' className='form_input' onChange={handleInputChange} /><br />
                </Box>
                <Box mt={1}>
                  <label for="registrationDate" style={{ fontWeight: "600" }}>Registration Date <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input defaultValue={shop.shop.registrationDate} type="date" id="registrationDate" placeholder='Owner Name' className='form_input' onChange={handleInputChange} /><br />
                </Box>
                <Box mt={1}>
                  <label for="ShopRent" style={{ fontWeight: "600" }}> Remaining Rent <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input defaultValue={shop.shop.Monthly_rent} type="number" id="ShopRent" placeholder='Remaining Rent' className='form_input'  onChange={handleInputChange}/><br />
                </Box>
              </Grid>


              <Grid item xs={6} sx={{ pr: { xs: 0, md: 2 } }}>
                <label for="shopSize" style={{ fontWeight: "600", }}>Shop Size <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                <input defaultValue={shop.shop.shopSize} type="text" id="shopSize" placeholder='50x123' className='form_input' onChange={handleInputChange} /><br />
                <Box mt={1}>
                  <label for="mobileNumber" style={{ fontWeight: "600" }}> Mobile Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input type="number" defaultValue={shop.shop.mobileNumber} id="mobileNumber" placeholder='03000000000' className='form_input' onChange={handleInputChange} /><br />
                </Box>
                <Box mt={1}>
                  <label for="shopRental" style={{ fontWeight: "600" }}>Shop Rental <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input defaultValue={shop.shop.shopRental} type="text" id="shopRental" placeholder='Rental Name' className='form_input' onChange={handleInputChange} /><br />
                </Box>
                <Box mt={1}>
                  <label for="floorNo" style={{ fontWeight: "600" }}>Floor No.<span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                  <input defaultValue={shop.shop.floorNo} type="text" id="floorNo" placeholder='Rental Name' className='form_input' onChange={handleInputChange} /><br />
                </Box>
              </Grid>

            </Grid>

            <Box mt={2} pr={2}>
              <Button
                sx={{
                  width: "100%", height: '35px',
                  backgroundColor: '#096AFF',
                  boxShadow: '0 3px 5px 2px rgba(9, 106, 255, .3)',
                  ':hover': {
                    backgroundColor: '#096AFF',
                    border: "1px solid #096AFF"
                  },
                }}
                onClick={handleUpdateData}> Update Data</Button>
            </Box>
          </Box>
        </Box>
      )
      }
    </Box >
  );
}

export default Edit_Shop