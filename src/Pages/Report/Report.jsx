import React, { useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import {  useGetShopsQuery } from '../../Features/API/Api.js'
import ReactToPrint from 'react-to-print';
import { faBackward, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Report = () => {
  const { data, error, isLoading, refetch } = useGetShopsQuery();
  const componentRef = useRef();


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data && data.shops) {
    const rows = data.shops.map((shop, index) => ({
      id: index + 1,
      shopId: shop._id,
      Shop_No: shop.shopNumber,
      rental: shop.shopRental,
      S_honor: shop.shopOwner,
      size: shop.shopSize,
      floor: shop.floorNo,
      r_rent: shop.ShopRent,
      S_date: shop.registrationDate,
    }));


    const columns = [
      { field: 'Shop_No', headerName: 'Shop_No.', width: 100 },
      { field: 'rental', headerName: 'Rental', width: 230 },
      { field: 'S_honor', headerName: 'Shop Honor', width: 200 },
      { field: 'size', headerName: 'Shop Size', width: 150 },
      { field: 'floor', headerName: 'Floor', width: 50 },
      { field: 'S_date', headerName: 'Starting Date', width: 130 },
      { field: 'r_rent', headerName: 'Remaing Rent', width: 130 },
    ];


    return (
      <Box>
        <Box mr={2}>
          <Box display='flex' justifyContent='space-between' py={2}>
            <Typography variant="body1" color="initial"></Typography>
            <Box>
              <ReactToPrint
                trigger={() => <Button sx={{ mr: 2 }}><FontAwesomeIcon icon={faFileInvoice} /><span style={{ marginLeft: "7px" }}> Generate Report </span></Button>}
                content={() => componentRef.current}
              />
            </Box>
          </Box>
        </Box>

        <div style={{ height: 630, width: '100%' }}  ref={componentRef}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 15, 20]}
          // checkboxSelection
          />

        </div>
      </Box>
    )
  }
  return null;
}

export default Report