import React  from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


export const Buttons = (props) => {
    const useStyles = makeStyles((theme) => ({
  
      forboth:{
        margin: theme.spacing(1),
        height: 55,
        backgroundColor: props.colors,
      }
    }));

    const classes = useStyles();

    return(
        <>
            <Button
            type="submit"
            variant="contained"
            color={props.color !== '' ? props.color : "primary"}
            className={classes.forboth}
            onClick={props.clickEvent}
            >
          {props.title !== '' ? props.title : 'Add'}
            </Button>
        </>
    );
};