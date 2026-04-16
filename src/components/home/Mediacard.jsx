import './media.css'
export default function MediaCard({ title, image, rating }) {
    return (
        <div className="card-container">
           <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} className="MediaCard-cover" />
                    <div className="MediaCard-info">
                        <h3>{title}</h3>
                        <p>Rating : {rating}</p>
                        
                        
                    </div>
            </div>
        
    );
}