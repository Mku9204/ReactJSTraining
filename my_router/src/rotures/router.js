import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from "../pages/navbar";
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import NotFound from "../pages/notFond";
const Routes1 = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes1;