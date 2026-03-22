import MediaCard from "../home/Mediacard"
import './Medialist.css'
export default function MediaList({ title, items, type = false }) {
    return (
        <section className="Big">
            <div>
                <h2>{title}</h2>
                <div className="media-grid">
                    {items.map((item) => (
                        <MediaCard key={item.id} title={item.title} cover={item.cover} rating={item.rating} type={item.type} />
                    ))}
                </div>
            </div>

        </section>
    )
    
}
    