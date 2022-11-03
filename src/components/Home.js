import React from "react";
import { Redirect } from "react-router-dom"

function Home({ header, isLoggedIn }) {
    if (!isLoggedIn) return <Redirect to="/login" />

    return (
        <div>
            <h1>Welcome, {header}</h1>
            
        </div>
    )
}

export default Home;