import { Link } from "react-router-dom"


const Logo = () => {
    return (
        <Link to={'/'}>
            <picture>
                <img src="./Logo.png" alt="Logo trivia" />
            </picture>
        </Link>
    )
}

export default Logo