import Logo from '../../components/Logo'
import LoginForm from '../../components/LoginForm'

import style from './login.module.css'

const Login = () => {

  const { fondo, card} = style

  return (
   
    <div className={fondo}>
      <div className={card}>        
          <Logo />          
          <LoginForm />
      </div>

    </div>
      
   
  )
}

export default Login