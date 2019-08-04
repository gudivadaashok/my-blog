import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
                <Link to="/"><Tab label="Home" /></Link>
                <Link to="/contacts"><Tab label="Contacts" /></Link>
                <Link to="/about"><Tab label="About" /></Link>
        </Paper>
    );
}
