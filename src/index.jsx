import React, { useEffect, useState } from 'react';
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
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(true)
  }, [])


  return (

    <Grid sx={{ maxWidth: '100vw' }}
      container
      direction='column'
      alignItems='center'
      justify='center'>
      <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <CardMedia
          component="img"
          height="700"
          width="auto"
          image="https://cdn.mos.cms.futurecdn.net/VsfnyTLzYvxJudvc2rb3uH.jpg"
          alt="tom"
        />
      </Grow>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tom Holland IS THE BEST SPIDERMAN
        </Typography>
        <Typography variant="body2" color="text.secondary">

          Tom Holland perfectly captures the essence of a high school student struggling to balance his schoolwork, personal relationships, and responsibility as a superhero all in one. With a strong background in dance and gymnastics, Holland’s skills at backflipping and somersaulting also made him perfect for the part.

        </Typography>
      </CardContent>
    </Grid>
  );
}


root.render(<MediaCard />);