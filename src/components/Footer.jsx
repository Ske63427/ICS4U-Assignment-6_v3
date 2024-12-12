import './Footer.css'

function Footer(){
    return (
        <div className='footer'>
            <div className="contact">
                <u>Contact Us</u><br/>
                (123)-456-7890<br/>
                contact@321Movies.ca<br/>
                440 Unwin Ave<br/>
                Toronto, ON M4M 3B9<br/><br/>
                Aidan Samaroo
            </div>
            <div className="about">
                <u>About</u><br/>
                <a>FAQs</a><br/>
                <a href="#">Meta</a><br/>
                <a href="#">X</a><br/>
                <a href="#">Instagram</a><br/>
                <a href="#">Tiktok</a><br/>
                <a href="#">YouTube</a><br/>
            </div>
            <div className="other">
                <u>Other</u><br/>
                <a>Terms of Use</a><br/>
                <a>Cookie Prefrences</a><br/>
                <a>Privacy</a><br/>
                <a>Gift Cards</a>
            </div>
        </div>
    )
}

export default Footer;