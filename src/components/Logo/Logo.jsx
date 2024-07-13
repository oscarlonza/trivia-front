import { Link } from "react-router-dom"
import style from './logo.module.css'

const {img} = style

const Logo = () => {
    return (
        <Link to={'/'}>
            <picture>
                <img className={img} src="./Logo.png" alt="Logo trivia" />
            </picture>
        </Link>
    )
}

export default Logo