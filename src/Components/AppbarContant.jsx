import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const AppbarContant = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', ml:{xs:0,md: 2}, }}>
        <Typography sx={{fontSize:{xs:'0.9rem',md:"1.5rem"}}} fontWeight={600}> Rabi Managment system </Typography>
        <Link to='/login'>
          <Button sx={{fontSize:{xs:'0.9rem',md:"1.2rem"}}} >Log Out</Button>
        </Link>
      </Box>
    </>
  )
}

export default AppbarContant