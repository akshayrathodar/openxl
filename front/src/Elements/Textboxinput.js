import React  from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
 
    forboth:{
      margin: theme.spacing(1),
      height: 55
    }
  }));


export const Textboxinput = (props) => {
    const classes = useStyles();
    return(
        <>
            <TextField
            variant="outlined"
            margin="normal"
            required
            id="todo"
            label={props.label !== '' ? props.label : 'Textbox'}
            name={props.name !== '' ? props.name : "todo"}
            autoComplete="todo"
            autoFocus
            className={classes.forboth}
            onChange={props.onChangeEvent}
            value={props.value}
          />
        </>
    );
};