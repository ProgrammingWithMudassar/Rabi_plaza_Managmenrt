import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import { Button, Box, Typography, Grid, Divider } from '@mui/material';
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
        <Box display='flex' justifyContent='space-between' py={2}>
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
        <Box ref={componentRef}>
          <Box sx={{ p: 2, border: '1px solid black', m: 1 }}>
            {/* header  */}
            <Grid container spacing={2}>
              {/* header left  */}
              <Grid item xs={3} sx={{ borderBottom: '1px solid black', height: '10rem' }}>
                <img src={logo} alt="" />
              </Grid>
              {/* header right  */}
              <Grid item xs={9} sx={{ borderLeft: '1px solid black', borderBottom: '1px solid black', height: '10rem' }}>
                <Typography variant="h5" color="initial" textAlign='center' fontWeight={600} sx={{ width: '100%' }}>Rabi plaza Center</Typography>
                <Divider variant="fullWidth" orientation="horizontal" />
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body1" color="#606060" textAlign='center' sx={{ mb: 1, wordSpacing: '7px' }}>Rabi plaza Center,Street No# 2, Sadar, <br />Rawalpindi</Typography>
                  <Divider variant="fullWidth" orientation="horizontal" />
                </Box>
                <Typography variant="h4" color="#606060" textAlign='center' fontWeight={600} sx={{ mb: 1, wordSpacing: '7px', opacity: '0.8' }}>Monthly Maintenance Bill</Typography>
              </Grid>
            </Grid>

            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={4} spacing={4} >
                <Box sx={{ border: '1px solid black', display: 'flex', }}>
                  <Typography variant="body1" color="initial" sx={{ width: "49%", py: 1.2, pl: 1 }}>Serial No#</Typography>
                  <Typography variant="body1" color="initial" sx={{ borderLeft: '1px solid black', py: 1.2 }}> <span style={{ marginLeft: '5px' }}>01110000</span></Typography>
                </Box>
              </Grid>
              <Grid item xs={4} spacing={4} >
                <Box sx={{ border: '1px solid black', display: 'flex', }}>
                  <Typography variant="body1" color="initial" sx={{ width: "49%", py: 1.2, pl: 1 }}>Issue Date:</Typography>
                  <Typography variant="body1" color="initial" sx={{ borderLeft: '1px solid black', py: 1.2 }}><span style={{ marginLeft: '5px' }}> {new Date().toLocaleDateString('en-US', options)}</span></Typography>
                </Box>
              </Grid>
              <Grid item xs={4} spacing={4} >
                <Box sx={{ border: '1px solid black', display: 'flex', }}>
                  <Typography variant="body1" color="initial" sx={{ width: "49%", py: 1.2, pl: 1 }}>Due Date:</Typography>
                  <Typography variant="body1" color="initial" sx={{ borderLeft: '1px solid black', py: 1.2 }}> <span style={{ marginLeft: '5px' }}>{dueDate.toLocaleDateString('en-US', options)}</span></Typography>
                </Box>
              </Grid>
            </Box>


            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={6} spacing={4} >
                <Box sx={{ border: '1px solid black', display: 'flex', }}>
                  <Typography variant="body1" color="initial" sx={{ width: "49%", py: 1.2, pl: 1 }}>Shop No#</Typography>
                  <Typography variant="body1" color="initial" sx={{ borderLeft: '1px solid black', py: 1.2 }}> <span style={{ marginLeft: '5px' }}>S001</span></Typography>
                </Box>
              </Grid>
              <Grid item xs={6} spacing={4} >
                <Box sx={{ border: '1px solid black', display: 'flex', }}>
                  <Typography variant="body1" color="initial" sx={{ width: "49%", py: 1.2, pl: 1 }}>Rental Name</Typography>
                  <Typography variant="body1" color="initial" sx={{ borderLeft: '1px solid black', py: 1.2 }}><span style={{ marginLeft: '5px' }}> Name</span></Typography>
                </Box>
              </Grid>
            </Box>



            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={4} spacing={4} >
                <Box sx={{ display: 'flex', }}>
                </Box>
              </Grid>
              <Grid item xs={8} spacing={4} >
                <Box sx={{ display: 'flex', }}>
                  <table style={{ borderCollapse: "collapse", width: '100%' }}>
                    <tr>
                      <td style={{ border: " 1px solid black" }}>  <Typography variant="body1" color="initial" fontWeight={600}>SR</Typography></td>
                      <td style={{ border: " 1px solid black", width: "60%" }}><Typography variant="body1" color="initial" fontWeight={600}>Description</Typography></td>
                      <td style={{ border: " 1px solid black" }}><Typography variant="body1" color="initial" fontWeight={600}>Amount</Typography></td>
                    </tr>
                    <tr>
                      <td style={{ border: " 1px solid black" }}>1</td>
                      <td style={{ border: " 1px solid black" }}>Generator</td>
                      <td style={{ border: " 1px solid black" }}>200</td>
                    </tr>
                    <tr>
                      <td style={{ border: " 1px solid black" }}>2</td>
                      <td style={{ border: " 1px solid black" }}>Water Bill</td>
                      <td style={{ border: " 1px solid black" }}>100</td>
                    </tr>
                    <tr>
                      <td style={{ border: " 1px solid black" }}>3</td>
                      <td style={{ border: " 1px solid black" }}>security</td>
                      <td style={{ border: " 1px solid black" }}>100</td>
                    </tr>
                    <tr>
                      <td style={{ border: " 1px solid black" }}>4</td>
                      <td style={{ border: " 1px solid black" }}>Clean</td>
                      <td style={{ border: " 1px solid black" }}>100</td>
                    </tr>
                  </table>
                </Box>
              </Grid>
            </Box>

            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={6} spacing={4} >
                <Box sx={{ border: '1px solid black', display: 'flex', }}>
                  <Typography variant="body1" color="initial" sx={{ width: "49%", py: 1.2, pl: 1 }}>With in date</Typography>
                  <Typography variant="body1" color="initial" sx={{ borderLeft: '1px solid black', py: 1.2 }}> <span style={{ marginLeft: '5px' }}>S001</span></Typography>
                </Box>
              </Grid>
              <Grid item xs={6} spacing={4} >
                <Box sx={{ border: '1px solid black', display: 'flex', }}>
                  <Typography variant="body1" color="initial" sx={{ width: "49%", py: 1.2, pl: 1 }}>After due date</Typography>
                  <Typography variant="body1" color="initial" sx={{ borderLeft: '1px solid black', py: 1.2 }}><span style={{ marginLeft: '5px' }}> Name</span></Typography>
                </Box>
              </Grid>
            </Box>

            <Box sx={{ my: 2, display: 'flex', gap: 6 }}>
              <Grid item xs={6} spacing={4} >
                <Box sx={{ display: 'flex', }}>
                </Box>
              </Grid>
              <Grid item xs={6} spacing={4} >
                <Box sx={{ border: '1px solid black', display: 'flex', }}>
                  <Typography variant="body1" color="initial" sx={{ width: "49%", py: 1.2, pl: 1 }}>Area Assign</Typography>
                  <Typography variant="body1" color="initial" sx={{ borderLeft: '1px solid black', py: 1.2 }}><span style={{ marginLeft: '5px' }}>Mr. Name</span></Typography>
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