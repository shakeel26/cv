import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function About() {
  return (
    <>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 170 }}
          image={process.env.PUBLIC_URL + '/logo192.png'}
          alt="Live from space album cover"
        />

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Shakeel Ahmed
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Mac Miller
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Mac Miller
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            <i class="fas fa-globe-europe"></i> <Link href="https://www.uibk.ac.at/" target="_blank" underline="none" variant="body2">WKO</Link>
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
          <i class="fas fa-phone-alt"></i> <Link underline="none" href={`tel:+15555551212`}>WKO</Link>
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
          <i class="fas fa-envelope"></i> <Link underline="none" href={`mailto:EMAIL`}>WKO</Link>
          </Typography>
       
          <Typography variant="subtitle2" color="text.secondary">
            <i class="fab fa-linkedin"></i> <Link href="https://www.uibk.ac.at/" target="_blank" underline="none" variant="body2">WKO</Link>
          </Typography>

        </CardContent>
      </Card>
    </>
  );
}

export default About;