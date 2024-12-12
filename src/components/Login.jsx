import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const validPassword="password"; {/*the password of an individual who takes their cybersecurity seriously*/}
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login(e){
        e.preventDefault()
        if (password === validPassword){
            navigate('/movie', {state: {username}})
        }
    }
    return (
        <div className="login-parent">
            <form onSubmit={(e) => login(e)} className="userInfo">
                <h3>Log In</h3><br/>
                <input
                    type="text"
                    id="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{color: "black"}}
                    placeholder="Username"/><br/><br/>
                <input
                    type="password"
                    id="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{color: "black"}}
                    placeholder="Password"/><br/>
                <button className="login-button" id="Submit">Submit</button><br/>
                <p className="signUpPrompt">No Account? <Link to={`/register`} className="signUpButton">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Login;
