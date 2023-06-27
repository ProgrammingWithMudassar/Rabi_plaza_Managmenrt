import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useGetShopsQuery,useDeleteShopMutation,} from '../../Features/API/Api.js'



const AllRentShop = () => {
  const { data, error, isLoading, refetch } = useGetShopsQuery();
  const [deleteShop] = useDeleteShopMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleDeleteShop = async (shopNumber) => {
    try {
      await deleteShop(shopNumber);
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

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
      r_rent: shop.Monthly_rent,
    }));


    const columns = [
      { field: 'Shop_No', headerName: 'Shop_No.', width: 100 },
      { field: 'rental', headerName: 'Rental', width: 230 },
      { field: 'S_honor', headerName: 'Shop Honor', width: 230 },
      { field: 'r_rent', headerName: 'Monthly Rent', width: 130 },
      {
        field: 'rent',
        headerName: 'Update Rent',
        width: 110,
        renderCell: (params) => (
          <Button variant="outlined" size="small" color="primary" component={Link} to={`/update_rent/${params.row.shopId}`}
            sx={{
              backgroundColor: '#FF870F',
              boxShadow: '0 3px 5px 2px rgba(255, 135, 15, .3)',
              ':hover': {
                backgroundColor: '#FF870F',
                border: "1px solid #FF870F"
              },
            }}
          >
            Rent 
          </Button>
        ),
      },
      {
        field: 'invoice',
        headerName: 'Invoice',
        width: 100,
        renderCell: (params) => (
          <Button variant="outlined" size="small" color="primary" component={Link} to={`/shop_Invoice/${params.row.shopId}`}
            sx={{
              backgroundColor: '#00C123',
              boxShadow: '0 3px 5px 2px rgba(57, 250, 92, .3)',
              ':hover': {
                backgroundColor: '#00C123',
                border: "1px solid #00C123"
              },
            }}
          >
            Invoice
          </Button>
        ),
      },
      {
        field: 'details',
        headerName: 'Details',
        width: 100,
        renderCell: (params) => (
          <Button variant="outlined" size="small" color="primary" component={Link} to={`/shop/${params.row.shopId}`}>
            More
          </Button>
        ),
      },
      {
        field: 'edit',
        headerName: 'Edit',
        width: 100,
        renderCell: (params) => (
          <Button variant="outlined" size="small" color="primary" component={Link} to={`/shop_edit/${params.row.shopId}`}
            sx={{
              backgroundColor: '#096AFF',
              boxShadow: '0 3px 5px 2px rgba(9, 106, 255, .3)',
              ':hover': {
                backgroundColor: '#096AFF',
                border: "1px solid #096AFF"
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
                border: "1px solid #FF0000"
              },
            }}
            onClick={() => handleDeleteShop(params.row.Shop_No)}
          >
            Delete
          </Button>
        ),
      },
    ];


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
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 7 },
              },
            }}
            pageSizeOptions={[7, 14, 21]}
          // checkboxSelection
          />

        </div>
      </Box>
    )
  }
  return null;
}

export default AllRentShop