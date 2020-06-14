import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Components/Header/UserHeader'
import Header from './Components/Header/Header'
// import Login from './components/Login/Login';
import { Route, Switch } from 'react-router-dom';
import Enterprise from './Components/Header/EnterpriseHeader';
import Login from './Components/Login/Login';
import Signin from './Components/Signin/Signin';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
      <Route path="/Signin" component={Signin} />
        <Route path="/Enterprises" component={Enterprise} />
        <Route path="/Users" component={Users} />
      </Switch>
      <Login></Login>
    </div>
  );
}
export default App;
