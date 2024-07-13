import React from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Alert = () => {
  const handleLogin = () => {
    toast.success("¡Inicio de sesión éxitoso!")
  };

  const handleLogout = () => {
    toast.error("¡No se puedo iniciar sesión!")
  };

  const handleCorrectAnswer = () => {
    toast.success("¡Felicitaciones! Respuesta correcta")
  };

  const handleIncorrectAnswer = () => {
    toast.error("!Vuelve a intentarlo! Respuesta incorrecta")
  };

  return (
    <div>
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <button onClick={handleLogout}>Cerrar Sesión</button>
      <button onClick={handleCorrectAnswer}>Respuesta Correcta</button>
      <button onClick={handleIncorrectAnswer}>Respuesta Incorrecta</button>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce} />
    </div>
  )
}

export default Alert