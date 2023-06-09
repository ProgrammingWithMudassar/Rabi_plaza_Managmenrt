import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Stack } from '@mui/material';
import { useLoginMutation } from '../Features/API/Api';
import { useNavigate } from 'react-router-dom'
import './Style.css';

const Login = () => {
  const navigate = useNavigate();
  const [loginMutation] = useLoginMutation();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value.trim(), // Trim the input value
    }));
  };

  const handleLogin = async () => {
    try {
      if (credentials.username && credentials.password) {
        const response = await loginMutation(credentials);
        let auth = response.data.success;
        localStorage.setItem('token', auth);
        navigate('/')
      } else {
        alert('Please provide a username and password');
      }
    } catch (error) {
      alert('Please provide correct username and password');
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh', width: { xs: "100%", md: "100%" } }}>
        <Card variant="outlined" sx={{ minWidth: { xs: "95%", sm: '' } }}>
          <CardContent>
            <Box sx={{ p: 2 }}>
              <Typography fontSize='1.8rem' textAlign='center' fontWeight={600}>Administrator Login</Typography>
              <Typography fontSize='1rem' textAlign='center' color="#9C9C9C" fontWeight={600}>Access to our dashboard</Typography>
            </Box>
            <Box>
              <Stack direction="column" mt={4} textAlign="left">
                <label htmlFor="username" style={{ fontWeight: "600" }}>Username</label>
                <input type="text" id="username" placeholder='Username' className='input' value={credentials.username} onChange={handleChange} /><br />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <label htmlFor="password" style={{ fontWeight: "600" }}>Password</label>
                </Box>
                <input type="password" id="password" placeholder='Password' className='input' value={credentials.password} onChange={handleChange} /><br />
              </Stack>
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ width: "100%" }} onClick={handleLogin}>Login</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;