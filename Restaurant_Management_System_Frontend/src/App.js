import React from 'react';
import Hotels from './pages/Hotels'
import Orders from './pages/Orders'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import loginwaiter from './components/login/loginwaiter';
import { useState } from 'react';
import getorder from './pages/getorder';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/loginwaiter" component={loginwaiter}>
          </Route>
          <Route exact path="/getorder" component={getorder}>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/hotels" component={Hotels}></Route>
        <Route exact path="/order/:id" component={Orders}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
