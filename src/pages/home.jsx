import Header from "../components/home/Header"
import MediaList from "../components/home/Medialist"
import '../components/home/home.css'
export default function Home() {
    return (
        <div>
            <Header />
            <div className="for-title">
                <h2>Trending</h2>
            </div>
            <MediaList limit={4} />
            
        </div>
    )
}
     
    











