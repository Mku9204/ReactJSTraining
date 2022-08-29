import React from "react";
import { useHistory, useLocation } from "react-router-dom";
const About = () => {
    const h1 = useHistory()
    const location = useLocation();
    return (

        <>
            <h1>Hello you are on {location.pathname.replace('/', ' ')} page</h1>
            <button onClick={() => h1.push('/')}>Go to Home page</button>
            <button onClick={h1.goBack}>Go back</button>
        </>
    )
}
export default About;