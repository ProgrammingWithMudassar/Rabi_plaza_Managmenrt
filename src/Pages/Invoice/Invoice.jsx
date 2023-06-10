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
  const dueDate = new Date(today.getFullYear(), today.getMonth(), 10);
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

              <Grid item xs={9} sx={{ height: '10rem' }}>
                <Typography variant="h4" fontWeight={600} sx={{ width: '100%', color: '#733dd9' }}>Invoice</Typography>
                <Box display="flex">
                  <Box sx={{ display: 'inline-block', width: '130px' }}>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1 }}>Invoice# </Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1 }}>Invoice Date </Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1 }}>Due Date</Typography>
                  </Box>
                  <Box className="right_text">
                    <Typography variant="body1" color="#606060" sx={{ mb: 1, fontWeight: 600 }}>#001 </Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1, fontWeight: 600 }}> {new Date().toLocaleDateString('en-US', options)} </Typography>
                    <Typography variant="body1" color="#606060" sx={{ mb: 1, fontWeight: 600 }}>{dueDate.toLocaleDateString('en-US', options)}</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={3} sx={{ height: '10rem' }}>
                <img src={logo} alt="" style={{ opacity: '0.6' }} />
              </Grid>
            </Grid>


            <Stack direction='row' gap={4}>
              <Box sx={{ width: '48%', backgroundColor: 'rgba(164, 189, 255, 0.3)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" fontWeight={600} sx={{ width: '100%', color: '#733dd9', display: 'block' }}>Billed by</Typography>
                <Box display='flex'>
                  <Box sx={{ display: 'inline-block', width: '130px', mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, wordSpacing: '7px' }}>Invoice# </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Invoice Date </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Due Date</Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>#001 </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}> {new Date().toLocaleDateString('en-US', options)} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>{dueDate.toLocaleDateString('en-US', options)}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ width: '48%', backgroundColor: 'rgba(164, 189, 255, 0.3)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" fontWeight={600} sx={{ width: '100%', color: '#733dd9', display: 'block' }}>Billed to</Typography>
                <Box display='flex'>
                  <Box sx={{ display: 'inline-block', width: '130px', mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1, wordSpacing: '7px' }}>Shop No# </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Floor No# </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Rental Name</Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>Shop Owner</Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>{shop.shop.shopNumber} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>{shop.shop.floorNo} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>{shop.shop.shopRental} </Typography>
                    <Typography variant="body1" color="#000" sx={{ mb: 1 }}>{shop.shop.shopOwner} </Typography>
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
              <Box width='50%'>
                <Typography variant="h6" color="#733dd9">Terms and Condition</Typography>
                <Box sx={{pl:4}}>
                <ul style={{listStyleType: "decimal"}}>
                  <li>If payment is not received within the specified 10-day period, a late payment fee of 100 will be applied.</li>
                  <li>The cash payment should be collected by customer.</li>
                </ul>
                </Box>
              </Box>
              <Box width='50%' sx={{ backgroundColor: 'rgba(164, 189, 255, 0.3)', px: 4, py: 2, borderRadius: '10px' }}>
                <Typography variant="h6" color="#733dd9" fontWeight={600}>Rent</Typography>
                <Box display='flex' >
                  <Box width='60%'>
                    <Typography variant="body1" color="initial" mt={1}>Remaining Charges</Typography>
                    <Typography variant="body1" color="initial" mb={1}>Month Charges</Typography>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    <Typography variant="h5" color="initial">Total</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="initial" mt={1}>adfa</Typography>
                    <Typography variant="body1" color="initial" mb={1}>{shop.shop.ShopRent}</Typography>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    <Typography variant="h5" color="#733dd9" fontWeight={600}>{shop.shop.ShopRent}</Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>

            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={6} spacing={4} >
                
              </Grid>
              <Grid item xs={6} spacing={4} >
                <Box sx={{ display: 'flex', }}>
                  <Typography variant="body1" color="initial" sx={{ width: "60%", py: 1.2, pl: 1 }}>After due date</Typography>
                  <Typography variant="body1" color="initial" sx={{  py: 1.2 }}><span style={{ marginLeft: '5px' }}>{parseInt(shop.shop.ShopRent) + 100}</span></Typography>
                </Box>
              </Grid>
            </Box>


            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={12} spacing={4} >
                <Box sx={{ display: 'flex', }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quibusdam, alias neque sed doloribus magnam voluptates a numquam consectetur nemo. Illo officia corrupti dolorum quasi ducimus consequuntur accusamus odit tenetur!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quibusdam, alias neque sed doloribus magnam voluptates a numquam consectetur nemo. Illo officia corrupti dolorum quasi ducimus consequuntur accusamus odit tenetur!
                </Box>
                <Box sx={{ borderTop: '2px dotted black', my: 2 }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quibusdam, alias neque sed doloribus magnam voluptates a numquam consectetur nemo.
                </Box>
              </Grid>
            </Box>

          </Box>
        </Box>
      )}
    </>
  )
}

export default Invoice