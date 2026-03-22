import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <header>   
            <h1 className="as">Seeflix</h1>
               <nav>
                    <ul className="ash">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/media">Media</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
        </header>
       
    )
}