import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Btstp from './Btstp';
//import Roja from './Roja'
//import Dashboard from './Dashboard';
//import Signup from './Signup';
//import Try from './Try';
//import Notes from './Notes'
//import Fun from './Fun';
//import Teacher from './Teacher';
//import Student from './Student';
//import Attendance from './Attendance';
//import Result from './Result';
//import Home from './Home';
//import Class from './Class';
//import Signup from './Signup';
//import Fun from './Fun';
//import Teacher from './Teacher';
//import Demo from './Demo';
//import Signup from './Signup';
//import DB2 from './DB2';
//import Info from './Info';
import Main from './Main';
//import Report from './Info';
//import Info  from './Info';
//import Tupload from './Tupload';
//import Login1 from './Login1';
ReactDOM.render(
  <React.StrictMode>
<Main/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
   