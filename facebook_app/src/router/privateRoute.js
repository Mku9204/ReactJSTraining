import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import GridLayout from "../util/gridLayout";
import LocalStorageService from "../util/localStorageService";

const PrivateRoute = () => {

    const isLogin = LocalStorageService.getAccessToken()
    return (
        <>
            {isLogin ?
                (<GridLayout><Outlet /></GridLayout>)
                : (<Navigate to={'/'} />)
            }
        </>
    )
}
export default PrivateRoute;