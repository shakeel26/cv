import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Education() {
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <i className="fas fa-graduation-cap"></i> Education
          </Typography>

          <Typography inline variant="subtitle1" >
            Master of Science in Computer Science
          </Typography>

          <Typography inline variant="subtitle1"  >
            2018 - 2022
          </Typography>

          <Link href="https://www.uibk.ac.at/" target="_blank" underline="none" variant="h6">Universität Innsbruck</Link>
        </CardContent>
      </Card>
    </>
  );
}

export default Education;