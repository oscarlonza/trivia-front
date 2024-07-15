import style from './Share.module.css'
import Modal from '../Modal';
import React from "react";
import constants from '../../utils/constants';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

const isLoggedIn = localStorage.getItem('user')

const Share = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    
    const token = localStorage.getItem('user')    
    const token_decode = jwtDecode(token)
    const userName = token_decode.user.nickname

    const hadleSubmit = async event => {

        event.preventDefault()

        const { number } = event.target

        try {
            const sendSMS = await fetch(`${constants.apiUrl}/api/send/send`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": token
                },
                body: JSON.stringify({
                    "nickname": userName,
                    "cel": number
                })

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
            {isLoggedIn ?
                <button id={style.shareButton} onClick={handleOpen}>
                    <img id={style.shareIcon} src="./share-icon.png" alt="Logo trivia" />
                </button>
                : null}


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