import style from "./footer.module.css"

const Footer = (props) => {

    return (
        <div className={style.footer}>
            <p>&copy; 2024 Marvel Trivia. Todos los derechos reservados </p>
            <a className={style.developer} href="/developer">Desarrolladores</a>
        </div>

    )
}

export default Footer