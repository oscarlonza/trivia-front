import { Link } from "react-router-dom"
<<<<<<< HEAD

=======
import style from './logo.module.css'

const {img} = style
>>>>>>> d01a87069dc8c80abcba971c474fd2d0827de5c5

const Logo = () => {
    return (
        <Link to={'/'}>
            <picture>
<<<<<<< HEAD
                <img src="./Logo.png" alt="Logo trivia" />
=======
                <img className={img} src="./Logo.png" alt="Logo trivia" />
>>>>>>> d01a87069dc8c80abcba971c474fd2d0827de5c5
            </picture>
        </Link>
    )
}

export default Logo