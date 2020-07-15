import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles , } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Axios from 'axios';

const useStyles = ((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
    class mp extends Component {
      constructor(){
       super();
       this.state={
           t1:"", t2:"", t3:"", t4:"", t5:"", t6:"", t7:"",
           message:"" 
    
           // value: 1, 
      // value:2,
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
  const t4=this.state.t4
  const t5=this.state.t5    
  const t6=this.state.t6
  const t7=this.state.t7 

  const data={
    t1,t2,t3,t4,t5,t6,t7
  }
  Axios.get('http://localhost:8080/examples/tquiz.jsp',{params: data}).then(Quiz3 =>{
         console.log(Quiz3);
         this.setState ({
             message:Quiz3.data.response
         })
     }).catch(err =>{
         console.log("Failed");
     })
    
 }
 componentDidMount(){
  Axios.get('http://localhost:8080/examples/tshow.jsp').then(response=>{
    this.setState({ka: response.data.ka})  
  }).catch(err => {
      console.log("Failed");
  })

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
                <Tab label="QUIZ" value="1" />
                <Tab label="SHOW REPORT" value="2"/>
                
              </TabList>
            </AppBar>
            <TabPanel value="1" ><TextField variant="outlined" margin="normal" required fullWidth id="name" label=" Class" name="t1" autoComplete="name" value={this.state.t1} autoFocus onChange={this.fun.bind(this)}/>
            <TextField variant="outlined" margin="normal" required fullWidth id="name" label=" Subject" name="t2" autoComplete="name" value={this.state.t2} autoFocus onChange={this.fun.bind(this)}/>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>
              <TextField variant="outlined" margin="normal" required fullWidth id="name" label=" Question 1" name="t3" autoComplete="name" value={this.state.t3} autoFocus onChange={this.fun.bind(this)}/>
            
    </Typography>
            </AccordionSummary>
           
            <AccordionDetails>
            <TextField variant="outlined" margin="normal" required fullWidth id="name" label="A" name="t4" autoComplete="name" value={this.state.t4} autoFocus onChange={this.fun.bind(this)}/>
            <TextField variant="outlined" margin="normal" required fullWidth id="name" label=" B" name="t5" autoComplete="name" value={this.state.t5} autoFocus onChange={this.fun.bind(this)}/>
            <TextField variant="outlined" margin="normal" required fullWidth id="name" label=" C" name="t6" autoComplete="name" value={this.state.t6} autoFocus onChange={this.fun.bind(this)}/>
            <TextField variant="outlined" margin="normal" required fullWidth id="name" label=" D" name="t7" autoComplete="name" value={this.state.t7} autoFocus onChange={this.fun.bind(this)}/>
           </AccordionDetails>
            <Typography>
            <Button variant="contained" color="secondary" onClick={this.sendData.bind(this)} >
    CREATE
    </Button></Typography>
            </TabPanel>
            <TabPanel value="2">
            {this.state.ka.map((item)=>(
                <tr>
                  <h4>
                   CLASS: {item.class}
                  </h4>
                  <h5> SUBJECT: {item.subject}</h5>
                  <h5> QUIZ NAME: {item.Q_name}</h5>
            
                  </tr>
              ))}
           {this.state.message}
            </TabPanel>
       </TabContext>
        </div>
      );
    }
    }
    export default withStyles(useStyles)(mp);