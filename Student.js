import React,{Component} from 'react';
import clsx from 'clsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRandom } from '@fortawesome/free-solid-svg-icons';
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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import{BrowserRouter as Router,
  Link,Switch,Route} from "react-router-dom";
  
  import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import {ListItem,
  ListItemIcon,ListItemText} from "@material-ui/core";
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
color="inherit"
aria-label="open drawer"
onClick={this.handleDrawerOpen}
className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
>
  
<MenuIcon />
</IconButton>
<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
Dashboard


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

open={this.state.open}
>
  
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
                          
                            <Link to="/Notes">
                            <PersonOutlineOutlinedIcon/>        
            </Link> 
                            
                            </ListItemIcon>
                            <ListItemText primary={"NOTES"}/>
                        
                        <a href="/Notes">NOTES </a>
                        </ListItem>
                        {/* <Link to="/Notes" className={classes.link}> */}
                        
                        <ListItem button>
                            <ListItemIcon>  
                            <AddOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Class"}/>
                        <a href ="/Class"> Joinclass </a>
                    
                        </ListItem>
                        
                    {/* <Link to="/Home" className={classes.link}> */}
                        <ListItem button>
                            <ListItemIcon>  
                            <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Test"}/>
                        <a href ="/Quiz" >Test</a>  
                        </ListItem>
                        
                        {/* <Link to="/about" className={classes.link}> */}
                        <ListItem button>
                            <ListItemIcon>  
                            <InfoIcon/>
                            </ListItemIcon>
                        <ListItemText primary={"Attendance"}/>
                        <a href ="/Attendance">Attendence</a>
                        </ListItem>
                        
                        {/* <Link to="/Help" className={classes.link}> */}
                        <ListItem button>
                            <ListItemIcon>  
                            <HelpOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Lecture"}/>
                        <a href="/Lecture">Lecture</a>
                        </ListItem>
                        
                        {/* <Link to="/Ordered Product" className={classes.link}> */}
                        <ListItem button>
                            <ListItemIcon>  
                            {/* <HomeIcon/> */}
                            </ListItemIcon>
                            {/* <ListItemText primary={"Ordered Product"}/> */}
                        {/* <a href="/Product">Product</a> */}
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>  
                            <HomeIcon/>
                            </ListItemIcon>
                        </ListItem>

                    </List></div></Router>
<Divider />
</Drawer>
{/* <List>{mainListItems}</List> */}
{/* <Divider /> */}

{/* <List>{secondaryListItems}</List> */}
{/* </Drawer> */}
<Router>
<main className={classes.content}>
<div className={classes.appBarSpacer} />
<Container maxWidth="lg" className={classes.container}>
<Switch>

{/* <Route exact path="/Product" component={List1}></Route> */}
                     </Switch>
               
<Copyright />
</Container>
</main>
</Router>
</div>


);
}
}
export default withStyles(useStyles)(Dashboard1);