import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles , } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = ((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
class Demo extends Component {
 constructor(){
  super();
  this.state={
      value: 1,
  }
 }
  handleChange = (e,newValue) =>{
    this.setState(
      {value: newValue });
  };
render(){
  const{classes} =this.props;
  return (

    <div className={classes.root}>
      <TabContext value={this.state.value}>
        <AppBar position="static">
          <TabList onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="Teacher " value="1"  />
            <Tab label="Student" value="2"  />
            
          </TabList>
        </AppBar>
        <TabPanel value="1"  ><TextField variant="outlined" margin="normal" required fullWidth  name="normal" label="Enter TeacherID" type="normal" id="normal" autoComplete="normal" />
        <Button variant="contained" color="primary" >
GET INFORMATION
</Button>
        </TabPanel>
        
        <TabPanel value="2" ><TextField variant="outlined" margin="normal" required fullWidth  name="normal" label="Enter StudentID" type="normal" id="normal" autoComplete="normal" />
        <Button variant="contained" color="primary" disableElevation>
 GET INFORMATION
</Button>
        </TabPanel>
   </TabContext>
    </div>
  );
}
}
export default withStyles(useStyles)(Demo);
