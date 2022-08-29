import React from "react";
import { useHistory, useLocation } from "react-router-dom";
const Home = () => {
    const history = useHistory();
    return (

        <>
            <h1>Hello you are on Home page</h1>
            <button onClick={() => history.push('/contact')}> Go to contact page</button>
        </>
    )
}
export default Home;