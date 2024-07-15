import { NavLink } from "react-router-dom"
import style from './logo.module.css'

const {img} = style

const Logo = () => {
    return (
        <NavLink to={'/'}>
            <picture>
                <img className={img} src="./Logo.png" alt="Logo trivia" />
            </picture>
        </NavLink>
    )
}

export default Logo