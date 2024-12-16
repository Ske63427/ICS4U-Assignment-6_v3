import Header from '../components/Header.jsx';
// import { Link } from "react-router-dom";
// import Footer from '../components/Footer.jsx';

function RegisterView() {
    return(
        <div>
            <Header/>
            <h1>This Bit Doesn&apos;t Work :(</h1>
            <div className="login-parent">
                <form className="userInfo">
                    <h3>Log In</h3><br/>
                    <input style={{color: "black"}} type="text" id="Username" placeholder="First Name"/><br/><br/>
                    <input style={{color: "black"}} type="text" id="Username" placeholder="Last Name"/><br/><br/>
                    <input style={{color: "black"}} type="text" id="Username" placeholder="Username"/><br/><br/>
                    <input style={{color: "black"}} type="password" id="Password" placeholder="Password"/><br/>
                    <input style={{color: "black"}} type="password" id="Password" placeholder="Re-Enter Password"/><br/>
                    <button className="login-button" id="Submit">Submit</button>
                    <button className="login-button" id="Submit">Sign In With Google</button>
                    <br/>
                </form>
            </div>
            {/*<Footer/>*/}
        </div>
    )
}

export default RegisterView;