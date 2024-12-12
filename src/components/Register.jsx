import './Register.css'
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="login-parent">
            <form className="userInfo">
                <h3>Log In</h3><br/>
                <input style={{color: "black"}} type="text" id="Username" placeholder="First Name"/><br/><br/>
                <input style={{color: "black"}} type="text" id="Username" placeholder="Last Name"/><br/><br/>
                <input style={{color: "black"}} type="text" id="Username" placeholder="Username"/><br/><br/>
                <input style={{color: "black"}} type="password" id="Password" placeholder="Password"/><br/>
                <input  style={{color: "black"}}type="password" id="Password" placeholder="Re-Enter Password"/><br/>
                <button className="login-button" id="Submit">Submit</button>
                <br/>
            </form>
        </div>
    )
}

export default Register;