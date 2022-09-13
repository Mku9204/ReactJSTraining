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
import PrivateRoute from "./privateRoute";

const FbRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/marketpalce" element={<Market />} />
                <Route path="/group" element={<Group />} />
                <Route path="/messanger" element={<Messanger />} />
                <Route path="/live" element={<Live />} />
            </Route>
            <Route path="/signup" element={
                <SignUp />
            }
            />

        </Routes>
    )
}
export default FbRoute;