import style from "./header.module.css"
import UserIconMenu from '../UserIcon/'
import { NavLink } from "react-router-dom"
import isAuthenticated from "../../services/auth"
import Share from "../Share"

const Header = (props) => {

    let localScore = -1
    let scoreElement = <></>
    const rankingUrl = "/score"
    let rankingElement = <NavLink to={rankingUrl}>Ranking</NavLink>
    let userElement = <div className={style.dummy}>
        <NavLink to="/login">Log in</NavLink>
    </div>
    let shareElement = <></>

    if (isAuthenticated()) {
        userElement = <UserIconMenu />
        if (props.ranking > 0)
            rankingElement = <NavLink to={rankingUrl}>Ranking: # {props.ranking}</NavLink>
        if (props.score)
            scoreElement = <p>Score: {props.score} </p>

        shareElement = <div className={style.shareButton}><Share /></div>
    }

    return (
        <div className={style.header}>
            <NavLink className={style.logo} to="/">
                <img src="./Logo.png" alt="Trivia Superhéroes" />
            </NavLink>
            <div className={style.score}>
                {shareElement}
                {scoreElement}
                {rankingElement}
            </div>
            {userElement}
        </div>

    )
}

export default Header