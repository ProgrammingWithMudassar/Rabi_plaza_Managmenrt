import React, { useState } from 'react';
import { Grid, IconButton, AppBar, Toolbar, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppbarContant, Sidebar } from './Components/index';
import { Home, Login } from './Pages/index';
import PrivateRotues from './Utils/PrivateRoutes'
import './App.css';

function AppWithRouter() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Check if the current route is login or signup
  const isLoginOrSignUpPage = location.pathname === '/login';

  return (
    <div className="App">
      <Grid container sx={{display:'flex',justifyContent:'center'}}>
        {/* Top Navbar */}
        {!isLoginOrSignUpPage && (
          <AppBar position="static" sx={{ width: '99%', m: 0.5, borderRadius: '15px', overflow: 'hidden' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
                <Menu />
              </IconButton>
              <AppbarContant />
            </Toolbar>
          </AppBar>
        )}

        {/* Sidebar */}
        {!isLoginOrSignUpPage && (
          <Grid item xs={12} sm={3} md={2} lg={2} xl={2} sx={{ display: sidebarOpen ? 'block' : 'none' }}>
            {/* Sidebar content */}
            <Sidebar />
          </Grid>
        )}

        {/* Right-side Main Content */}
        <Grid item xs={12} sm={9} md={10} lg={10} xl={10}>
          {/* Main content */}
          <Routes>
            <Route path="/login" element={<Login />} />


            <Route path='/' element={<PrivateRotues />} >
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

export default App;