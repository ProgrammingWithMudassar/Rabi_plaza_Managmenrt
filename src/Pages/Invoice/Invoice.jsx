import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import { Button, Box, Typography, Grid, Stack, Divider } from '@mui/material';
import { faBackward, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../Assets/png/T_Logo.png'
import { useGetShopByIdQuery } from '../../Features/API/Api';
import { useParams } from 'react-router-dom';


const Invoice = () => {

  const { id } = useParams();
  const goBack = () => {
    window.history.go(-1);
  };
  const componentRef = useRef();

  const today = new Date();
  today.setMonth(today.getMonth() - 1);
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;


  const todays = new Date();
  const previousMonth = todays.getMonth() - 1;
  const dueDate = new Date(todays.getFullYear(), previousMonth, 10);
  const maxDaysInMonth = new Date(dueDate.getFullYear(), dueDate.getMonth() + 1, 0).getDate();
  if (dueDate.getDate() > maxDaysInMonth) {
    dueDate.setDate(maxDaysInMonth);
  }
  const options = { year: 'numeric', month: 'short', day: 'numeric' };



  const { data: shop, isLoading, isError, refetch } = useGetShopByIdQuery(id);

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
          <h2>Shop Rental:<span style={{ color: "#FF8E53" }}>sfdgs</span></h2>
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
        <Box ref={componentRef} className="BackgroundImg">
          <Box sx={{ p: 1, m: 1 }}>
            {/* header  */}
            <Grid container spacing={2}>
              <Grid item xs={3} sx={{ height: '10rem' }}>
                <img src={logo} alt="" style={{ opacity: '0.6' }} />
              </Grid>
              <Grid item xs={9} sx={{ height: '10rem' }}>

                <Box mt={4}>
                  <Typography textAlign='center' variant="h3" color="initial" ml={-20}>Rabi Sadar Plaza</Typography>
                  <Typography textAlign='center' variant="body1" color="#606060" ml={-20}>Adam G Road Saddar Rawalpindi</Typography>
                </Box>
              </Grid>


            </Grid>


            <Stack direction='row' gap={4}>
              <Box sx={{ width: '48%', backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" fontWeight={600} sx={{ width: '100%', color: '#733dd9', display: 'block' }}>Detail</Typography>
                <Box display="flex">
                  <Box sx={{ display: 'inline-block', width: '130px', mt: 2 }}>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1 }}>Invoice# </Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1 }}>Issued Date </Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1 }}>Due Date</Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1, fontWeight: 600 }}>#001 </Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1, fontWeight: 600 }}>{formattedDate}</Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1, fontWeight: 600 }}>{dueDate.toLocaleDateString('en-US', options)}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ width: '48%', backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" fontWeight={600} sx={{ width: '100%', color: '#733dd9', display: 'block' }}>Billed to</Typography>
                <Box display='flex'>
                  <Box sx={{ display: 'inline-block', width: '130px', mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Shop Owner</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Rental Name</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Floor No# </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, wordSpacing: '7px' }}>Shop No#</Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>{shop.shop.shopOwner} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>{shop.shop.shopRental} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>{shop.shop.floorNo} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>{shop.shop.shopNumber} </Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>


            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={12} spacing={4} >
                <Box sx={{ display: 'flex', borderRadius: "10px", overflow: 'hidden' }}>
                  <table style={{ borderCollapse: "collapse", width: '100%', borderRadius: '10px' }}>
                    <tr style={{ backgroundColor: '#733dd9', height: "40px", }}>
                      <td style={{ width: "60%" }}> <Typography variant="body1" color="#FFF" fontWeight={600} ml={2}>SR</Typography></td>
                      <td><Typography variant="body1" color="#FFF" >Description</Typography></td>
                    </tr>
                    <tr>
                      <td><Typography variant="body1" color="initial" ml={2}>1</Typography></td>
                      <td>security</td>
                    </tr>
                    <tr>
                      <td><Typography variant="body1" color="initial" ml={2}>2</Typography></td>
                      <td>cleaning</td>
                    </tr>
                    <tr>
                      <td><Typography variant="body1" color="initial" ml={2}>3</Typography></td>
                      <td>security camera's</td>
                    </tr>
                    <tr>
                      <td><Typography variant="body1" color="initial" ml={2}>4</Typography></td>
                      <td>water</td>
                    </tr>
                    <tr>
                      <td><Typography variant="body1" color="initial" ml={2}>5</Typography></td>
                      <td>generator</td>
                    </tr>
                    <tr>
                      <td><Typography variant="body1" color="initial" ml={2}>6</Typography></td>
                      <td>street light</td>
                    </tr>
                  </table>
                </Box>
              </Grid>
            </Box>


            <Stack direction="row" gap={4}>
              <Box width='50%' mt={7} display='flex' >
                <Typography variant="h5" color="initial">Signature: </Typography>
                <Box sx={{ borderTop: "2px solid black", width: "200px", mt: 4 }}> </Box>
              </Box>
              <Box width='50%' sx={{ backgroundColor: 'rgba(164, 189, 255, 0.2)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" color="#733dd9" fontWeight={600}>maintenance Charges</Typography>
                <Box display='flex' >
                  <Box width='60%'>
                    <Typography variant="body1" color="initial" mt={1}>Arrears</Typography>
                    <Typography variant="body1" color="initial" mb={1}>Month Charges</Typography>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    <Typography variant="h5" color="initial">Total</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="initial" mt={1}>{shop.shop.shop_remaining_rent}</Typography>
                    <Typography variant="body1" color="initial" mb={1}>{shop.shop.ShopRent}</Typography>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    <Typography variant="h5" color="#733dd9" fontWeight={600}>{Number(shop.shop.ShopRent) + Number(shop.shop.shop_remaining_rent)}</Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>

            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={12} spacing={4} >
                <Box >
                  <Typography variant="body1" color="initial" textAlign='right'>
                    تمام معزز صاحبان کو مطلع کیا جاتا ہے کہمینٹیننس بل کو ہیڈ آفس رابی پلازہ میں مقررہ تاریخ سے قبل ادا کرنا ضروری ہے۔ بصورت دیگر بل تاخیر سے جمع کروانے پر جرمانہ عائد کیا جائے گا، لہذا کسی بھی قسم کی پر یشانی سے بچنے کیلئے اپنے واجبات وقت پر ادا کریں۔
                  </Typography>
                  <Typography variant="body1" color="initial" textAlign='right'>
                    واضح رہے کہ مینٹیننس چارجز میں بجلی کے کسی بھی قسم چارجز شامل نہیں ہیں۔
                  </Typography>
                </Box>
                <Box sx={{ my: 2 }}>
                  This is computer generated bill and does not require any signature. Any discrepancy is subject to adjustment.
                </Box>
              </Grid>
            </Box>

            {/* Owner Bill  */}
            <Box sx={{ borderTop: '2px dotted black', width: '100%' }}>
              <Typography textAlign='center' variant="h5" color="initial" ml={-20}>Rabi Sadar Plaza</Typography>
              <Box sx={{ px: 4, py: 0.2, borderRadius: '10px', gap: 2 }} display="flex">

                <Box sx={{ width: '40%', display: 'flex' }}>
                  <Box sx={{ display: 'inline-block', width: '130px' }}>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1 }}>Invoice# </Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1 }}>Issued Date </Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1 }}>Due Date</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1, fontWeight: 600 }}>#001 </Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1, fontWeight: 600 }}>{formattedDate}</Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1, fontWeight: 600 }}>{dueDate.toLocaleDateString('en-US', options)}</Typography>
                  </Box>
                </Box>

                <Box sx={{ width: '35%', display: 'flex' }}>
                  <Box sx={{ display: 'inline-block', width: '130px' }}>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1 }}>Arrears </Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1 }}>Total</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1, fontWeight: 600 }}>{shop.shop.shop_remaining_rent}</Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1, fontWeight: 600 }}>{Number(shop.shop.ShopRent) + Number(shop.shop.shop_remaining_rent)}</Typography>
                  </Box>
                </Box>
                <Box  mt={2} display='flex' >
                  <Typography variant="h6" color="initial">Signature: </Typography>
                  <Box sx={{ borderTop: "2px solid black", width: "100px", mt: 4 }}> </Box>
                </Box>
                <Box>

                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}

export default Invoice