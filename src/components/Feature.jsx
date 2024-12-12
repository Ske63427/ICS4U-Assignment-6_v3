import './Feature.css'
import axios from "axios";
import { useEffect, useState } from "react";

function Feature(){
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

    return(
        <div>
            <div className="filler"></div>
            <h1>Now Playing</h1>
            <div className="filler"></div>
            <div className="posters">
                {movies.length > 19 && (
                    <>
                        <div className="movie" id="movie-1">
                            <img src={`https://image.tmdb.org/t/p/w500${movies[0].poster_path}`} className="poster" alt={"Poster 1"}/>
                        </div>
                        <div className="movie" id="movie-2">
                            <img src={`https://image.tmdb.org/t/p/w500${movies[1].poster_path}`} className="poster" alt={"Poster 2"}/>
                        </div>
                        <div className="movie" id="movie-3">
                            <img src={`https://image.tmdb.org/t/p/w500${movies[2].poster_path}`} className="poster" alt={"Poster 3"}/>
                        </div>
                    </>
                )}
            </div>
            <div className="filler"></div>
        </div>
    )
}

export default Feature