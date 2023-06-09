import React from 'react'
import { Grid } from '@mui/material'
import { Sidebar, AppbarContant } from './Components/index'
import {
  Home,
  All_shops_data,
  ShopForm, Login,
  Expence_calculate,
  Report, Invoice,
  Logout, Generate_Bill,
  Shop_Details, Edit_Shop
} from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './Utils/PrivateRoutes'
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={2.5}>
            <Sidebar />
          </Grid>
          <Grid item xs={9.5} >
            <AppbarContant />
            <Routes>
              {/* PrivateRoutes   */}

              <Route exact path='/login' element={<Login />} />



              <Route path='/' element={<PrivateRoutes />} >
                <Route exact path='/' element={<Home />} />
                <Route exact path='/All_Shop_data' element={<All_shops_data />} />
                <Route exact path='/ShopForm' element={<ShopForm />} />
                <Route exact path='/Expence_calculate' element={<Expence_calculate />} />
                <Route exact path='/report' element={<Report />} />
                <Route exact path='/logOut' element={<Logout />} />
                <Route exact path='/Generate_Bill' element={<Generate_Bill />} />


                <Route path="/shop/:id" element={<Shop_Details />} />
                <Route path="/shop_edit/:id" element={<Edit_Shop />} />
                <Route path="/shop_Invoice/:id" element={<Invoice />} />
              </Route>
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </div>
  )
}

export default App