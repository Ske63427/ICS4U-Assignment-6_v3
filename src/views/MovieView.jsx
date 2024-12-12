import Header from '../components/Header.jsx';
import Genres from '../components/Genre.jsx'
import Footer from '../components/Footer.jsx';
import { useLocation } from "react-router-dom";

function MovieView() {
    const location = useLocation();
    const username = location.state?.username || "Guest";

    return(
        <div>
            <Header/>
            <br/><h1>Welcome, {username}</h1>
            <Genres/>
            <Footer/>
        </div>
    )
}

export default MovieView;