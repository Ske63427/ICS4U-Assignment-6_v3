import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import {Link, useLocation, useNavigate, Outlet} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"
import './MovieView.css'
import { useStoreContext } from "../context/index.jsx";

function MovieView() {
    // const location = useLocation();
    const navigate = useNavigate();
    // const username = location.state?.username;
    const { user } = useStoreContext();

    // const genres = {
    //     28 : "Action",
    //     10752 : "War",
    //     878 : "Sci-Fi",
    //     14 : "Fantasy",
    //     80 : "Crime",
    //     53 : "Thriller",
    //     27 : "Horror",
    //     35 : "Comedy",
    //     16 : "Animation",
    //     36 : "History",
    //     37 : "Western",
    //     9648 : "Mystery"
    // }

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

    function loadMovie(id) {
        navigate(`/movies/${id}`);
    }

    console.log(movies)
    console.log(genre)

    return(
        <div>
            <br/><h1>Welcome, {user}</h1>
            <div>
                <div className="genre-parent">
                    {/*<>*/}
                    {/*    {Array.from({length: genres.length}).map((_, index) => (*/}
                    {/*        <div*/}
                    {/*            key={index}*/}
                    {/*            className={`gdiv${index + 1}`}*/}
                    {/*            onClick={() => setGenre(genres)}*/}
                    {/*        >*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</>*/}
                    <div className="gdiv1">
                        <button autoFocus onClick={() => setGenre('28')} id="genre">Action</button>
                    </div>
                    <div className="gdiv2">
                        <button onClick={() => setGenre('10752')} id="genre">War</button>
                    </div>
                    <div className="gdiv3">
                        <button onClick={() => setGenre('878')} id="genre">Sci-Fi</button>
                    </div>
                    <div className="gdiv4">
                        <button onClick={() => setGenre('14')} id="genre">Fantasy</button>
                    </div>
                    <div className="gdiv5">
                        <button onClick={() => setGenre('80')} id="genre">Crime</button>
                    </div>
                    <div className="gdiv6">
                        <button onClick={() => setGenre('53')} id="genre">Thriller</button>
                    </div>
                    <div className="gdiv7">
                        <button onClick={() => setGenre('27')} id="genre">Horror</button>
                    </div>
                    <div className="gdiv8">
                        <button onClick={() => setGenre('35')} id="genre">Comedy</button>
                    </div>
                    <div className="gdiv9">
                        <button onClick={() => setGenre('16')} id="genre">Animation</button>
                    </div>
                    <div className="gdiv10">
                        <button onClick={() => setGenre('36')} id="genre">History</button>
                    </div>
                    <div className="gdiv11">
                        <button onClick={() => setGenre('37')} id="genre">Western</button>
                    </div>
                    <div className="gdiv12">
                        <button onClick={() => setGenre('9648')} id="genre">Mystery</button>
                    </div>
                </div>

                <div className="MovieParent">
                    {movies.length > 1 && (
                        <>
                            {Array.from({length: 20}).map((_, index) => (
                                <div
                                    key={index}
                                    className={`div${index + 1}`}
                                    id={"poster"}
                                    style={{
                                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movies[index].poster_path})`,
                                        backgroundSize: 'contain',
                                        borderRadius: '10px'
                                    }}
                                    onClick={() => {
                                        loadMovie(movies[index].id)
                                    }}
                                >
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MovieView;