import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoggedIn(true);
        setHeader(userData.username)
        history.push("/");
    }

    return (
        <div className="Login">
        <h2 style={{textAlign:"center", paddingBottom: "30px"}}>Please Login:</h2>
            <div className="loginForm">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                value= {userData.username} 
                type="text" 
                placeholder="Username" 
                name="username"
                onChange={handleChange}
                required
                className="loginInputs"
                />
              </Form.Group>
        
              <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                value={userData.password}
                name="password"
                onChange={handleChange}
                required
                className="loginInputs"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </div>
        </div>
          
    )
}

export default Login;