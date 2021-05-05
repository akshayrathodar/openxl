import React  from 'react';

import Avatar from '@material-ui/core/Avatar';
import NotesIcon from '@material-ui/icons/Notes';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
 
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
  }));


export const AvtarHead = (props) => {
    const classes = useStyles();

    return(
        <>
            <Avatar className={classes.avatar}>
                <NotesIcon />
            </Avatar>
        </>
    );
};