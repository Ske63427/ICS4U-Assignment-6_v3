import './Hero.css'
import { Link } from "react-router-dom";

function Hero(){
    return(
        <div className="parent">
            <div className="plan" id="plan-1">
                <h3>Paid With Ads</h3><br/>
                <h4>$6.99/month</h4>
                <p>2 Devices, 1080p, 5.1 Audio</p><br/>
                <Link to={`/plan`} id="pay-now" href="#">
                    <a href="#">Pay Now</a>
                </Link>

            </div>

            <div className="plan" id="plan-2">
                <h3>Standard</h3><br/>
                <h4>$12.99/month</h4>
                <p>3 Devices, 4K, 5.1 Audio</p><br/>
                <Link to={`/plan`} id="pay-now" href="#">
                    <a href="#">Pay Now</a>
                </Link>
            </div>
                
            <div className="plan" id="plan-3">
                <h3>Premium</h3><br/>
                <h4>$18.99/month</h4>
                <p>4 Devices, 4K, Dolby Atmos</p><br/>
                <Link to={`/plan`} id="pay-now" href="#">
                    <a href="#">Pay Now</a>
                </Link>
            </div>
        </div>
    )
}

export default Hero