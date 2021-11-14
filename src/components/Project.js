import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { projects } from '../data.js'
import Divider from '@mui/material/Divider';

function Project() {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        <i class="fas fa-tasks"></i> Projects
                    </Typography>
                    {projects.map((eachProject, key) =>
                        <div className="project-card" key={key}>
                            <Link href={eachProject.projectUrl} target="_blank" underline="none" variant="subtitle1"> <b>{eachProject.projectName} </b></Link> : {eachProject.description}
                            <Stack direction="row" spacing={1}>
                                {eachProject.projectTags.map((tag, index) =>
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

export default Project;