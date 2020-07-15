import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { withStyles , } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {Table} from 'react-bootstrap';
import Axios from 'axios';
import axios from 'axios';
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
const useStyles =((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

class Class extends Component {
  constructor()
     {
         super();
         this.state ={
           t1: "",
           t2:"",
           t3:"",
           value:1,
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
       Axios.get('http://localhost:8080/examples/quizin.jsp',{params:data}).then(response=>{
           console.log(response);
           this.setState({
               tabledata:response.data.tabledata
           })
       }).catch(err=>{
           console.log("Failed");
       })
   }
   handleShow = () => {
     axios.get('http://localhost:8080/examples/quizout.jsp').then((response) => {
       this.setState({tabledata: response.data.tabledata})  
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
            <Tab label="Class Construction" value="1" />
            <Tab label="View Classes" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1"> 
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Class</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
            <option value={1}>Class 1</option>
            <option value={2}>Class 2</option>
            <option value={1}>Class 3</option>
            <option value={2}>Class 4</option>
            <option value={1}>Class 5</option>
            <option value={2}>Class 6</option>
            <option value={1}>Class 7</option>
            <option value={2}>Class 8</option>
            <option value={1}>Class 9</option>
            <option value={2}>Class 10</option>
        </Select>
      </FormControl>
       <p> <input className={classes.input} id="contained-button-file" multiple  type="file"/> </p>
      <label htmlFor="contained-button-file"> 
       <p> <Button variant="contained" color="primary" component="span"> Teacher's Names </Button></p>
           <p> <input className={classes.input} id="contained-button-file" multiple type="file" /> </p>
      <p>  <Button variant="contained" color="primary" component="span"> 
         Student's Names
        </Button> </p>
        <p> <input className={classes.input} id="contained-button-file" multiple  type="file"/> </p>
        <p>  <Button variant="contained" color="primary" component="span"> 
          Subject
        </Button> </p>
      </label>
      </TabPanel>
        <TabPanel value="2">  <TextField variant="outlined" margin="normal" required fullWidth id="name" label=" Class" name="t1" autoComplete="name" value={this.state.t1} autoFocus onChange={this.fun.bind(this)}/>
        <p>  <Button onClick={this.handleShow}  variant="contained" color="primary" component="span" > 
         Display Class Infromation
        </Button> </p>
        <div>
<Table>
  <thead>
    <tr>
      <th>Name</th>
      <th>ID</th>
      <th>Marks</th>
    </tr>
  </thead>
  <tbody>
    {this.state.tabledata.map((item) => (
    <tr>
              <td>{item.name}</td> 
              <td> {item.id}</td>
              <td>{item.marks}</td>
             </tr>
    ))}
  </tbody>
</Table>
</div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
}
export default withStyles(useStyles)(Class);
