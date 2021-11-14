import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Education from './Education'
import Experience from './Experience';

function Test() {

    return (
        <Grid containeer>
            <Grid item xs={12}>

                <Education />

            </Grid>

            <Grid item xs={12}>

                <Experience />
            </Grid>
        </Grid>
    );
}
export default Test;