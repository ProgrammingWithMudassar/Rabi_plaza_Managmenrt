import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

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

const rows = [
  { id: 1, Shop_No: 1, rental: 'Snow', S_honor: 'Jon', size: 35, floor: 2, S_date: "12/3/2023", r_rent: 2500 },
  { id: 2, Shop_No: 2, rental: 'Lannister', S_honor: 'Cersei', size: 42, floor: 2, S_date: "12/3/2023", r_rent: 0 },
  { id: 3, Shop_No: 3, rental: 'Lannister', S_honor: 'Jaime', size: 45, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
  { id: 4, Shop_No: 4, rental: 'Stark', S_honor: 'Arya', size: 16, floor: 2, S_date: "12/3/2023", r_rent: 3000 },
  { id: 5, Shop_No: 5, rental: 'Targaryen', S_honor: 'Daenerys', size: 34, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
  { id: 6, Shop_No: 6, rental: 'Melisandre', S_honor: null, size: 15, floor: 20, S_date: "12/3/2023", r_rent: 2000 },
  { id: 7, Shop_No: 7, rental: 'Clifford', S_honor: 'Ferrara', size: 44, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
  { id: 8, Shop_No: 8, rental: 'Frances', S_honor: 'Rossini', size: 36, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
  { id: 9, Shop_No: 9, rental: 'Roxie', S_honor: 'Harvey', size: 65, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
];

const All_shops_data = () => {
  return (
    <Box>
      <Box display='flex' alignItems='center' justifyContent='space-between' pr={3}>
        <Typography variant="h5" color="initial" my={2}>All Shop's Data</Typography>
        <Button>
          Add New <AddIcon />
        </Button>
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