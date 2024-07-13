import Logo from '../../components/Logo'
import LoginForm from '../../components/LoginForm'
import Confetti from '../../components/Confetti'
import Alert from '../../components/Alert'

import style from './login.module.css'

const Login = () => {

  const { fondo, card} = style

  return (
   
    <div className={fondo}>
      <div className={card}>        
          <Logo />          
          <LoginForm />
      </div>
      <div>
        <Confetti/>
      </div>
      <div>
        <Alert />
      </div>

    </div>
      
   
  )
}

export default Login