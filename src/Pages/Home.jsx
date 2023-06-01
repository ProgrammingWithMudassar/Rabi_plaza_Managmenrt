import React,{useState,useEffect} from 'react'
import { Box } from '@mui/material'
import { HomeCard } from '../Components/index'
import './Style.css'

const Home = () => {
  return (
    <Box sx={{ pr: 1, width: '100%',overflow:'hidden' }} >
      <HomeCard />
    </Box>
  )
}

export default Home
