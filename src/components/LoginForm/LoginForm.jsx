import { useNavigate } from "react-router-dom"
import { login_regex } from "../../services/validation/auth.validation"
<<<<<<< HEAD

=======
import style from './loginForm.module.css'

const {form, input, button, label, link} = style
>>>>>>> d01a87069dc8c80abcba971c474fd2d0827de5c5

const LoginForm = () => {

  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()

    const { nickname, password} = event.target

    const credentials = {
      nickname: nickname.value,
      password: password.value
    }

    const { error } = login_regex.validate(credentials)
    if (error) return alert(error.details[0].message)

    try {
      const login = await fetch('http://127.0.0.1:9000/api/auth/login', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(credentials)
      })

      if (!login.ok) return alert('Error en la peticion al servidor')

      const response = await login.json()

      if (!response.process) return alert('Error al loguear usuario')

      alert('Usuario logueado con exito')

      localStorage.setItem('user', response.data)

      const a = localStorage.getItem('user')
      console.log(a);

      navigate('/')

    } catch (Error) {
      alert('Error en la peticion al servidor')
    }

  }

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit}>
      <input type="text" name="nickname" placeholder="nickname" required />
      <br />
      <input type="password" name="password" placeholder="******" required />
      <br />
      <input type="submit" value={"Ingresar"} />
=======
    <form className={form} onSubmit={handleSubmit}>
      <label htmlFor="nickname" className={label}>Nickname</label>
      <input className={input} type="text" name="nickname" placeholder="nickname" required /> 
      <label htmlFor="password" className={label}>Password</label>   
      <input className={input} type="password" name="password" placeholder="******" required />      
      <input className={button} type="submit" value={"Ingresar"} />
      <a href="/register" className={link}>Registrarse</a>
>>>>>>> d01a87069dc8c80abcba971c474fd2d0827de5c5
    </form>
  )
}

export default LoginForm