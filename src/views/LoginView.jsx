import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useStoreContext } from '../context/index.jsx';
import './LoginView.css'

function LoginView() {
    const navigate = useNavigate()
    const user = useRef('')
    const { setUser } = useStoreContext()
    const [password, setPassword] = useState("")
    const validPassword="password"; {/*the password of an individual who takes their cybersecurity seriously*/}

    function login(e){
        e.preventDefault()
        if (password === validPassword){
            navigate('/movies/all')
            setUser(user.current.value)
        }
    }
    return(
        <div>
            <Header/>
            <div className="login-parent">
                <form onSubmit={(e) => login(e)} className="userInfo">
                    <h3>Log In</h3><br/>
                    <input
                        type="text"
                        id="Username"
                        ref={user}
                        style={{color: "black"}}
                        placeholder="Username"
                        required
                    /><br/><br/>
                    <input
                        type="password"
                        id="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{color: "black"}}
                        placeholder="Password"
                        required
                    /><br/>
                    <button className="login-button" id="Submit">Submit</button>
                    <br/>
                    <p className="signUpPrompt">No Account? <Link to={`/register`} className="signUpButton">Sign Up</Link></p>
                </form>
            </div>
            {/*<Footer/>*/}
        </div>
    )
}

export default LoginView;