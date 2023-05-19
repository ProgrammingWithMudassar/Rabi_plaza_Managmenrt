import React from 'react'
import { Box, Typography, Card, CardContent, CardActions, Button, Stack } from '@mui/material'
import './Style.css'

const Login = () => {
  return (
    <Box >
      <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh', width: { xs: "100%", md: "100%" } }}>
        <Card variant="outlined" sx={{minWidth:{xs:"95%",sm:''}}}>
          <CardContent>
            <Box sx={{p:2}}>
              <Typography fontSize='1.8rem' textAlign='center' fontWeight={600}>Administrator Login</Typography>
              <Typography fontSize='1rem' textAlign='center' color="#9C9C9C" fontWeight={600}>Access to our dashboard</Typography>

            </Box>
            <Box>
              <Stack direction="column" mt={4} textAlign="left">
                <label for="" style={{ fontWeight: "600" }}>Username</label>
                <input type="text" placeholder='Username' className='input' /><br />
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <label for="" style={{ fontWeight: "600" }}>Password</label>
                <Typography variant="body1" color="#FE6B8B" sx={{ cursor: "pointer", textDecoration: 'underline' }}>Forget password?</Typography>
                </Box>
                <input type="password" placeholder='password' className='input' /><br />
              </Stack>
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ width: "100%" }}>Login</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  )
}

export default Login