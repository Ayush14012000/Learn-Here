import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import App from './App';
import Axios from 'axios';
import Redirect from "react-router-dom";
import Home from './Home';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
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
      width: 'auto', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

 class Signup extends Component
  {
  constructor()
{
  super();
  this.state ={
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      message: ""
    }
}

 fun(e){
  this.setState({
      [e.target.name]:e.target.value
  })
}

sendData(ev){
  const t1= this.state.t1
  const t2= this.state.t2
  const t3= this.state.t3
  const t4= this.state.t4
  const data ={
      t1,t2,t3,t4
  }  
  Axios.get('http://localhost:8080/examples/c.jsp',{params:data}).then(response=>{
      console.log(response);
      this.setState({
          message:response.data.response
      })
  }).catch(err=>{
      console.log("Failed");
  })
}
    render()
    {
        
        
      const {classes} = this.props
        
        return (

          <div>
           <Box color="text.primary" clone>
                {this.state.st?(<div> </div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
        </Avatar>
      
  
  {/*<center> <img src="logo.png" width="160" height="150"/></center>*/}
    <Typography component="h1" variant="h5" color='primary'>
      Sign Up
    </Typography>


<div className={classes.form} noValidate>


<div>
            
        <TextField variant="outlined" margin="normal" required fullWidth id="name" label="Username" name="t1" autoComplete="name" value={this.state.t1} autoFocus onChange={this.fun.bind(this)}/>
        <TextField variant="outlined" margin="normal" required fullWidth id="name" label="E-Mail" name="t2" autoComplete="name" value={this.state.t2} autoFocus onChange={this.fun.bind(this)}/>
        <TextField variant="outlined" margin="normal" required fullWidth id="name" label="Password" name="t3" autoComplete="name" value={this.state.t3} autoFocus onChange={this.fun.bind(this)}/>
        <TextField variant="outlined" margin="normal" required fullWidth id="name" label="Address" name="t4" autoComplete="name" value={this.state.t4} autoFocus onChange={this.fun.bind(this)}/>
        <Button onClick={this.sendData.bind(this)} fullWidth variant="contained" color="primary" className={classes.submit}>CREATE ACCOUNT</Button>
       
              
        {this.state.message}
        </div>
      </div>
  </div>
</Container>

              )}</Box>
               </div>

        );
    }

}
export default withStyles(useStyles)(Signup);