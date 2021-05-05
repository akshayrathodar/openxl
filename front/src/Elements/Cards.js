import React from 'react';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
 
    main:{
        display:'flex',
    },
    cardbg:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color:'white',
        fontSize:18,
        fontWeight:'bolder'
        
    }
}));


export const Cards = (props) => {
    const classes = useStyles();
    const lists = [...props.list];
    
    return(
        <>
         {lists.map(obj=>{
             return <div className={classes.main} key={obj.id}><Box component="span" display="block" boxShadow={3} p={1} m={2} className={classes.cardbg} ><Switch checked={obj.checked} onChange={()=>{props.checkboxEvt(obj.id)}} />{obj.todo}</Box></div>;
         })}
            
        </>
    );
};