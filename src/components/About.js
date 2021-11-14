import * as React from 'react';
import { makeStyles } from '@material-ui/core';

import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { personalData } from '../data.js';


const useStyles = makeStyles((theme) => ({
  //   cardstyle:{
  //   marginTop: theme.spacing(0),
  //   marginLeft:theme.spacing(0),
  //   flexDirection: 'row',
  //   alignItems: "center",
  //   justify: "center"
  // },
  cardContent: {
    backgroundColor: 'aliceblue'

  }
}));

function About() {

  const classes = useStyles();


  return (
    <>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          // className={classes.cardstyle}
          component="img"
          sx={{ width: 170 }}
          image={personalData.image}
          alt="Live from space album cover"
        />

        <CardContent className={classes.cardContent} sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {personalData.name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {personalData.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {personalData.detail}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            <i className="fas fa-globe-europe"></i> <Link href={personalData.contacts.website} target="_blank" underline="none" variant="body2">{personalData.contacts.website}</Link>
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
            <i className="fas fa-phone-alt"></i> <Link underline="none" href={`tel:${personalData.contacts.phone}`}>{personalData.contacts.phone}</Link>
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
            <i className="fas fa-envelope"></i> <Link underline="none" href={`mailto:${personalData.contacts.email}`}>{personalData.contacts.email}</Link>
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
            <i class="fab fa-linkedin"></i> <Link href={personalData.contacts.linkedin} target="_blank" underline="none" variant="body2">{personalData.contacts.linkedin}</Link>
          </Typography>

        </CardContent>
      </Card>
    </>
  );
}

export default About;