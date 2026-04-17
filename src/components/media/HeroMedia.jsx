import '../media/heroMedia.css'
import { useState } from 'react'
import MediaList from '../home/Medialist'
export default function HeroMedia (){
    const [filter, setFilter] = useState("all")
    const [search, setSearch] = useState("")
    return(
        <>
        <div className="h-media">

        </div>
        <div className="med-control">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search movies or tv shows ..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="filter-buttons">
                    <button
                        className={`filter-btn ${filter === "all" ? "active" : ""}`}
                        onClick={() => setFilter("all")}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${filter === "movies" ? "active" : ""}`}
                        onClick={() => setFilter("movies")}
                    >
                        Movies
                    </button>
                    <button
                        className={`filter-btn ${filter === "tv" ? "active" : ""}`}
                        onClick={() => setFilter("tv")}
                    >
                        Tv Shows
                    </button>
                </div>
            </div>
        <MediaList filter={filter} search={search} />
        </>
    )
}