import react, { useState } from 'react';
import { Grid, IconButton, AppBar, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Home } from './Pages/index'
import { AppbarContant, Sidebar } from './Components/index'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Grid container>
        {/* Top Navbar */}
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleSidebar}> <Menu /> </IconButton>
            <AppbarContant />
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <Grid item xs={12} sm={3} md={2} lg={2} xl={2} sx={{ display: sidebarOpen ? 'block' : 'none' }}>
          {/* Sidebar content */}
          <Sidebar />
        </Grid>

        {/* Right-side Main Content */}
        <Grid item xs={12} sm={9} md={10} lg={10} xl={10}>
          {/* Main content */}
          Main Contact
        </Grid>
      </Grid>
    </div>
  )
}

export default App





const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    
  );
};

export default Home;