import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function Skills() {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        <i class="fas fa-rocket"></i> Skills
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Chip Filled" />
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
}

export default Skills;