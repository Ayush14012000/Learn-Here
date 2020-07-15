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
import Axios from 'axios';

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

class mp extends Component {
 constructor(){
  super();
  this.state={
    t1:"", t2:"", t3:"",
    message:"" 
     // value: 1,
  }
  this.state={
    ka:[]
  }

 }
 fun(e){
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  sendData(ev){
    const t1=this.state.t1    
    const t2=this.state.t2
    const t3=this.state.t3    
    const data={
        t1,t2,t3
      }
      Axios.get('http://localhost:8080/examples/tclass.jsp',{params: data}).then(class1 =>{
             console.log(class1);
             this.setState ({
                 message:class1.data.response
             })
         }).catch(err =>{
             console.log("Failed");
         })
        
     }  
     componentDidMount(){
      Axios.get('http://localhost:8080/examples/tclass1.jsp').then(response=>{
        this.setState({ka: response.data.ka})  
      }).catch(err => {
          console.log("Failed");
      })
    
    }
    
  //const classes = useStyles();
  //const [value, setValue] = React.useState('1');
  handleChange = (e,newValue) =>{
    this.setState(
      {value: newValue });
  //const handleChange = (event, newValue) => {
  //setValue(newValue);
  };
render(){
  const{classes} =this.props;
  return (
  <div className={classes.root}>
      <TabContext value={this.state.value}>
        <AppBar position="static">
          <TabList onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="Create Class Schedule" value="1"  />
            <Tab label="Start Live Class" value="2"  />
            
          </TabList>
        </AppBar>
        <TabPanel value="1"  ><TextField variant="outlined" margin="normal" required fullWidth id="name" label=" Class" name="t1" autoComplete="name" value={this.state.t1} autoFocus onChange={this.fun.bind(this)}/>
            <TextField variant="outlined" margin="normal" required fullWidth id="name" label=" Subject" name="t2" autoComplete="name" value={this.state.t2} autoFocus onChange={this.fun.bind(this)}/>      
            <TextField id="datetime-local" label="Class Date and Time" type="datetime-local" defaultValue="2017-05-24T10:30" name="t3" value={this.state.t3} autoFocus onChange={this.fun.bind(this)} className={classes.textField} InputLabelProps={{ shrink: true, }}/>
        <Typography>
 <Button variant="contained" color="primary" onClick={this.sendData.bind(this)}>SCHEDULE CLASS</Button>
    </Typography>
        </TabPanel>
        <TabPanel value="2">
        {this.state.ka.map((item)=>(
                <tr>
                  <h4>
                  Live Class :
                  </h4>
                  <h5>Class: {item.class}</h5>
                  <h5>Time: {item.time}</h5>
              </tr>
              ))}

        <Button variant="contained" color="primary" disableElevation>START CLASS</Button>
        </TabPanel>
   </TabContext>
    </div>
  );
}
}
export default withStyles(useStyles)(mp);