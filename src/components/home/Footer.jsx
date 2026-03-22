import '../home/footer.css'
import { Link } from 'react-router-dom'
export default function Footer(){
    return(
        <>
        <footer>
            <div className="pres-foot">
            <h2>Seeflix</h2>
            <p>© 2026 Seeflix. All rights reserved.</p>
            </div>
            <div className="foot-nav">
                <nav>
                    <ul className="f-n">
                        <h4>Return to :</h4>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/media">Media</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

            </div>


        </footer>
        
        </>
    )
}