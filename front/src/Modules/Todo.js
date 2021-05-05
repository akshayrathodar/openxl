import React from 'react';

import {Buttons} from '../Elements/Button';
import {Textboxinput} from '../Elements/Textboxinput';


import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
// import Alert from '@material-ui/lab/Alert';

import { withStyles } from '@material-ui/styles';
import TabPanel from '../Elements/Tabpanel';
import Container from '@material-ui/core/Container';


import { Cards } from '../Elements/Cards';

import { connect } from "react-redux";
import { addtodoList } from '../actions/index';

const styles = (theme) => ({
  paper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 10,
  },
  custform:{
      display:'flex',
      alignItems: 'center',
      flexDirection: 'row',
      margin:10
  },
  
});

class Todos extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lists : [],
      temptxt:'',
      tabvalue:0
    };
  }

  onTextChanges = (evt) => {
      let text = evt.target.value;
      this.setState({temptxt:text});
  }

  onBtnClick = () => {
    
    if(this.state.temptxt !== '') {
      let randomnum = Math.random();
      let todotxt = this.state.temptxt;
      let list = [...this.state.lists];
      list.push({'id':randomnum,'todo':todotxt,'checked':true});
      this.setState({lists:list,temptxt:''});
    } else {
      alert('please enter todo text');
    }
  }

  onCheckedChange = (evt) => {
    let array = [...this.state.lists];
    let index = array.findIndex(obj => obj.id === evt);
    array[index].checked = !array[index].checked;
    this.setState({lists:array});

  }

  tabChange = (event, newValue) => {
    this.setState({tabvalue:newValue});
  }

  

  render()
  {
    const { classes } = this.props;
    
    return (
      <>
      <Typography variant="h5">Todo Demo</Typography>
            <Typography>loream ipsum loream ipsum loream ipsum loream ipsum loream ipsum </Typography>
        <Container component="main" maxWidth="xs">
          
          <div className={classes.paper}>
              
  
              <Grid container>
                <Grid item xs>
                  <Textboxinput label="Add Todos" value={this.state.temptxt} onChangeEvent={this.onTextChanges} />
                </Grid>
                <Grid item>
                  <Buttons color="primary" title="Add" clickEvent={this.onBtnClick}/>
                </Grid>
              </Grid>
              <Grid container>
                <Grid>
                  <Cards list={this.state.lists} checkboxEvt={this.onCheckedChange} />
                </Grid>
              </Grid>
              
          </div>
        </Container>
 
            <TabPanel/>
            
      </>
    );
  
  }
}


const mapStateToProps = state => {
  return { todos: state.todos };
};

function mapDispatchToProps(dispatch) {
  return {
      addtodoList: stat => dispatch(addtodoList(stat))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Todos));