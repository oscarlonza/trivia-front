import { useNavigate } from "react-router-dom";
import { user_regex } from "../../services/validation/auth.validation.js";
import style from "./registerForm.module.css";
import { Link } from "react-router-dom";
import constants from "../../utils/constants";
import { toast } from 'react-toastify'

const RegisterForm = () => {
  const navigate = useNavigate();
  const { form, textLabel, inputs, sendButton, spanText, linkText, contentSpan } =
    style;
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, nickname, cel, password, confirm_password } = event.target;

    const user = {
      name: name.value,
      nickname: nickname.value,
      cel: cel.value,
      password: password.value,
      confirm_password: confirm_password.value,
    };

    const { error } = user_regex.validate(user);
    if (error) {
      return toast.error(error.details[0].message);
    }

    try {
      const register = await fetch(`${constants.apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!register.ok) {
        return toast.error("Error en la peticion al servidor");
      }

      const response = await register.json();

      if (!response.process) {
        return toast.error("Error al guardar el nuevo usuario");
      }

      toast.success("Usuario guardado con exit");

      navigate("/login");
    } catch (Error) {
      toast.error("Error en la peticion al servidor");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={form}>
      <div>
        <label className={textLabel}>
          Nombre:
          <input className={inputs} type="text" name="name" required />
        </label>
        <br />
        <label className={textLabel}>
          {" "}
          Nickname:
          <input className={inputs} type="text" name="nickname" required />
        </label>
        <br />
        <label className={textLabel}>
          {" "}
          Cel:
          <input className={inputs} type="text" name="cel" required />
          <br />
        </label>
        <label className={textLabel}>
          Password:
          <input className={inputs} type="password" name="password" required />
        </label>
        <br />
        <label className={textLabel}>
          {" "}
          Confirmar Password
          <input
            className={inputs}
            type="password"
            name="confirm_password"
            required
          />
        </label>

        <br />

        <input className={sendButton} type="submit" value={"Registrarse"} />
        <br />
      </div>
      <div className={contentSpan}>
        <span className={spanText}>
          ¿Ya tienes una cuenta?
          <Link className={linkText} to={"/login"}>
            Inicia sesión
          </Link>
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;
