import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function Project() {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        <i class="fas fa-tasks"></i> Projects
                    </Typography>
                    <Link href="https://www.uibk.ac.at/" target="_blank" underline="none" variant="subtitle1">STI Innsbruck</Link> 2021
                    <Typography variant="body1">
                        Description Description Description Description Description Description Description Description Description Description 
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        <Chip label="PHP" />
                        <Chip label="PHP" />
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
}

export default Project;