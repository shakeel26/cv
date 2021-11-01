import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Language() {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        <i class="fas fa-language"></i> Languages
                    </Typography>
                    <Typography inline variant="subtitle1" >
                        2018 - 2022
                    </Typography>
                    <Typography inline variant="subtitle1" >
                        2018 - 2022
                    </Typography>
               </CardContent>
            </Card>
        </>
    );
}

export default Language;