import React,{Component} from 'react';
import clsx from 'clsx';
import { withStyles , } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from '@material-ui/icons/Assessment';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import CommentIcon from '@material-ui/icons/Comment';       
import {ListItem, ListItemIcon,ListItemText} from "@material-ui/core";
function Copyright() {
return (
<Typography variant="body2" color="textSecondary" align="center">
{' '}
<Link color="inherit" href="https://material-ui.com/">
Welcome 
</Link>{' '}
{new Date().getFullYear()}
{'.'}
</Typography>
);
}

const drawerWidth = 240;
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
width: theme.spacing(7),
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
paddingTop: theme.spacing(4),
paddingBottom: theme.spacing(4),
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

class Teacher extends Component 
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
<AppBar position="absolute" color="secondary" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
<Toolbar className={classes.toolbar}>
<IconButton
edge="start"
color="inheriant"
aria-label="open drawer"
onClick={this.handleDrawerOpen}
className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}>
  <MenuIcon />
</IconButton>
<Typography component="h1" variant="h6" color="inheriant" noWrap className={classes.title}>
TEACHER DASHBOARD
</Typography>
<IconButton color="inherit">
{/* <Badge badgeContent={4} color="secondary"> */}
<NotificationsIcon />
{/* </Badge> */}
</IconButton>
</Toolbar>
</AppBar>
<Drawer
variant="permanent"
classes={{
paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
}}

open={this.state.open}>
<div className={classes.toolbarIcon}>
  
<IconButton onClick={this.handleDrawerClose}>
<ChevronLeftIcon />
</IconButton>
</div>
<Divider/>
{/* <Drawer> */}
<Router> 
    <div> 
<List>          
                        <ListItem button>
                            <ListItemIcon>  
                            <AddToQueueIcon/>
                            </ListItemIcon>
                            <ListItemText primary={""}/>
                        <a href ="/TClassRoom"> LIVE CLASS </a>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>  
                            <CloudUploadIcon/>
                            </ListItemIcon>
                        <ListItemText primary={""}/>
                        <a href ="/Tupload">UPLOAD NOTES</a>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>  
                          <AssessmentIcon/>
                          </ListItemIcon>
                         <ListItemText primary={""}/> 
                         <a href="/TCreatequiz">Quiz / ATTENDANCE</a>
                        </ListItem>
                       </List></div></Router>
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
export default withStyledas
