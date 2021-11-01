import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { education } from '../data.js'

function Education() {
  console.log(education)
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <i className="fas fa-graduation-cap"></i> Education
          </Typography>

          {education.map((eachEducation, key) =>
            <div className="education-card" key={key}>
              <Typography inline variant="subtitle1">
                {eachEducation.degree}
              </Typography>
              <Typography className="degree-year" inline variant="subtitle1" >
                {eachEducation.year}
              </Typography>
              <Link href={eachEducation.universityLink} target="_blank" underline="none" variant="h6">{eachEducation.universityName}</Link>              
              <Divider />
            </div>
          )}
          
        </CardContent>
      </Card>
    </>
  );
}

export default Education;