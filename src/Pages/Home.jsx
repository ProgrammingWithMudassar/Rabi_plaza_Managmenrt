import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { Grid, Box } from '@mui/material'
import { CardData } from '../Data/DummyData.js'
import './Style.css'

const Home = () => {
  const card = {

  }
  return (
    <Box sx={{ p: 0.4, width: '200%',overflow:'hidden' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorum omnis assumenda, fugit rerum quis minus nisi quo, voluptate qui cupiditate natus et ab esse sit ut. Dolores, laborum fugiat!<br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorum omnis assumenda, fugit rerum quis minus nisi quo, voluptate qui cupiditate natus et ab esse sit ut. Dolores, laborum fugiat!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorum omnis assumenda, fugit rerum quis minus nisi quo, voluptate qui cupiditate natus et ab esse sit ut. Dolores, laborum fugiat!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorum omnis assumenda, fugit rerum quis minus nisi quo, voluptate qui cupiditate natus et ab esse sit ut. Dolores, laborum fugiat!
    
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