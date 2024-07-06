import user_regex from "../../services/validation/auth.validation.js"


const RegisterForm = () => {

  const handleSubmit = async event => {
    event.preventDefault()

    const { name, nickname, cel, password, confirm_password } = event.target

    const user = {
      name: name.value,
      nickname: nickname.value, 
      cel: cel.value,
      password: password.value,
      confirm_password: confirm_password.value
    }    
  
    const { error } = user_regex.validate(user)
    if (error) return alert(error.details[0].message)

    const register = await fetch('http://127.0.0.1:9000/api/auth/register', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(user)
    })

    const response = await register.json()

    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" required />
      <br />
      <input type="text" name="nickname" placeholder="Usuario" required/>
      <br />
      <input type="text" name="cel" placeholder="+57300000000" required/>
      <br />
      <input type="password" name="password" placeholder="******" required/>
      <br />
      <input type="password" name="confirm_password" placeholder="******" required/>
      <br />
      <input type="submit" value={"Registrar"} />
    </form>
  )
}

export default RegisterForm