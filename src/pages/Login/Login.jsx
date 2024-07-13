import Logo from '../../components/Logo'
import LoginForm from '../../components/LoginForm'
import Confetti from '../../components/Confetti'
import Alert from '../../components/Alert'

import style from './login.module.css'

const Login = () => {

  const { card, logo } = style

  return (
    <div className={card}>
      <div className={logo}>
          <Logo />
      </div>
      <div>
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