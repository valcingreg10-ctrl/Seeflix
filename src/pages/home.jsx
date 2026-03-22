import Header from "../components/home/Header"
import MediaList from "../components/home/Medialist"
import { top_shows } from "../data/top_shows"
import { trending_movies } from "../data/trending_movies"

export default function Home() {
    return (<div>
    <Header />
    <MediaList title="Top Shows" items={top_shows} />
    <MediaList title="Trending Movies" items={trending_movies} />
    
    </div>
     
    )
}










