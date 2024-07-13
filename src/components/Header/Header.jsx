import style from "./header.module.css"
import { jwtDecode } from 'jwt-decode'
import UserIconMenu from '../UserIcon/'

const Header = (props) => {

    let localScore = -1
    let scoreElement = <></>
    const rankingUrl = "#"
    let rankingElement = <a href={rankingUrl}>Ranking</a>
    let userElement = <div className={style.dummy}>
        <a href="/login">Log in</a>
    </div>

    const local = localStorage.getItem("user")
    if (local) {
        try {
            const tokenDecode = jwtDecode(local)
            localScore = tokenDecode.user.score.score
            scoreElement = <p>Score: {props.score || localScore} </p>
            rankingElement = <a href={rankingUrl}>Ranking: #{props.ranking || 1}</a>
            userElement = <UserIconMenu />
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={style.header}>
            <div className={style.content}>
                <a className={style.logo} href="/">
                    <img src="./Logo.png" alt="Trivia Superhéroes" />
                </a>
                <div className={style.score}>
                    {scoreElement}
                    {rankingElement}
                </div>
                {userElement}
            </div>
        </div>

    )
}

export default Header