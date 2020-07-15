import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PropTypes from 'prop-types'
import Link from '@material-ui/core/Link';

const useStyles = ((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
class Act extends Component
  {
  constructor()
{
    super();
    this.state={
      t1: "",
      tabledata:[]
    }
}

fun(e){
  this.setState({
      [e.target.name]:e.target.value
  })
}

sendData(ev){
  const t1= this.state.t1
 
  const data ={
      t1
  }  
  Axios.get('http://localhost:8080/examples/actin.jsp',{params:data}).then(response=>{
      console.log(response);
      this.setState({
          tabledata:response.data.tabledata
      })
  }).catch(err=>{
      console.log("Failed");
  })
}
handleShow = () => {
  axios.get('http://localhost:8080/examples/actre.jsp').then((response) => {
    this.setState({tabledata: response.data.tabledata})  
  })

}


render() {
    const {classes} = this.props
       
  return (
    <div>
    <Box color="text.primary" clone>
<Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
 <Avatar className={classes.avatar}>
 <LockOutlinedIcon />
 </Avatar>
{/*<center> <img src="logo.png" width="160" height="150"/></center>*/}
<Typography component="h1" variant="h5" color='primary'>
CLASS ACTIVITY
</Typography>
<div className={classes.form} noValidate>
<TextField variant="outlined" margin="normal" required fullWidth id="name" label="Enter Class" name="t1" autoComplete="name" value={this.state.t1} autoFocus onChange={this.fun.bind(this)}/>
<TextField id="date" label="Date" type="date" defaultValue="2017-05-24"className={classes.textField} InputLabelProps={{shrink: true,}}/>
<Button   onClick={this.handleShow} fullWidth variant="contained" color="primary"  className={classes.submit}>SHOW</Button>
{this.state.message}
<div>
<Table>
  <thead>
    <tr>
      <th>Time</th>
      <th>Subject</th>
      <th>Teacher</th>
      <th>State</th>
    </tr>
  </thead>
  <tbody>
    {this.state.tabledata.map((item) => (
    <tr>
              <td>{item.Time}</td> 
              <td> {item.Subject}</td>
              <td>{item.Teacher}</td>
              <td>{item.State}</td>
             </tr>
    ))}
  </tbody>
</Table>
</div>
</div>
</div>
</Container>
</Box>
</div>              
    );
  }
 }
 export default withStyles(useStyles)(Act);
