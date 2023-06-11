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
    Monthly_rent: '',
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
          Monthly_rent: shop.shop.Monthly_rent,
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
      shopNumber,
      shopOwner,
      registrationDate,
      shopSize,
      mobileNumber,
      shopRental,
      floorNo,
      Monthly_rent,
    } = formData.shop;
    const updatedShopData = {
      shopNumber,
      shopOwner,
      registrationDate,
      shopSize,
      mobileNumber,
      shopRental,
      floorNo,
      Monthly_rent,
    };
    const res = updateShop({ shopId: id, updatedShopData });
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
        <Box mr={2}>
          <Box display="flex" justifyContent="space-between" py={2}>
            <h2>
              Shop Rental:
              <span style={{ color: '#FF8E53' }}> {shop.shop.shopRental}</span>
            </h2>
            <Box>
              <Button onClick={goBack}>
                <FontAwesomeIcon icon={faBackward} />
                <span style={{ marginLeft: '7px' }}> Go Back</span>
              </Button>
            </Box>
          </Box>
          <Box mt={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <label htmlFor="shopNumber" style={{ fontWeight: '600' }}>
                  Shop Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
                </label>
                <input
                  defaultValue={shop.shop.shopNumber}
                  type="text"
                  id="shopNumber"
                  placeholder="#1234"
                  className="form_input"
                  onChange={handleInputChange}
                />
                <br />
                <Box mt={1}>
                  <label htmlFor="shopOwner" style={{ fontWeight: '600' }}>
                    Shop Owner <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
                  </label>
                  <input
                    defaultValue={shop.shop.shopOwner}
                    type="text"
                    id="shopOwner"
                    placeholder="Owner Name"
                    className="form_input"
                    onChange={handleInputChange}
                  />
                  <br />
                </Box>
                <Box mt={1}>
                  <label htmlFor="registrationDate" style={{ fontWeight: '600' }}>
                    Registration Date <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
                  </label>
                  <input
                    defaultValue={shop.shop.registrationDate}
                    type="date"
                    id="registrationDate"
                    placeholder="Owner Name"
                    className="form_input"
                    onChange={handleInputChange}
                  />
                  <br />
                </Box>
                <Box mt={1}>
                  <label htmlFor="Monthly_rent" style={{ fontWeight: '600' }}>
                    Monthly_rent{' '}
                    <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
                  </label>
                  <input
                    defaultValue={shop.shop.Monthly_rent}
                    type="number"
                    id="Monthly_rent"
                    placeholder="Remaining Rent"
                    className="form_input"
                    onChange={handleInputChange}
                  />
                  <br />
                </Box>
              </Grid>

              <Grid item xs={6} sx={{ pr: { xs: 0, md: 2 } }}>
                <label htmlFor="shopSize" style={{ fontWeight: '600' }}>
                  Shop Size <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
                </label>
                <input
                  defaultValue={shop.shop.shopSize}
                  type="text"
                  id="shopSize"
                  placeholder="Shop Size"
                  className="form_input"
                  onChange={handleInputChange}
                />
                <br />
                <Box mt={1}>
                  <label htmlFor="mobileNumber" style={{ fontWeight: '600' }}>
                    Mobile Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
                  </label>
                  <input
                    defaultValue={shop.shop.mobileNumber}
                    type="text"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                    className="form_input"
                    onChange={handleInputChange}
                  />
                  <br />
                </Box>
                <Box mt={1}>
                  <label htmlFor="shopRental" style={{ fontWeight: '600' }}>
                    Shop Rental <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
                  </label>
                  <input
                    defaultValue={shop.shop.shopRental}
                    type="text"
                    id="shopRental"
                    placeholder="Shop Rental"
                    className="form_input"
                    onChange={handleInputChange}
                  />
                  <br />
                </Box>
                <Box mt={1}>
                  <label htmlFor="floorNo" style={{ fontWeight: '600' }}>
                    Floor No <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span>
                  </label>
                  <input
                    defaultValue={shop.shop.floorNo}
                    type="number"
                    id="floorNo"
                    placeholder="Floor Number"
                    className="form_input"
                    onChange={handleInputChange}
                  />
                  <br />
                </Box>
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button variant="contained" onClick={handleUpdateData}>
                Save Changes
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Edit_Shop;