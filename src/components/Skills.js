import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { skills } from '../data.js'


const CHIP_MAX_WIDTH = 100;
const CHIP_ICON_WIDTH = 30;

const useStyles = makeStyles((theme) => ({
    //   cardstyle:{
    //   marginTop: theme.spacing(0),
    //   marginLeft:theme.spacing(0),
    //   flexDirection: 'row',
    //   alignItems: "center",
    //   justify: "center"
    // },
    chip: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        display: "flex",
        maxWidth: CHIP_MAX_WIDTH - CHIP_ICON_WIDTH
    }
  }));



function Skills() {

    const classes = useStyles();



    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        <i class="fas fa-rocket"></i> Skills
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        {skills.map((skill, i) =>
                        <Chip className={classes.chip} label={skill} key={i}>{i}</Chip >                        
                        )}
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
}

export default Skills;