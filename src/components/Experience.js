import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Experience() {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        <i class="fas fa-briefcase"></i> Experience
                    </Typography>
                    <Link href="https://www.uibk.ac.at/" target="_blank" underline="none" variant="h6">STI Innsbruck</Link> 2018 - 2022
                    <Typography inline variant="subtitle1" >
                        2018 - 2022
                    </Typography>
                    <Typography variant="subtitle1">
                        Responsibilities:
                    </Typography>

                    <Typography variant="subtitle1">
                        <ul>
                            <li>abc</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default Experience;