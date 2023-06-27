import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useAddShopMutation } from '../../Features/API/Api.js';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddRentShop = () => {
  const [formData, setFormData] = useState({
    shopNumber: '',
    shopOwner: '',
    registrationDate: '',
    shopSize: '',
    mobileNumber: '',
    shopRental: '',
    floorNo: '',
    ShopMaintainance: ''
  });

  const navigate = useNavigate();

  const options = [1, 2, 3, 4, 5];
  const [addShop, { data, isLoading, isError }] = useAddShopMutation();


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value.trim(), // Trim the input value
    }));
  };


  const handleInputData = async (e) => {
    let {
      shopNumber,  shopOwner, registrationDate,
      shopSize, mobileNumber, shopRental, floorNo, ShopRent
    } = formData;
    e.preventDefault();
    if (
      shopNumber,  shopOwner, registrationDate,
      shopSize, mobileNumber, shopRental, floorNo, ShopRent
    ) {
      try {
        const response = await addShop(formData);
        toast.success(response.data.message);
        navigate('/All_Shop_data');
      } catch (error) {
        if (error.status === 409) {
          toast.error(error.data.message);
          console.log('Conflict:', error.data.message);
        } else {
          toast.error('This shop is already Exist.');
          console.log('Error:', error);
        }
      }
    }
    else {
      toast.error("please fill comlpete form.");
    }
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" py={2} mr={2}>
        <Typography variant="h5" color="initial" my={2} fontWeight={600}>
          Add Rent Shop
        </Typography>
      </Box>

      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <label htmlFor="shopNumber" style={{ fontWeight: '600' }}>
              Shop Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
            </label>
            <input
              type="text"
              id="shopNumber"
              placeholder="S001"
              className="form_input"
              value={formData.shopNumber}
              onChange={handleChange}
            />
            <Box mt={1}>
              <label htmlFor="shopRental" style={{ fontWeight: '600' }}>
                Shop Rental <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
              </label>
              <input
                type="text"
                id="shopRental"
                placeholder="Rental Name"
                className="form_input"
                value={formData.shopRental}
                onChange={handleChange}
              />
            </Box>
            <Box>
            <label htmlFor="shopSize" style={{ fontWeight: '600' }}>
              Shop Size <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
            </label>
            <input
              type="text"
              id="shopSize"
              placeholder="50x123"
              className="form_input"
              value={formData.shopSize}
              onChange={handleChange}
            />
            </Box>
            <Box mt={1}>
              <label htmlFor="floorNo" style={{ fontWeight: '600' }}>
                floor No.<span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
              </label>
              <input
                type="text"
                id="floorNo"
                placeholder="floor Number"
                className="form_input"
                list="options"
                value={formData.floorNo}
                onChange={handleChange}
              />
              <datalist id="options" style={{ width: '100%' }}>
                {options.map((option, index) => (
                  <option key={index} value={option} />
                ))}
              </datalist>
            </Box>
           
          </Grid>

          <Grid item xs={6} sx={{ pr: { xs: 0, md: 2 } }}>
          <Box >
              <label htmlFor="shopOwner" style={{ fontWeight: '600' }}>
                Shop Owner <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
              </label>
              <input
                type="text"
                id="shopOwner"
                placeholder="Owner Name"
                className="form_input"
                value={formData.shopOwner}
                onChange={handleChange}
              />
            </Box>
            
            <Box mt={1}>
              <label htmlFor="mobileNumber" style={{ fontWeight: '600' }}>
                Mobile Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
              </label>
              <input
                type="text"
                id="mobileNumber"
                placeholder="03000000000"
                className="form_input"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </Box>
            <Box >
              <label htmlFor="registrationDate" style={{ fontWeight: '600' }}>
                Registration Date <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
              </label>
              <input
                type="date"
                id="registrationDate"
                className="form_input"
                value={formData.registrationDate}
                onChange={handleChange}
              />
            </Box>
            <Box mt={1}>
              <label htmlFor="maintainanceCharges" style={{ fontWeight: '600' }}>
                Maintainance Charge's <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
              </label>
              <input
                type="number"
                id="ShopRent"
                className="form_input"
                value={formData.ShopRent}
                onChange={handleChange}
              />
            </Box>
           
          </Grid>
        </Grid>
        <Box mt={2} pr={2}>
          <Button type="submit" sx={{ width: '100%', height: '35px' }} onClick={handleInputData}>
            {isLoading ? 'Adding...' : 'Add New'}
            {/* Add New */}
          </Button>
        </Box>
      </form>
      <ToastContainer />
    </Box>
  );
};

export default AddRentShop;