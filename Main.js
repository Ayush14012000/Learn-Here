import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Upload from './Upload';
import Act from './Act';
import Quiz from './Quiz';
import Info from './Info';
import Home from './Home';      
import Attendance from './Attendance';
import Student from './Student';
import Tupload from './Tupload';
import TClassRoom from './TClassRoom';
import TCreatequiz from './TCreatequiz';
import Teacher from './Teacher';
import Signup from './Signup';
import Roja from './Roja'; 
import Class from './Class';
export default () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/Class" component={Class}></Route>
            <Route exact path="/Info" component={Info}></Route>
            <Route exact path="/Upload" component={Upload}></Route>
            <Route exact path="/Act" component={Act}></Route>
            <Route exact path="/Quiz" component={Quiz}></Route>
            <Route exact path="/" component={Roja} ></Route>
            <Route exact path='/Home' component={Home}></Route>
            <Route exact path='/Student' component={Student}></Route>
            <Route exact path="/Quiz" component={Quiz}></Route>
            <Route exact path="/Attendance" component={Attendance}></Route>
            <Route exact path="/Tupload" component={Tupload}></Route>
            <Route exact path="/TClassRoom" component={TClassRoom}></Route>
            <Route exact path="/TCreatequiz" component={TCreatequiz}></Route>
            <Route exact path="/Teacher" component={Teacher}></Route>
            <Route exact path="/Signup" component={Signup}></Route>
        </Switch>
    </BrowserRouter>
)