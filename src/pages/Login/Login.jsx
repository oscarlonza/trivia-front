import Logo from '../../components/Logo'
import LoginForm from '../../components/LoginForm'
import Confetti from '../../components/Confetti'
import Alert from '../../components/Alert'

import style from './login.module.css'

const Login = () => {

<<<<<<< HEAD
  const { card, logo } = style

  return (
    <div className={card}>
      <div className={logo}>
          <Logo />
      </div>
      <div>
=======
  const { fondo, card} = style

  return (
   
    <div className={fondo}>
      <div className={card}>        
          <Logo />          
>>>>>>> d01a87069dc8c80abcba971c474fd2d0827de5c5
          <LoginForm />
      </div>
      <div>
        <Confetti/>
      </div>
      <div>
        <Alert />
      </div>
<<<<<<< HEAD
    </div>
=======

    </div>
      
   
>>>>>>> d01a87069dc8c80abcba971c474fd2d0827de5c5
  )
}

export default Login