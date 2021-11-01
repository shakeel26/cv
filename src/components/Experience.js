import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { experience } from '../data.js';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function Experience() {

    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        <i class="fas fa-briefcase"></i> Experience
                    </Typography>

                    {experience.map((eachExperience, key) =>
                        <div className="experience-card" key={key}>
                            <Typography inline variant="subtitle1" >
                                {eachExperience.title}
                            </Typography>
                            <Link href={eachExperience.companyWebSite} target="_blank" underline="none" variant="h6">{eachExperience.company}</Link> at {eachExperience.location}
                            <Typography inline variant="subtitle1" >
                                {eachExperience.datesBetween}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                {eachExperience.descriptionTags.map((tag,index)=>
                                <Chip key={index} label={tag} />                                
                                )}
                            </Stack>
                            <Divider />
                        </div>
                    )}
                </CardContent>
            </Card>
        </>
    );
}
export default Experience;