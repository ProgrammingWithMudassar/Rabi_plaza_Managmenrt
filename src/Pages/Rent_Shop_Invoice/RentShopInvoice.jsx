import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import { Button, Box, Typography, Grid, Stack, Divider } from '@mui/material';
import { faBackward, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../Assets/png/T_Logo.png'
import { useGetRentShopByIdQuery } from '../../Features/API/Api';
import { useParams } from 'react-router-dom';


const RentShopInvoice = () => {

  const { id } = useParams();
  const goBack = () => {
    window.history.go(-1);
  };
  const componentRef = useRef();


  const today = new Date();
  let previousMonthIndex  = today.getMonth() - 1;
  const previousMonthDate = new Date(today.getFullYear(), previousMonthIndex, today.getDate());

  
  const dueDate = new Date(today.getFullYear(), today.getMonth(), 10);
  const maxDaysInMonth = new Date(dueDate.getFullYear(), dueDate.getMonth() + 1, 0).getDate();
  if (dueDate.getDate() > maxDaysInMonth) {
    dueDate.setDate(maxDaysInMonth);
  }
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const option = { year: 'numeric', month: 'long' };
  const previousMonthFormatted = previousMonthDate.toLocaleDateString('en-US', option);



  const { data: shop, isLoading, isError, refetch } = useGetRentShopByIdQuery(id);

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
    <>
      <Box mr={2}>
        <Box display='flex' justifyContent='space-between' py={1}>
          <h2>Shop Rental:<span style={{ color: "#FF8E53" }}>{shop.shop.shopRental}</span></h2>
          <Box>
            <ReactToPrint
              trigger={() => <Button sx={{ mr: 2 }}><FontAwesomeIcon icon={faFileInvoice} /><span style={{ marginLeft: "7px" }}> Generate Bill</span></Button>}
              content={() => componentRef.current}
            />
            <Button onClick={goBack}>  <FontAwesomeIcon icon={faBackward} /> <span style={{ marginLeft: "7px" }}> Go Back</span></Button>
          </Box>
        </Box>
      </Box>

      {shop && (
        <Box  className="BackgroundImg">
          <Box sx={{ p: 1, m: 1 }}>
            {/* header  */}
            <Grid container spacing={2}>
              <Grid item xs={3} sx={{ height: '10rem' }}>
                <img src={logo} alt="" style={{ opacity: '0.6' }} />
              </Grid>
              <Grid item xs={9} sx={{ height: '10rem' }}>

                <Box >
                  <Typography textAlign='center' variant="h3" color="initial" ml={-20}>Rabi Sadar</Typography>
                  <Typography textAlign='center' variant="body1" color="#606060" ml={-20}>Adam Jee Road Saddar, Rawalpindi</Typography>
                  <Typography textAlign='center' variant="h4" color="#606060" ml={-20}>Maintenance Bill</Typography>
                </Box>
              </Grid>


            </Grid>


            <Stack direction='row' gap={4}>
              <Box sx={{ width: '48%', backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" fontWeight={600} sx={{ width: '100%', color: '#733dd9', display: 'block' }}>Detail</Typography>
                <Box display="flex">
                  <Box sx={{ display: 'inline-block', width: '130px', mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Invoice# </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Billing Month</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Issued Date </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Due Date</Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>#001 </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{previousMonthFormatted}</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{new Date().toLocaleDateString('en-US', options)}</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{dueDate.toLocaleDateString('en-US', options)}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ width: '48%', backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" fontWeight={600} sx={{ width: '100%', color: '#733dd9', display: 'block' }}>Billed for</Typography>
                <Box display='flex'>
                  <Box sx={{ display: 'inline-block', width: '130px', mt: 2 }}>
                  <Typography variant="body1" color="#000" sx={{ mb: 1, wordSpacing: '7px' }}>Shop No#</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Rental Name</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Floor No# </Typography>
                    
                  </Box>
                  <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{shop.shop.shopNumber} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{shop.shop.shopRental} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{shop.shop.floorNo} </Typography>
                    
                  </Box>
                </Box>
              </Box>
            </Stack>


            


            <Stack direction="row" gap={4} marginTop={5}>
              <Box width='50%' mt={11} display='flex' >
                <Typography variant="h5" color="initial">Signature: </Typography>
                <Box sx={{ borderTop: "2px solid black", width: "200px", mt: 4 }}> </Box>
              </Box>
              <Box width='50%' sx={{ backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" color="#733dd9" fontWeight={600}>Maintenance Charges</Typography>
                <Box display='flex' >
                  <Box width='60%'>
                    <Typography variant="body1" color="initial" mt={1}>Arrears</Typography>
                    <Typography variant="body1" color="initial" mb={1}>Month Rent</Typography>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    <Typography variant="h5" color="initial">Total</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="initial" mt={1}>{shop.shop.shop_remaining_rent}</Typography>
                    <Typography variant="body1" color="initial" mb={1}>{shop.shop.Monthly_rent}</Typography>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    <Typography variant="h5" color="#733dd9" fontWeight={600}>{Number(shop.shop.Monthly_rent) + Number(shop.shop.shop_remaining_rent)}</Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>

            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={12} spacing={4} >
                <Box >
                  <Typography variant="body1" color="initial" textAlign='right'>
                    تمام معزز صاحبان کو مطلع کیا جاتا ہے کہمینٹیننس بل کو رابی افس میں مقررہ تاریخ سے قبل ادا کرنا ضروری ہے۔ بصورت دیگر بل تاخیر سے جمع کروانے پر 100 جرمانہ عائد کیا جائے گا، لہذا کسی بھی قسم کی پر یشانی سے بچنے کیلئے اپنے واجبات وقت پر ادا کریں۔
                  </Typography>
                  <Typography variant="body1" color="initial" textAlign='right'>
                    واضح رہے کہ مینٹیننس چارجز میں بجلی کے کسی بھی قسم کے چارجز شامل نہیں ہیں۔
                  </Typography>
                </Box>
                
              </Grid>
            </Box>

           
          </Box>
        </Box>
      )}
       {shop && (
        
        <Box  ref={componentRef} sx={{display:'flex', flexDirection:'row' , transform: 'rotate(90deg)' , height:'100%', }}>
        <Box  className="BackgroundImg">
          <Box sx={{ p: 1, ml: 45 ,width:'90vw' }}>
            {/* header  */}
            <Grid container spacing={2}>
              <Grid item xs={3} sx={{ height: '10rem' }}>
                <img src={logo} alt="" style={{ opacity: '0.6' }} />
              </Grid>
              <Grid item xs={9} sx={{ height: '10rem' }}>

                <Box >
                  <Typography textAlign='center' variant="h3" color="initial" ml={-20}>Rabi Sadar</Typography>
                  <Typography textAlign='center' variant="body1" color="#606060" ml={-20}>Adam Jee Road Saddar, Rawalpindi</Typography>
                  <Typography textAlign='center' variant="h4" color="#606060" ml={-20}>Maintenance Bill</Typography>
                </Box>
              </Grid>


            </Grid>


            <Stack direction='row' gap={4}>
              <Box sx={{ width: '48%', backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" fontWeight={600} sx={{ width: '100%', color: '#733dd9', display: 'block' }}>Detail</Typography>
                <Box display="flex">
                  <Box sx={{ display: 'inline-block', width: '130px', mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Invoice# </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Billing Month</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Issued Date </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Due Date</Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>#001 </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{previousMonthFormatted}</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{new Date().toLocaleDateString('en-US', options)}</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{dueDate.toLocaleDateString('en-US', options)}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ width: '48%', backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" fontWeight={600} sx={{ width: '100%', color: '#733dd9', display: 'block' }}>Billed for</Typography>
                <Box display='flex'>
                  <Box sx={{ display: 'inline-block', width: '130px', mt: 2 }}>
                  <Typography variant="body1" color="#000" sx={{ mb: 1, wordSpacing: '7px' }}>Shop No#</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Rental Name</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Floor No# </Typography>
                    
                  </Box>
                  <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{shop.shop.shopNumber} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{shop.shop.shopRental} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{shop.shop.floorNo} </Typography>
                    
                  </Box>
                </Box>
              </Box>
            </Stack>


            


            <Stack direction="row" gap={4} marginTop={5}>
              <Box width='50%' mt={11} display='flex' >
                <Typography variant="h5" color="initial">Signature: </Typography>
                <Box sx={{ borderTop: "2px solid black", width: "200px", mt: 4 }}> </Box>
              </Box>
              <Box width='50%' sx={{ backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" color="#733dd9" fontWeight={600}>Maintenance Charges</Typography>
                <Box display='flex' >
                  <Box width='60%'>
                    <Typography variant="body1" color="initial" mt={1}>Arrears</Typography>
                    <Typography variant="body1" color="initial" mb={1}>Month Rent</Typography>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    <Typography variant="h5" color="initial">Total</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="initial" mt={1}>{shop.shop.shop_remaining_rent}</Typography>
                    <Typography variant="body1" color="initial" mb={1}>{shop.shop.Monthly_rent}</Typography>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    <Typography variant="h5" color="#733dd9" fontWeight={600}>{Number(shop.shop.Monthly_rent) + Number(shop.shop.shop_remaining_rent)}</Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>

            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={12} spacing={4} >
                <Box >
                  <Typography variant="body1" color="initial" textAlign='right'>
                    تمام معزز صاحبان کو مطلع کیا جاتا ہے کہمینٹیننس بل کو رابی افس میں مقررہ تاریخ سے قبل ادا کرنا ضروری ہے۔ بصورت دیگر بل تاخیر سے جمع کروانے پر 100 جرمانہ عائد کیا جائے گا، لہذا کسی بھی قسم کی پر یشانی سے بچنے کیلئے اپنے واجبات وقت پر ادا کریں۔
                  </Typography>
                  <Typography variant="body1" color="initial" textAlign='right'>
                    واضح رہے کہ مینٹیننس چارجز میں بجلی کے کسی بھی قسم کے چارجز شامل نہیں ہیں۔
                  </Typography>
                </Box>
                
              </Grid>
            </Box>

         
          </Box>
        </Box>
        <Box  className="BackgroundImg">
          <Box sx={{ p: 1, ml: 10,width:'90vw' }}>
            {/* header  */}
            <Grid container spacing={2}>
              <Grid item xs={3} sx={{ height: '10rem' }}>
                <img src={logo} alt="" style={{ opacity: '0.6' }} />
              </Grid>
              <Grid item xs={9} sx={{ height: '10rem' }}>

                <Box >
                  <Typography textAlign='center' variant="h3" color="initial" ml={-20}>Rabi Sadar</Typography>
                  <Typography textAlign='center' variant="body1" color="#606060" ml={-20}>Adam Jee Road Saddar, Rawalpindi</Typography>
                  <Typography textAlign='center' variant="h4" color="#606060" ml={-20}>Maintenance Bill</Typography>
                </Box>
              </Grid>


            </Grid>


            <Stack direction='row' gap={4}>
              <Box sx={{ width: '48%', backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" fontWeight={600} sx={{ width: '100%', color: '#733dd9', display: 'block' }}>Detail</Typography>
                <Box display="flex">
                  <Box sx={{ display: 'inline-block', width: '130px', mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Invoice# </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Billing Month</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Issued Date </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Due Date</Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>#001 </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{previousMonthFormatted}</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{new Date().toLocaleDateString('en-US', options)}</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{dueDate.toLocaleDateString('en-US', options)}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ width: '48%', backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" fontWeight={600} sx={{ width: '100%', color: '#733dd9', display: 'block' }}>Billed for</Typography>
                <Box display='flex'>
                  <Box sx={{ display: 'inline-block', width: '130px', mt: 2 }}>
                  <Typography variant="body1" color="#000" sx={{ mb: 1, wordSpacing: '7px' }}>Shop No#</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Rental Name</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Floor No# </Typography>
                    
                  </Box>
                  <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{shop.shop.shopNumber} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{shop.shop.shopRental} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, fontWeight: 600 }}>{shop.shop.floorNo} </Typography>
                    
                  </Box>
                </Box>
              </Box>
            </Stack>


        


            <Stack direction="row" gap={4} marginTop={5}>
              <Box width='50%' mt={11} display='flex' >
                <Typography variant="h5" color="initial">Signature: </Typography>
                <Box sx={{ borderTop: "2px solid black", width: "200px", mt: 4 }}> </Box>
              </Box>
              <Box width='50%' sx={{ backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" color="#733dd9" fontWeight={600}>Maintenance Charges</Typography>
                <Box display='flex' >
                  <Box width='60%'>
                    <Typography variant="body1" color="initial" mt={1}>Arrears</Typography>
                    <Typography variant="body1" color="initial" mb={1}>Month Rent</Typography>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    <Typography variant="h5" color="initial">Total</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="initial" mt={1}>{shop.shop.shop_remaining_rent}</Typography>
                    <Typography variant="body1" color="initial" mb={1}>{shop.shop.Monthly_rent}</Typography>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    <Typography variant="h5" color="#733dd9" fontWeight={600}>{Number(shop.shop.Monthly_rent) + Number(shop.shop.shop_remaining_rent)}</Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>

            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={12} spacing={4} >
                <Box >
                  <Typography variant="body1" color="initial" textAlign='right'>
                    تمام معزز صاحبان کو مطلع کیا جاتا ہے کہمینٹیننس بل کو رابی افس میں مقررہ تاریخ سے قبل ادا کرنا ضروری ہے۔ بصورت دیگر بل تاخیر سے جمع کروانے پر 100 جرمانہ عائد کیا جائے گا، لہذا کسی بھی قسم کی پر یشانی سے بچنے کیلئے اپنے واجبات وقت پر ادا کریں۔
                  </Typography>
                  <Typography variant="body1" color="initial" textAlign='right'>
                    واضح رہے کہ مینٹیننس چارجز میں بجلی کے کسی بھی قسم کے چارجز شامل نہیں ہیں۔
                  </Typography>
                </Box>
                
              </Grid>
            </Box>

        
          </Box>
        </Box>
        </Box>
        
      )}
    </>
  )
}

export default RentShopInvoice