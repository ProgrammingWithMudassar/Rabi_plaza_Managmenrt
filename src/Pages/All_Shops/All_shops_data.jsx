import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { rows } from '../../Data/DummyData.js'

const columns = [
  { field: 'Shop_No', headerName: 'Shop_No.', width: 100 },
  { field: 'rental', headerName: 'Rental', width: 130 },
  { field: 'S_honor', headerName: 'Shop Honor', width: 130 },
  { field: 'size', headerName: 'Shop Size', width: 100 },
  { field: 'floor', headerName: 'Floor', width: 50 },
  { field: 'S_date', headerName: 'Starting Date', width: 130 },
  { field: 'r_rent', headerName: 'Remaing Rent', width: 130 },
  {
    field: 'details',
    headerName: 'Details',
    width: 100,
    renderCell: (params) => (
      <Button variant="outlined" size="small" color="primary" component={Link} to={`/shop/${params.id}`}>
        More
      </Button>
    ),
  },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 100,
    renderCell: (params) => (
      <Button variant="outlined" size="small" color="primary" component={Link} to={`/shop_edit/${params.id}`}
      sx={{
        backgroundColor: '#096AFF',
        boxShadow: '0 3px 5px 2px rgba(9, 106, 255, .3)',
        ':hover': {
          backgroundColor: '#096AFF',
          border:"1px solid #096AFF"
        },
      }} >
        Edit
      </Button>
    ),
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 100,
    renderCell: (params) => (
      <Button variant="outlined" size="small" color="primary"
        sx={{
          backgroundColor: '#FF0000',
          boxShadow: '0 3px 5px 2px rgba(255, 0, 0, .3)',
          ':hover': {
            backgroundColor: '#FF0000',
            border:"1px solid #FF0000"
          },
        }}  >
        Delete
      </Button>
    ),
  },
];



const All_shops_data = () => {
  return (
    <Box>
      <Box display='flex' alignItems='center' justifyContent='space-between' pr={3}>
        <Typography variant="h5" color="initial" my={2}>All Shop's Data</Typography>
        <Link to='/ShopForm'>
          <Button>
            Add New <AddIcon />
          </Button>
        </Link>
      </Box>
      <div style={{ height: 630, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10,15,20]}
        // checkboxSelection
        />

      </div>
    </Box>
  )
}

export default All_shops_data