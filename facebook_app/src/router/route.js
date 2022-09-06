import React from "react";
import { Route, Routes } from "react-router-dom";
import Group from "../pages/group";
import Home from "../pages/home";
import Live from "../pages/live";
import Login from "../pages/login";
import Market from "../pages/marketplace";
import Messanger from "../pages/messanger";
import Notification from "../pages/notification";
import SignUp from "../pages/singup";
import Watch from "../pages/watch";
import GridLayout from "../util/gridLayout";

const FbRoute = () => {
    return (
        <Routes>
            <Route path="/" element={
                <GridLayout>
                    <Home />
                </GridLayout>}
            />
            <Route path="/notification" element={
                <GridLayout>
                    <Notification />
                </GridLayout>}
            />
            <Route path="/watch" element={
                <GridLayout>
                    <Watch />
                </GridLayout>}
            />
            <Route path="/marketpalce" element={
                <GridLayout>
                    <Market />
                </GridLayout>}
            />
            <Route path="/group" element={
                <GridLayout>
                    <Group />
                </GridLayout>}
            />
            <Route path="/messanger" element={
                <GridLayout>
                    <Messanger />
                </GridLayout>}
            />
            <Route path="/live" element={
                <GridLayout>
                    <Live />
                </GridLayout>}
            />
            <Route path="/login" element={
                <GridLayout>
                    <Login />
                </GridLayout>}
            />

        </Routes>
    )
}
export default FbRoute;