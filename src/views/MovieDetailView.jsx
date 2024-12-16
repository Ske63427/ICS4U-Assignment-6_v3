import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../context";
import './MovieDetailView.css'

function MovieDetailView(){
    const [movieData, setMovieData] = useState([]);
    const { cart, setCart } = useStoreContext();
    const params = useParams();

    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`
            );
            setMovieData(response.data);
        })();
    }, []);

    console.log(movieData);

    // function button(){
    //     console.log("you touched me")
    // }

    return(
        <div className={"MovieDetails"}>
            <div className="poster-div1"><img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={"poster"}/></div>
            <div className="text-div2">
                <h1 id="movie-title">{movieData.title}</h1>
                <p>{movieData.release_date}</p>
                <p>{movieData.overview}</p>
            </div>
            <div className="buy-div3">
                <button
                    onClick={() => setCart((prevCart) => prevCart.set(
                        params.id, {
                            title: movieData.original_title,
                            url: movieData.poster_path
                        }
                    ))}
                    // onClick={button()}
                    id="buyButton"
                >Buy
                </button>
            </div>


        </div>
    )
}

export default MovieDetailView