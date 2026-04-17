import { useEffect, useState } from "react"
import MediaCard from "../home/Mediacard"
import './Medialist.css'
export default function MediaList({ limit, filter = "all", search = "" }) {
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

    const filterBySearch = (items, nameKey) => {
        if (!search.trim()) return items
        return items.filter((item) =>
            item[nameKey]?.toLowerCase().includes(search.toLowerCase())
        )
    }

    let filteredMovies = filter !== "tv" ? filterBySearch(movies, "title") : []
    let filteredTv = filter !== "movies" ? filterBySearch(tv, "name") : []

    if (limit) {
        filteredMovies = filteredMovies.slice(0, limit)
        filteredTv = filteredTv.slice(0, limit)
    }
    const noResults = filteredMovies.length === 0 && filteredTv.length === 0

    return (
        <section className="Big">
             {noResults && (
                <p className="no-results">There's no result for "{search}"</p>
            )}
 
            {filteredMovies.length > 0 && (
                <>
                    {filter === "all"}
                    <div className="media-grid">
                        {filteredMovies.map((movie) => (
                            <MediaCard
                                key={movie.id}
                                title={movie.title} 
                                rating={movie.vote_average?.toFixed(1)} 
                                image={movie.poster_path}
                            />
                        ))}
                    </div>
                </>
            )}
                {filteredTv.length > 0 && (
                <>
                    {filter === "all"}
                    <div className="media-grid">
                        {filteredTv.map((tvShow) => (
                            <MediaCard
                                key={tvShow.id}
                                title={tvShow.name}
                                rating={tvShow.vote_average?.toFixed(1)}
                                image={tvShow.poster_path}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    )
}