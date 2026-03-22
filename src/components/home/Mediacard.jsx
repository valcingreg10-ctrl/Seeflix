import './media.css'
export default function MediaCard({ cover, title, rating, type=false }) {
    return (
        <div className="card-container">
           <img src={cover} alt={title} className="MediaCard-cover" />
                    <div className="MediaCard-info">
                        <h3>{title}</h3>
                        <p>Rating: {rating}</p>
                        <p>{type}</p>
                        <type></type>
                    </div>
            </div>
        
    );
}