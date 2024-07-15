import { NavLink, useNavigate } from "react-router-dom"
import { login_regex } from "../../services/validation/auth.validation"
import style from './loginForm.module.css'
import constants from '../../utils/constants';
import { toast } from 'react-toastify'

const { form, input, button, label, link } = style

const LoginForm = () => {

  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()

    const { nickname, password } = event.target

    const credentials = {
      nickname: nickname.value,
      password: password.value
    }

    const { error } = login_regex.validate(credentials)
    if (error) {
      return toast.error(error.details[0].message)
    }

    try {
      const login = await fetch(`${constants.apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(credentials)
      })

      if (!login.ok){ 
        return toast.error('Error en la peticion al servidor')
      }

      const response = await login.json()

      if (!response.process) {
        return toast.error('Error al loguear usuario')
      }

      toast.success('Usuario logueado con exito')

      localStorage.setItem('user', response.data)

      navigate('/')

    } catch (Error) {
      toast.error('Error en la peticion al servidor')
    }

  }

  return (
    <form className={form} onSubmit={handleSubmit}>
      <label htmlFor="nickname" className={label}>Nickname</label>
      <input className={input} type="text" name="nickname" placeholder="nickname" required />
      <label htmlFor="password" className={label}>Password</label>
      <input className={input} type="password" name="password" placeholder="******" required />
      <input className={button} type="submit" value={"Ingresar"} />
      <NavLink to="/register" className={link}>Registrarse</NavLink>
    </form>
  )
}

export default LoginForm