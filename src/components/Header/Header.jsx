import style from "./header.module.css"
import { jwtDecode } from 'jwt-decode'

const Header = (props) => {

    const local = localStorage.getItem("user")
    let localScore = -1
    if (local) {
        const tokenDecode = jwtDecode(local)
        localScore = tokenDecode.user.score.score
    }

    return (
        <div className={style.header}>
            <div className={style.content}>
                <a className={style.logo} href="/">
                    <img src="./Logo.png" alt="Trivia Superhéroes" />
                </a>
                <div className={style.score}>
                    <p>Score: {props.score || localScore} </p>
                    <a href="#">Ranking: #{props.ranking || 1}</a>
                </div>
                <div className={style.dummy}>JD</div>
            </div>
        </div>

    )
}

export default Header