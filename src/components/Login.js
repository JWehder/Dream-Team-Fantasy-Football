import React, { useState } from "react";
import { useHistory } from "react-router-dom"

function Login({ setHeader, setIsLoggedIn }) {
    const history = useHistory()

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setHeader(userData.username)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoggedIn(true);
        history.push("/");
    }

    return (
        <div>
            <h2>Login Here:</h2>

            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={userData.username}
            name="username" 
            placeholder="username"
            onChange={handleChange}
            />
            <input 
            type="password" 
            value={userData.password}
            name="password"
            placeholder="password"
            onChange={handleChange}
            />
            <button type="submit">Login</button>
            </form>
        </div>


    )
}

export default Login;