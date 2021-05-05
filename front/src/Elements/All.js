import React  from 'react';


import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";


import { Cards } from '../Elements/Cards';

const All = (props) => {
    console.log(props.todos);

    const onCheckedChange = (evt) => {
        let array = [...props.todos];
        let index = array.findIndex(obj => obj.id === evt);
        array[index].status = !array[index].status;
        //this.setState({lists:array});
        console.log(array);
    }
    
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
            <h1>All </h1>
            <Cards list={props.todos} checkboxEvt={onCheckedChange} />
        </>
    );
};

const mapStateToProps = (state) => {
    return { todos: state.todos };
};
  

export default connect(mapStateToProps)(All);