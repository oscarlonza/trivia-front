import style from "./header.module.css"
import { jwtDecode } from 'jwt-decode'
import UserIconMenu from '../UserIcon/'
import { NavLink } from "react-router-dom"
import isAuthenticated from "../../services/auth"

const Header = (props) => {

    let localScore = -1
    let scoreElement = <></>
    const rankingUrl = "/score"
    let rankingElement = <NavLink to={rankingUrl}>Ranking</NavLink>
    let userElement = <div className={style.dummy}>
        <NavLink to="/login">Log in</NavLink>
    </div>

    if(isAuthenticated()){
        userElement = <UserIconMenu />
        if(props.ranking > 0)
            rankingElement = <NavLink to={rankingUrl}>Ranking: # {props.ranking}</NavLink>
        if(props.score)
            scoreElement = <p>Score: {props.score} </p>
    }

    return (
        <div className={style.header}>
            <NavLink className={style.logo} to="/">
                <img src="./Logo.png" alt="Trivia Superhéroes" />
            </NavLink>
            <div className={style.score}>
                {scoreElement}
                {rankingElement}
            </div>
            {userElement}
        </div>

    )
}

export default Header