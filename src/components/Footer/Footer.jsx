import { NavLink } from "react-router-dom"
import style from "./footer.module.css"

const Footer = (props) => {

    return (
        <div className={style.footer}>
            <p>&copy; 2024 Marvel Trivia. Todos los derechos reservados </p>
            <NavLink className={style.developer} to="/developer">Desarrolladores</NavLink>
        </div>

    )
}

export default Footer