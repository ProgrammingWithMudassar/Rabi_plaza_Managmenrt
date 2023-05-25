import React from 'react'
import { Box } from '@mui/material'
import { HomeCard } from '../Components/index'
import './Style.css'

const Home = () => {
  const card = {

  }
  return (
    <Box sx={{ pr: 1, width: '100%',overflow:'hidden' }} >
      <HomeCard />
    </Box>
  )
}

export default Home



// <Grid container spacing={2}>
//         <Grid item xs={12} sm={4} md={12} sx={{ display: 'flex', width: '100%' }}>
//           {
//             CardData.map((data, index) => {
//               return (
//                 <Card variant="outlined">
//                   <CardContent>
//                     <data.icon />
//                   </CardContent>
//                   <CardActions>
//                     <Button>Learn more</Button>
//                   </CardActions>
//                 </Card>
//               )
//             })
//           }
//         </Grid>
//       </Grid>