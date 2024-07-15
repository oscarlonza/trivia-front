import style from './Share.module.css'
import Modal from '../Modal';
import React, { useEffect } from "react";
import constants from '../../utils/constants';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

const Share = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const hadleSubmit = async event => {
        event.preventDefault()

        const token = localStorage.getItem('user')
        if (!token) return toast.error('Regístrate para compartir')

        const token_decode = jwtDecode(token)
        const userName = token_decode.user.nickname

        if (!userName) return toast.error('No se encontró nombre de usuario')

        const { number } = event.target
        const body = { "cel": number.value }

        try {
            const sendSMS = await fetch(`${constants.apiUrl}/api/send`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": token
                },
                body: JSON.stringify(body)
            })

            if (!sendSMS.ok) {
                return toast.error('Error en la peticion al servidor')
            }

            const response = await sendSMS.json()

            if (!response.process) {
                return toast.error('Error al enviar mensaje')
            }

            toast.success('¡Invitación enviada!')
            setOpen(false);

        } catch (error) {
            toast.error('Error en la peticion al servidor')
        }
    }

    return (
        <>
            <button className={style.shareButton} onClick={handleOpen}>
                <img className={style.shareIcon} src="./share-icon.png" alt="Logo trivia" />
            </button>

            <Modal isOpen={open} onClose={handleClose}>
                <h1>Compartir</h1>
                <p>Invita a tus amigos a jugar trivia Marvel a través de SMS!</p>
                <form onSubmit={hadleSubmit} className={style.shareForm}>
                    <label htmlFor="number">+57</label>
                    <input name="number" type="tel" placeholder="xxx xxxxxxx" maxLength="10" required></input>
                    <div className={style.shareButtons}>
                        <button type='submit'>Enviar</button>
                        <button type="button" onClick={handleClose}>Cancelar</button>
                    </div>
                </form>
            </Modal>
        </>

    )
}


export default Share;