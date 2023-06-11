import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Box, Typography, Grid, Divider, Card, CardContent, CardActions } from '@mui/material';
import { faBackward, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactToPrint from 'react-to-print';
import { useGetShopByIdQuery, useUpdateShopMutation, useUpdateRentMutation } from '../../Features/API/Api';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Update_Rent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let [isPageRefreshed, setIsPageRefreshed] = useState(false);

  useEffect(() => {
    if (isPageRefreshed === true) {
      setIsPageRefreshed(false);
    }
  }, [isPageRefreshed]);


  const { data: shop, isLoading, isError, refetch } = useGetShopByIdQuery(id);
  const [updateShop, { isLoading: isUpdatingShop }] = useUpdateShopMutation();
  const [updateRent, { isLoading: isUpdatingRent }] = useUpdateRentMutation();
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

  const handleUpdateData = async () => {
    const {
      shopNumber,
      shopOwner,
      registrationDate,
      shopSize,
      mobileNumber,
      shopRental,
      floorNo,
      ShopRent,
    } = formData.shop;
    const updatedShopData = {
      shopNumber,
      shopOwner,
      registrationDate,
      shopSize,
      mobileNumber,
      shopRental,
      floorNo,
      ShopRent,
    };

    const res = await updateShop({ shopId: id, updatedShopData });
    if (res) {
      console.log(res);
      window.location.reload();
    }
  };


  //Rent update API
  const handleUpdateRent = async () => {
    if (paidAmount === 0) {
      alert("Please update the rent.");
    } else {
      let updatedRentDate = rentPaidDate;

      if (rentPaidDate === '') {
        alert("Please select a rent paid date.");
        return;
      }

      const res = await updateRent({ shopId: id, date: updatedRentDate, paidRent: paidAmount });

      if (res) {
        alert(res.data.message);
        window.location.reload();
      }

      if (res.error && res.error.status === 400) {
        alert("Price is not correct.");
      }
    }
  }

  if (isError) {
    return (
      <div>
        <Typography variant="h5" color="initial" textAlign="center">
          Error fetching shop
        </Typography>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <Typography variant="h5" color="initial" textAlign="center">
          Loading shop...
        </Typography>
      </div>
    );
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
    <div>
      {shop && (
        <Box mr={2}>
          <Box display="flex" justifyContent="space-between" py={2}>
            <h2>
              Shop No:<span style={{ color: '#FF8E53' }}> {shop.shop.shopNumber}</span>
            </h2>
            <Button onClick={goBack}>
              <FontAwesomeIcon icon={faBackward} /> <span style={{ marginLeft: '7px' }}>Go Back</span>
            </Button>
          </Box>
        </Box>
      )}
      <Grid container spacing={4} pr={2}>
        <Grid item xs={8} className="Right">
          {shop && (
            <Box>
              <Typography variant="h4" color="initial" fontWeight={600} textAlign="center">
                Invoice Bill
              </Typography>
              <Divider variant="middle" orientation="horizontal" sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box width="60%">
                  <Typography variant="body1" color="initial" fontWeight={600}>
                    Shop No
                  </Typography>
                  <Typography variant="body1" color="initial" fontWeight={600}>
                    Shop Rental
                  </Typography>
                  <Typography variant="body1" color="initial" fontWeight={600}>
                    Floor No
                  </Typography>
                  <Typography variant="body1" color="initial" fontWeight={600}>
                    Rent Paid Date
                  </Typography>
                </Box>
                <Box width="30%">
                  <Typography variant="body1" color="initial" fontWeight={600}>
                    {shop.shop.shopNumber}
                  </Typography>
                  <Typography variant="body1" color="initial" fontWeight={600}>
                    {shop.shop.shopRental}
                  </Typography>
                  <Typography variant="body1" color="initial" fontWeight={600}>
                    {shop.shop.floorNo}
                  </Typography>
                  <Typography variant="body1" color="initial" fontWeight={600}>
                    {rentPaidDate}
                  </Typography>
                </Box>
              </Box>
              <Divider variant="middle" orientation="horizontal" sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box width="60%">
                  <Typography variant="body1" color="initial" fontWeight={600}>
                    Paid Amount
                  </Typography>
                  <Typography variant="body1" color="initial" fontWeight={600} mt={1.5}>
                    Remaining Rent
                  </Typography>
                </Box>
                <Box width="30%">
                  <input type="number" onChange={handlePaidAmountChange} value={paidAmount} className='input' />
                  <Typography variant="body1" color="initial" fontWeight={600} fontSize={20} ml={1.1}>
                    {Number(shop.shop.ShopRent) + Number(shop.shop.shop_remaining_rent)}
                  </Typography>
                </Box>
              </Box>
              <Divider variant="middle" orientation="horizontal" sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box width="60%">
                  <Typography variant="body1" color="initial" fontWeight={600} mt={1.4}>
                    Rent Paid Date
                  </Typography>
                </Box>
                <Box width="30%">
                  <input type="date" onChange={handleRentPaidDateChange} value={rentPaidDate} className='input' />
                </Box>
              </Box>
              <Divider variant="middle" orientation="horizontal" sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" onClick={handleUpdateRent} disabled={isUpdatingRent}>
                  Update Rent
                </Button>
              </Box>
            </Box>
          )}
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minHeight: '200px', position: 'relative' }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body1" color="initial">
                  Remaining Rent
                </Typography>
                <Typography variant="body1" color="initial" fontSize={20}>
                  {Number(shop.shop.ShopRent) + Number(shop.shop.shop_remaining_rent)}
                </Typography>
              </Box>
              <Box mt={2} sx={{ maxHeight: "300px", minHeight: "200px", overflow: "scroll" }}>
                <Typography variant="h6">Charge's History:</Typography>
                {[...shop.shop.rent]
                  .sort((a, b) => new Date(b.rent_paid_date) - new Date(a.rent_paid_date))
                  .map((rent, index) => (
                    <Box key={index}>
                      <Typography variant="body1">
                        Date: {new Date(rent.rent_paid_date).toLocaleDateString()} Paid Rent: {rent.rent_paid_amount}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default Update_Rent;