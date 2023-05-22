import React from 'react'
import { Grid } from '@mui/material'
import { Sidebar, AppbarContant } from './Components/index'
import { Home } from './Pages/index'
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
              <Route path='/' element={<PrivateRoutes />} >
                <Route exact path='/' element={<Home />} />
                <Route exact path='/All_Shop_data' element={<Home />} />
              </Route>
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </div>
  )
}

export default App