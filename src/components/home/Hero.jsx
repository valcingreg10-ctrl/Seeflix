import './hero.css'
import { Link } from 'react-router-dom'
export default function Hero(){
    return (
        <div className="ex"><br />
            <div>
                <p className="c"><strong> Streaming is no<br />longer a luxury,<br />it'a lifestyle.</strong></p>
            </div>
            <Link to="./media "><button className="b">Get Started</button></Link>
        </div>
    )
}