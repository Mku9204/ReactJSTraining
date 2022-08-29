import React from "react";
import { useHistory } from "react-router-dom";
const NotFound = () => {
    const h1 = useHistory()
    return (
        <>
            <h1>Not found.... Try Again</h1>
            <button onClick={h1.goBack}>Go to BACK page</button>
        </>
    )
}
export default NotFound