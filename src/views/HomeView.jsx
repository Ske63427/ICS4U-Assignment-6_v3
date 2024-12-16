import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from "react-router-dom";
import './HomeView.css'
import {useEffect, useState} from "react";
import axios from "axios";

function HomeView() {
    const [movies, setMovies] = useState([])

    function shuffle(array) {
        //i love stack overflow
        let currentIndex = array.length;

        while (currentIndex !== 0) {

            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array
    }

    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setMovies(shuffle(response.data.results))
        })();
    }, []);

    return (
        <div>
            <Header/>
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
            <div>
                <div className="filler"></div>
                <h1>Now Playing</h1>
                <div className="filler"></div>
                <div className="posters">
                    {movies.length > 19 && (
                        <>
                            <div className="movie" id="movie-1">
                                <img src={`https://image.tmdb.org/t/p/w500${movies[0].poster_path}`} className="poster"
                                     alt={"Poster 1"}/>
                            </div>
                            <div className="movie" id="movie-2">
                                <img src={`https://image.tmdb.org/t/p/w500${movies[1].poster_path}`} className="poster"
                                     alt={"Poster 2"}/>
                            </div>
                            <div className="movie" id="movie-3">
                                <img src={`https://image.tmdb.org/t/p/w500${movies[2].poster_path}`} className="poster"
                                     alt={"Poster 3"}/>
                            </div>
                        </>
                    )}
                </div>
                <div className="filler"></div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomeView