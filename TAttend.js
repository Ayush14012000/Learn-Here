import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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
class Attend extends Component
  {
  constructor()
{
    super();
    this.state={
        name:'',
        st:false
    }
}
yi =() =>{
  alert(this.state.name);
};
handleLogIn = () => {
    this.yi();
    console.log(this.state.name);
};


handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}
render() {
    const {classes} = this.props
       
  return (
    <div>
    <Box color="text.primary" clone>
         {this.state.st?(<div> Welcome</div>):(
<Container component="main" maxWidth="xs">
{/* <CssBaseline /> */}
<div className={classes.paper}>
 {/* <Avatar className={classes.avatar}> */}
 {/* </Avatar> */}


<center> <img src="logo.png" width="160" height="100"/></center>
<Typography component="h1" variant="h5" color='secondary'>
ATTENDANCE
</Typography>


<div className={classes.form} noValidate>


<TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="normal"
            label="Enter Class"
            type="normal"
            id="normal"
            autoComplete="normal"
          />
<Button onClick={this.handleLogIn} fullWidth variant="contained" color="primary" className={classes.submit}>View </Button>


                 
              </div>
</div>
</Container>

              )}</Box>
              </div>              

        );
    }

}
export default withStyles(useStyles)(Attend);
