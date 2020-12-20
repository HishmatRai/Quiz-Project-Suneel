
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, Signup, Home, Instructions, Questions,Contact } from './../../pages'
export default class BasicRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Instructions" component={Instructions} />
                <Route exact path="/Questions" component={Questions} />
                <Route exact path="/Contact" component={Contact} />
            </Router>
        )
    }
}