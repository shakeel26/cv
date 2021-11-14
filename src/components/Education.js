import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

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
              <div className="singleLine">
                <Typography className="attributeName" inline variant="subtitle1" sx={{ fontWeight: 'bold', m: 1 }}>
                  {eachEducation.degree}
                </Typography>
                <Typography inline variant="subtitle1" >
                  {eachEducation.year}
                </Typography>
              </div>
              <Link href={eachEducation.universityLink} target="_blank" underline="none" variant="h6">{eachEducation.universityName}</Link>

              {eachEducation.thesis ? eachEducation.thesis.map((item, index) =>
                <div key={index} >
                  <Typography>
                    <b> {item.title} </b> : {item.description}
                  </Typography>

                  <Stack direction="row" spacing={1}>
                    {item.techUsed.map((tag, index) =>
                      <Chip key={index} label={tag} />
                    )}
                  </Stack>
                </div>
              ) : null}
              <Divider />
            </div>

          )}

        </CardContent>
      </Card>

    </>
  );
}

export default Education;