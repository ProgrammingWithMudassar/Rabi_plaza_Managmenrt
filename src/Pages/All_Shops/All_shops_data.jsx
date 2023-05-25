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
  { field: 'size', headerName: 'Shop Size', width: 130 },
  { field: 'floor', headerName: 'Floor', width: 130 },
  { field: 'S_date', headerName: 'Starting Date', width: 130 },
  { field: 'r_rent', headerName: 'Remaing Rent', width: 130 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 100,
    renderCell: (params) => (
      <Button variant="outlined" size="small" color="primary" component={Link} to={`/shop/${params.id}`}>
        View
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
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
        />

      </div>
    </Box>
  )
}

export default All_shops_data