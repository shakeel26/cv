import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function Hobby() {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        <i class="fas fa-cubes"></i> Hobbies
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Table tennis" />
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
}

export default Hobby;