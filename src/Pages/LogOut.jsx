import React from 'react'
import { Box, Card, CardContent, CardActions, Button } from '@mui/material'
import {Link} from 'react-router-dom'

const LogOut = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "90vh" }}>
      <Card sx={{ width: "40%" }}>
        <CardContent>
          Are you sure to Logout?
        </CardContent>
        <CardActions>
          <Box sx={{ width: "100%" }}>
            <Button sx={{
              backgroundColor: '#FF0000',
              boxShadow: '0 3px 5px 2px rgba(255, 0, 0, .3)',
              ':hover': {
                backgroundColor: '#FF0000',
              },
            }} >Confirm</Button>
            <Link to="/">
              <Button sx={{ ml: 1 }}>Cancel</Button>
            </Link>
          </Box>
        </CardActions>
      </Card>
    </Box>
  )
}

export default LogOut