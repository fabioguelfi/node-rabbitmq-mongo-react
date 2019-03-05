import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginComponent } from "../containers/Login";
import NavbarComponent from '../components/navbar';
import MainComponent from "../containers/Main";

const Routes = [
    { label: 'Login', path: '/' },
    { label: 'Main', path: '/main' }
]

function AppRouter(props) {
    return (
        <Router>
            <React.Fragment>
                <NavbarComponent routes={Routes} />
                <Route path='/' exact component={LoginComponent}/>
                <Route path='/main' exact component={MainComponent} />
            </React.Fragment>
        </Router>
    );
}

export default AppRouter