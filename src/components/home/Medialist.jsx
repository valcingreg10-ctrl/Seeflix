import { useEffect, useState } from "react"
import MediaCard from "../home/Mediacard"
import './Medialist.css'
export default function MediaList() {
    const url1 = "https://api.themoviedb.org/3/discover/movie?api_key="
    const url2 = "https://api.themoviedb.org/3/discover/tv?api_key="

    const [movies, setMovies] = useState([])
    const [tv, setTv] = useState([])
    const api_key = import.meta.env.VITE_API_KEY

    const getMovies = async () => {
        fetch(`${url1}${api_key}`).then((res)=> res.json()).then((data)=> setMovies(data.results || []));
    };

    const getTv = async () => {
        fetch(`${url2}${api_key}`).then((res)=> res.json()).then((data)=> setTv(data.results || []));
    };
    useEffect(()=> {
        getMovies();
        getTv();
    }, [])

    return (
        <section className="Big">
            <div>
                <div className="media-grid">
                    {movies.map((movie) => (
                        <MediaCard key={movie.id} title={movie.title} rating={movie.vote_average?.toFixed(1)} image={movie.poster_path} />
                    ))}
                </div>
                <div className="media-grid">
                    {tv.map((tvShow) => (
                        <MediaCard key={tvShow.id} title={tvShow.name} rating={tvShow.vote_average?.toFixed(1)} image={tvShow.poster_path} />
                    ))}
                </div>
            </div>
            

        </section>
    )
    
}
    