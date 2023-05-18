import react, { useState } from 'react';
import { Grid, IconButton, AppBar, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { AppbarContant } from '../Components/index'

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Grid container>
      {/* Top Navbar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleSidebar}> <Menu /> </IconButton>
          <AppBarContant />
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Grid item xs={12} sm={3} md={2} lg={2} xl={2} sx={{ display: sidebarOpen ? 'block' : 'none', backgroundColor: "#929292" }}>
        {/* Sidebar content */}
        Side bar
      </Grid>

      {/* Right-side Main Content */}
      <Grid item xs={12} sm={9} md={10} lg={10} xl={10}>
        {/* Main content */}
        Main Contact
      </Grid>
    </Grid>
  );
};

export default Home;