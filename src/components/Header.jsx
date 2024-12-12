import './Header.css'
import logo from '../assets/321 Movies Logo.png'
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className='header'>
            <div className="logo">
                <Link to={`/`}>
                    <img id="logo" src={logo}/>
                </Link>
            </div>
            <div className="search">
                <input style={{color: "black"}} id="search" type="text" placeholder="Search"></input>
            </div>
            <div className="pages">
                <Link to={`/register`} className="button" id="button-1" href="#">Register</Link>
                <Link to={`/login`} className="button" id="button-2" href="#">Login</Link>
            </div>
        </div>
    )
}

export default Header