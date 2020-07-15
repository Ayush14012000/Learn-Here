import React,{Component} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles , } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import Button from '@material-ui/core/Button';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import {ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import Class from './Class';


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
const drawerWidth = 300;
const useStyles =((theme) => ({
root: {
display: 'flex',
},
toolbar: {
paddingRight: 24, // keep right padding when drawer closed
},
toolbarIcon: {
display: 'flex',
alignItems: 'center',
justifyContent: 'flex-end',
// flexdirectio:'column',
padding: '0 8px',
...theme.mixins.toolbar,
},
appBar: {
zIndex: theme.zIndex.drawer + 1,
transition: theme.transitions.create(['width', 'margin'], {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.leavingScreen,
}),
},
appBarShift: {
marginLeft: drawerWidth,
width: `calc(100% - ${drawerWidth}px)`,
transition: theme.transitions.create(['width', 'margin'], {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.enteringScreen,
}),
},
menuButton: {
marginRight: 36,
color: 'primary',
},
menuButtonHidden: {
display: 'none',
},
title: {
flexGrow: 1,
},
drawerPaper: {
position: 'relative',
whiteSpace: 'nowrap',
width: drawerWidth,
transition: theme.transitions.create('width', {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.enteringScreen,
}),
},
drawerPaperClose: {
overflowX: 'hidden',
transition: theme.transitions.create('width', {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.leavingScreen,
}),
width: theme.spacing(10),
[theme.breakpoints.up('sm')]: {
width: theme.spacing(9),
},
},
appBarSpacer: theme.mixins.toolbar,
content: {
flexGrow: 1,
height: '100vh',
overflow: 'auto',
},
container: {
paddingTop: theme.spacing(8),
paddingBottom: theme.spacing(8),
},
paper: {
padding: theme.spacing(2),
display: 'flex',
overflow: 'auto',
flexDirection: 'column',
},
fixedHeight: {
height: 240,
},
}));

class Dashboard1 extends Component 
{ constructor()
{
super();
this.state={
open:true
};
}

handleDrawerOpen = () => {
this.setState({open:true})
};
handleDrawerClose = () => {
this.setState({open:false})
};

render() 
{
const {classes} = this.props;
// [open, setOpen] = state,setState(true);
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
return (
   
<div className={classes.root}>
<CssBaseline />
<AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
<Toolbar className={classes.toolbar}>
<IconButton
edge="start"
color="primary"
aria-label="open drawer"
onClick={this.handleDrawerOpen}
className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
>
  <MenuIcon />
 </IconButton>
 <Typography component="h3" variant="h3" color="inherit" noWrap className={classes.title}>
     ADMIN
 </Typography>
 <Button width = "auto" variant="contained" color="black" className={classes.submit}> Log out </Button>
 </Toolbar>
 </AppBar>
 <Drawer
 variant="permanent"
 classes={{
 paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
}}

open={this.state.open}
>
  <div className={classes.toolbarIcon}>
  
<Button onClick={this.handleDrawerClose}>
<ChevronLeftIcon />
</Button>
</div>
<Divider/>
<Router> 
    <div> 
<List>
                     {/* <Link to="/Signup" className={classes.link}/> */}
                     <ListItem button>
                            <ListItemIcon>  
                            <a href ="/" ><HomeIcon/></a>
                            </ListItemIcon>
                            
                       <a href ="/" >HOME</a>
                        </ListItem>
                        
                        <ListItem button>
                            <ListItemIcon>  
                            <a href ="/" ><AddOutlinedIcon/></a>
                            </ListItemIcon>
                           <a  href  = "/Upload"  >UPLOAD DATA</a> 
                        </ListItem>
                         <ListItem button>
                            <ListItemIcon>  
                             <a href ="/" ><InfoIcon /></a>
                            </ListItemIcon>
                            <a href ="/Act" >ACTIVITY CHART</a>
                        {/* <a href ="/About">About</a> */}
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>  
                            <a href ="/" ><LiveHelpIcon/> </a>
                            </ListItemIcon>

                        <a href  ="/Quiz">QUIZ / ATTENDANCE</a>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>  
                            <LiveHelpIcon/>
                            </ListItemIcon>
                        <a href  ="/Class">CLASS CONSTRUCTION</a>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>  
                            <LiveHelpIcon/>
                            </ListItemIcon>
                        <a href  ="/Info">INFORMATIONS</a>
                        </ListItem>
                      </List>
                     </div>
                    </Router>
    <Divider />
 </Drawer>
<main className={classes.content}>
<div className={classes.appBarSpacer} />
<Container maxWidth="lg" className={classes.container}>
            <Copyright />
</Container>
</main>
</div>
);
}
}
export default withStyles(useStyles)(Dashboard1);