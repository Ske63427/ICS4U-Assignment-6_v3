import './Genre.css'
import {useEffect, useState} from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

function Genre(){

    const user = "Aidan"; {/*change this to username prop from login*/}
    const [movies, setMovies] = useState([])
    const [genre, setGenre] = useState('28')

    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${genre}`
            );
            setMovies(response.data.results);
        })();
    }, [genre]);

    console.log(movies)
    console.log(genre)

    return(
        <div>
            <div className="genre-parent">
                <div className="gdiv1"><button autoFocus onClick={() => setGenre('28')} id="genre">Action</button></div>
                <div className="gdiv2"><button onClick={() => setGenre('10752')} id="genre">War</button></div>
                <div className="gdiv3"><button onClick={() => setGenre('878')} id="genre">Sci-Fi</button></div>
                <div className="gdiv4"><button onClick={() => setGenre('14')} id="genre">Fantasy</button></div>
                <div className="gdiv5"><button onClick={() => setGenre('80')} id="genre">Crime</button></div>
                <div className="gdiv6"><button onClick={() => setGenre('53')} id="genre">Thriller</button></div>
                <div className="gdiv7"><button onClick={() => setGenre('27')} id="genre">Horror</button></div>
                <div className="gdiv8"><button onClick={() => setGenre('35')} id="genre">Comedy</button></div>
                <div className="gdiv9"><button onClick={() => setGenre('16')} id="genre">Animation</button></div>
                <div className="gdiv10"><button onClick={() => setGenre('36')} id="genre">History</button></div>
                <div className="gdiv11"><button onClick={() => setGenre('37')} id="genre">Western</button></div>
                <div className="gdiv12"><button onClick={() => setGenre('9648')} id="genre">Mystery</button></div>
            </div>
            <div className="MovieParent">
                {movies.length > 1 && (
                    <>
                        {Array.from({length: 20 }).map((_, index) => (
                            <div
                                key={index}
                                className={`div${index + 1}`}
                                id={"poster"}
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movies[index].poster_path})`,
                                    backgroundSize: 'contain',
                                    borderRadius: '10px'
                                }}>
                                <h2 id={"movieInfo"}>{movies[index].title}</h2>
                                <p id={"movieInfo"}>{movies[index].release_date}</p><br/>
                                <p id={"movieInfo"}>{movies[index].overview}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>

    )
}

export default Genre;