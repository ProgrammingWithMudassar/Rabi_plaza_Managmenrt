import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Grid } from '@mui/material'
import { HomeCardData } from '../Data/DummyData'
import { Box, Typography } from '@mui/material'
import './Style.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(262, 16.0, "Ali Humza"),
    createData(262, 16.0, "Ali Humza"),
    createData(262, 16.0, "Ali Humza"),
    createData(262, 16.0, "Ali Humza"),
    createData(262, 16.0, "Ali Humza"),
    createData(262, 16.0, "Ali Humza"),
];



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
                                    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box className="Card__Icon">
                                            <data.Icon style={{ fontSize: "35px" }} />
                                        </Box>
                                        <Typography variant="h5" color="initial">{data.count}</Typography>
                                    </CardContent>
                                    <CardContent sx={{ textAlign: 'right', mt: -4 }}>
                                        <Typography variant="h6" color="initial" fontWeight={800}>{data.text}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
                <Grid xs={6} mt={2} pl={2} >
                    <TableContainer component={Paper} sx={{ boxShadow: "0 1px 5px 1.5px rgba(128, 128, 128, 0.3)" }}>
                        <Typography variant="h6" fontWeight={700} textAlign='center' color="initial" p={1}>Latest Register Shop</Typography>
                        <Table aria-label="simple table">
                            <TableHead sx={{ backgroundColor: '#222222' }}>
                                <TableRow >
                                    <TableCell sx={{ color: '#fff', width: '200px' }} align="left"># Shop No.</TableCell>
                                    <TableCell sx={{ color: '#fff' }} align="left">Floor</TableCell>
                                    <TableCell sx={{ color: '#fff' }} align="left">Honor Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(0, 5).reverse().map((row) => (
                                    <TableRow key={row.name} >
                                        <TableCell component="th" scope="row">{row.name}</TableCell>
                                        <TableCell align="left">{row.calories}</TableCell>
                                        <TableCell align="left">{row.fat}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>



                <Grid xs={6} mt={2} pl={2} >
                    <TableContainer component={Paper} sx={{ boxShadow: "0 1px 5px 1.5px rgba(128, 128, 128, 0.3)" }}>
                        <Typography variant="h6" fontWeight={700} textAlign='center' color="initial" p={1}>Latest Income</Typography>
                        <Table aria-label="simple table">
                            <TableHead sx={{ backgroundColor: '#222222' }}>
                                <TableRow >
                                    <TableCell sx={{ color: '#fff', width: '200px' }} align="left"># Shop No.</TableCell>
                                    <TableCell sx={{ color: '#fff' }} align="left">Floor</TableCell>
                                    <TableCell sx={{ color: '#fff' }} align="left">Honor Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(0, 5).reverse().map((row) => (
                                    <TableRow key={row.name} >
                                        <TableCell component="th" scope="row">{row.name}</TableCell>
                                        <TableCell align="left">{row.calories}</TableCell>
                                        <TableCell align="left">{row.fat}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
        </Box>
    )
}

export default HomeCard