import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Box, Typography, Grid, Divider, Card, CardContent, CardActions } from '@mui/material';
import { faBackward, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactToPrint from 'react-to-print';
import { useGetRentShopByIdQuery, useUpdateShopMutation, useUpdateRentMutation } from '../../Features/API/Api';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UpdateRentShop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let [isPageRefreshed, setIsPageRefreshed] = useState(false);

  useEffect(() => {
    if (isPageRefreshed === true) {
      setIsPageRefreshed(false);
    }
  }, [isPageRefreshed]);


  const { data: shop, isLoading, isError, refetch } = useGetRentShopByIdQuery(id);
  const [updateShop, { isLoading: isUpdatingShop }] = useUpdateShopMutation();
  const [updateRent, { isLoading: isUpdatingRent }] = useUpdateRentMutation();
  const componentRef = useRef();
  const [paidAmount, setPaidAmount] = useState(0);
  const [rentPaidDate, setRentPaidDate] = useState('');
  
  const paidMonths=[]

 
   
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

  const [registrationMonth,setRegistrationMonth]=useState('')
  const [registrationYear, setRegistrationYear] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  
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
      console.log(shop);
      
      
    }
console.log("months array"+paidMonths);

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
      alert("Please Add the rent.");
    }
    
    
    if(shop.shop.shop_remaining_rent==0){
        alert("There Is No Remaining Rent, Can't Update Rent")
    }
    
    if (rentPaidDate === '') {
      alert("Please select a rent paid date.");
      return;
    }
    else if(paidAmount.toString()!==shop.shop.Monthly_rent&&paidAmount.toString()!==shop.shop.shop_remaining_rent){
        alert("Please Pay A Single Month Rent Or Complete Remaining Rent");
        return;
      }
    
    else {
      let updatedRentDate = rentPaidDate;


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
  
  
  

  if(shop){

    

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const monthsInNumbers = [ ];
    const allMonthsPaidDate=new Date(shop.shop.zero_remaining_rent_date);
    const zero_remaining_rent_month=allMonthsPaidDate.getMonth();
    shop.shop.rent.map((item)=>{
      const rentPaidDateString = item.rent_paid_date
  
  const rentPaidDate = new Date(rentPaidDateString);
  const month = rentPaidDate.getMonth() + 1; 
    console.log('actual output'+ ""+month);
  
  console.log(monthsInNumbers);  
    if (month >= 1 && month <= 12) {
      paidMonths.push(months[month - 1]);
      monthsInNumbers.push(month-1);
      
    }

      
  
 
  
    })

    if (shop.shop.shop_remaining_rent==0||paidMonths.length>0){
      for (let i = monthsInNumbers[0]; i <=  zero_remaining_rent_month; i++) {
        // Perform your desired operations on each number (i)
        // Example: Print the square of each number
        
          paidMonths.push(months[i ]);

        
      } }
   

   
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
                  <Typography variant="body1" color="initial" fontWeight={600} fontSize={20} ml={1}>
                    {Number(shop.shop.shop_remaining_rent)===0?Number(shop.shop.ShopRent) + Number(shop.shop.shop_remaining_rent):Number(shop.shop.shop_remaining_rent)}
                    
                  </Typography>
                </Box>
              </Box>
              <Divider variant="middle" orientation="horizontal" sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box width="60%">
                  <Typography variant="body1" color="initial" fontWeight={600} mt={1.4}>
                    Charges Paid Date
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
                  Remaining Charges
                </Typography>
                <Typography variant="body1" color="initial" fontSize={20}>
                {Number(shop.shop.shop_remaining_rent)===0?Number(shop.shop.ShopRent) + Number(shop.shop.shop_remaining_rent):Number(shop.shop.shop_remaining_rent)}
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
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">January</TableCell>
            <TableCell align="right">February</TableCell>
            <TableCell align="right">March</TableCell>
            <TableCell align="right">April</TableCell>
            <TableCell align="right">May</TableCell>
            <TableCell align="right">June</TableCell>
            <TableCell align="right">July</TableCell>
            <TableCell align="right">August</TableCell>
            <TableCell align="right">September</TableCell>
            <TableCell align="right">October</TableCell>
            <TableCell align="right">November</TableCell>
            <TableCell align="right">December</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
          
          <TableCell align="right">{paidMonths.includes('January')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          <TableCell align="right">{paidMonths.includes('February')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          <TableCell align="right">{paidMonths.includes('March')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          <TableCell align="right">{paidMonths.includes('April')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          <TableCell align="right">{paidMonths.includes('May')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          <TableCell align="right">{paidMonths.includes('June')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          <TableCell align="right">{paidMonths.includes('July')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          <TableCell align="right">{paidMonths.includes('August')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          <TableCell align="right">{paidMonths.includes('September')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          <TableCell align="right">{paidMonths.includes('October')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          <TableCell align="right">{paidMonths.includes('November')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          <TableCell align="right">{paidMonths.includes('December')?<Typography className='PaidStatus'>Paid</Typography>:<Typography className='UnpaidStatus'>Unpaid</Typography>}</TableCell>
          </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
    {
  
}

{paidMonths.length<=0?<Typography>No Values</ Typography>: 
  <Typography>Has Values</Typography>
}
    </div>
  );
};

export default UpdateRentShop;