import style from "./header.module.css"
import { jwtDecode } from 'jwt-decode'

const Header = (props) => {

    const onProfileUserClick = () => {
        if (props.profileUserClick) {
            props.profileUserClick()
        }
    }

    const local = localStorage.getItem("user")
    let localScore = -1
    if (local) {
        const tokenDecode = jwtDecode(local)
        localScore = tokenDecode.user.score.score
    }

    return (
        <div className={style.header}>
            <a className={style.logo} href="/">
                <img src="./Logo.png" alt="Trivia Superhéroes" />
            </a>
            <div className={style.score}>
                <p>Score: {props.score || localScore} </p>
                <a href="#">Ranking: #{props.ranking || 1}</a>
            </div>
            <div onClick={onProfileUserClick} className={style.dummy}>JD</div>
        </div>

    )
}

export default Header