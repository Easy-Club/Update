import React from 'react';
import Users from '../Header/UserHeader'
import Header from '../Header/Header';
import Login from '../Users/Login/Login';
import { Route, Switch ,Redirect} from 'react-router-dom';
import Enterprises from '../Header/EnterpriseHeader';
import Signin from '../Users/Signin/Signin';
import UserApplication from '../Users/Application/Application';
import Stores from '../Stores/Stores';
import Report from '../Users/Report/Report';
import UserNewCard from '../Users/NewCard/NewCard';
import EnterpApplication from '../Enterprise/Application/Application';
import EnterpNewCard from '../Enterprise/NewCard/NewCard';
import Reports from '../Enterprise/Reports/Reports';
import Update from '../Enterprise/Update/Update';
// import logo from './logo.svg';
const Routes = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Switch>
                <Route path="/users" component={Users} />
                <Route path="/enterprises" component={Enterprises} />
                <Route path="**" Redirect='/users'></Route>
            </Switch>
            <Switch>
            <Route path="/users/app" component={UserApplication} />
                <Route path="/users/stores" component={Stores} />
                <Route path="/users/new" component={UserNewCard} />
                <Route path="/users/report" component={Report} />
                <Route path="/users/signin" component={Signin} />
                <Route path="/enterprises/app" component={EnterpApplication} />
                <Route path="/enterprises/new" component={EnterpNewCard} />
                <Route path="/enterprises/stores" component={Stores} />
                <Route path="/enterprises/update" component={Update} />
                <Route path="/enterprises/reports" component={Reports} />

            </Switch>

            <Login></Login>
            {/* <Signin></Signin> */}
        </div>
    );
}
export default Routes;