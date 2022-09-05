import React, { useEffect } from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';



export default function MediaCard() {



  useEffect(() => {

  }, [])

  return (

    <Grid sx={{ maxWidth: '100vw' }}
      container
      direction='column'
      alignItems='center'
      justify='center'>
      <CardMedia
        component="img"
        height="700"
        width="auto"
        image="https://insidethemagic.net/wp-content/uploads/2022/01/tobey-maguire-spider-man-no-way-home-scaled.jpg"
        alt="tobey"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tobey Maguire is the BEST SPIDERMAN
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Tobey Maguire gave audiences the best and most accurate version of Peter Parker. He perfectly illustrated both Spider-Man’s inner anxieties as well as his transformative superhero personality.
        </Typography>
      </CardContent>
    </Grid>
  );
}


root.render(<MediaCard />);