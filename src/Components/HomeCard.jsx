import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { HomeCardData } from '../Data/DummyData'
import { Box, Typography } from '@mui/material'
import './Style.css'


const HomeCard = () => {
    return (
        <Box >
            <Typography variant="body1" color="initial" my={1}>Wellcome Administator!</Typography>
            <Grid container spacing={2} >
                {
                    HomeCardData.map((data, key) => {
                        return (
                            <Grid item xs={4} display='flex' >
                                <Card variant="outlined" className='card'>
                                    <CardContent sx={{ display: 'flex',alignItems:'center',justifyContent:'space-between' }}>
                                        <Box className="Card__Icon">
                                            <data.Icon style={{fontSize:"35px"}}/>
                                        </Box>
                                        <Typography variant="h5" color="initial">{data.count}</Typography>
                                    </CardContent>
                                    <CardContent sx={{ textAlign:'right',mt:-4}}>
                                        <Typography variant="h6" color="initial" fontWeight={800}>{data.text}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default HomeCard