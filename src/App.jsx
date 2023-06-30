import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { Sidebar, AppbarContant } from './Components/index'
import {
  Home,
  All_shops_data,
  ShopForm, Login,
  Expence_calculate,
  Report, Invoice,Update_ShopMaintenance,UpdateRentShop,
  Logout, Generate_Bill,
  Shop_Details, Edit_Shop
} from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './Utils/PrivateRoutes'
import './App.css'
import AddRentShop from './Pages/Add_Rent_Shop/AddRentShop'
import AllRentShop from './Pages/All_Rent_Shop/AllRentShop'
import RentShopInvoice from './Pages/Rent_Shop_Invoice/RentShopInvoice'
import EditRentShop from './Pages/Edit_Rent_Shop/EditRentShop'
import RentShopDetails from './Pages/Rent_Shop_Details/RentShopDetails'
import axios from 'axios'
// import Update_ShopMaintenance from './Pages/Update_ShopMaintenance/Update_ShopMaintenance'


const App = () => {
  useEffect(()=>{
    axios.put('http://localhost:8080/api/updateMaintenanceCharges').then((response)=>{

    }).catch((err)=>{
      console.log(err);
    })
    axios.put('http://localhost:8080/api/updateRent').then((response)=>{

    }).catch((err)=>{
      console.log(err);
    })
  })
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
                <Route exact path='/RentShopForm' element={<AddRentShop />} />
                <Route exact path='/All_rent_shop' element={<AllRentShop />} />
                <Route exact path='/report' element={<Report />} />
                <Route exact path='/logOut' element={<Logout />} />
                <Route exact path='/Generate_Bill' element={<Generate_Bill />} />
                <Route path="/update_shopmaintenance/:id" element={<Update_ShopMaintenance />} />
                <Route path="/update_rentshop/:id" element={<UpdateRentShop />} />
                <Route path="/shop/:id" element={<Shop_Details />} />
                <Route path="/rentshop/:id" element={<RentShopDetails />} />
                <Route path="/shop_Invoice/:id" element={<Invoice />} />
                <Route path="/rentshop_Invoice/:id" element={<RentShopInvoice />} />
                <Route path="/shop_edit/:id" element={<Edit_Shop />} />
                <Route path="/rentshop_edit/:id" element={<EditRentShop />} />
              </Route>
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </div>
  )
}

export default App