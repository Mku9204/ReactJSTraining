import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import NavBar from "../components/navbar/navbar";
import About from "../components/pages/about";
import Contact from "../components/pages/contact";
import Packages from "../components/pages/package";
import Places from "../components/pages/places";
import Home from "../components/pages/home";
const Router1 = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/package">
                        <Packages />
                    </Route>
                    <Route path="/places">
                        <Places />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        </>


    )
}
export default Router1;