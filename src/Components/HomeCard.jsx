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
                            <Grid item xs={4} display='flex'>
                                <Card variant="outlined" className='card'>
                                    <CardContent sx={{display:'flex'}}>
                                       {data.text}
                                       {/* <data.Icon /> */}
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            variant="text"
                                            color="primary"
                                            size="small"
                                        >
                                            Learn more
                                        </Button>
                                    </CardActions>
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