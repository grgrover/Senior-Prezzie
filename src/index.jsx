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
import Fade from '@mui/material/Fade';


export default function MediaCard() {



  useEffect(() => {

  }, [])

  return (

    <Grid sx={{ maxWidth: '100vw' }}
      container
      direction='column'
      alignItems='center'
      justify='center'>
<Fade in={checked}>{icon}
      <CardMedia
        component="img"
        height="700"
        width="auto"
        image="https://cdn.mos.cms.futurecdn.net/VsfnyTLzYvxJudvc2rb3uH.jpg"
        alt="tom"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tom Holland is the BEST SPIDERMAN
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      </Fade>
    </Grid>
  );
}


root.render(<MediaCard />);