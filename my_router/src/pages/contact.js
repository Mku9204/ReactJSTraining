import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useGetPosts from "../api/getPost";
const Contact = () => {
    const h1 = useHistory();
    const location = useLocation();
    const { loading, data, getPosts } = useGetPosts();
    React.useEffect(() => {
        getPosts();
    }, [])

    return (
        <>
            <h1>Hello you are on {location.pathname.replace('/', ' ')} page</h1>
            <button onClick={() => h1.push('/about')}> Go to about page</button >
            <button onClick={h1.goBack}>Go back</button>
            <button onClick={() => h1.push('/')}>Go to Home page</button>

            {loading ? (<div>loading........</div>) : (<div style={{ padding: '15px 80px' }}>
                {data.map((posts, index) => {
                    return (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirecation: 'column',
                            border: '2px solid black',
                            alignItems: 'center',
                            alignContent: 'center',
                            flexWrap: 'wrap',
                            borderRadius: '50px',
                            padding: '5px 50px',
                            margin: '20px 20px',
                        }}>

                            Title: <p style={{
                                display: 'flex',
                                flexDirecation: 'column',
                                border: '2px solid black',
                                alignItems: 'center',
                                alignContent: 'center',
                                flexWrap: 'wrap',
                                borderRadius: '50px',
                                padding: '5px 50px',
                            }}>{posts.title}</p>
                            <p >{posts.body}</p>
                        </div>
                    )
                })}

            </div>)
            }

        </>
    )
}
export default Contact;