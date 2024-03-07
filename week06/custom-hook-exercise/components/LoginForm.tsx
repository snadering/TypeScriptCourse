import React, { useState } from "react";
import useAuth from '../hooks/useAuth'
const LoginForm = () => {

    const { user, login, logout } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loggedIn, setLoggedIn] = useState(false)

    const handleLogin = () => {
        login({username, password})
        setLoggedIn(true)
    }

    const handleLogout = () => {
        logout()
        setUsername('')
        setPassword('')
        setLoggedIn(false)
    }

    return ( 
    <>
        {loggedIn ? <h2 style={{color: "green"}} >Logged In</h2> : <h2 style={{color: "red"}}>Logged Out</h2>}
        <label> Username 
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <br />
        <label> Password 
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        {!loggedIn && <button onClick={handleLogin}>Login</button>}
        {loggedIn && <button onClick={handleLogout}>Log out</button>}
    </>
     );
}
 
export default LoginForm;