import React from 'react'
import { Box, Slide, Typography } from '@mui/material'
import { SlideBarData } from '../Data/DummyData'
import './Style.css'

const SideBar = () => {
  return (
    <Box sx={{ p: 1, height: "100vh", width: '100%' }}>
      <Box className="sidebar">
        <Typography variant='h6' textAlign='center' fontWeight={700} color="#FF8E53" >Rabi Rent System</Typography>
        <Box mt={3}>
          <ul className='sidebar__list'>
            {
              SlideBarData.map((data, key) => {
                return (
                  <li key={key}>
                    {data.text}
                    <data.Icon />
                  </li>
                );
              })
            }
          </ul>
        </Box>
      </Box>
    </Box>
  )
}

export default SideBar