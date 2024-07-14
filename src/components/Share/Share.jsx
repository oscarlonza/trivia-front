import style from './Share.module.css'
import Modal from '../Modal';
import React from "react";
import constants from '../../utils/constants';

const isLoggedIn = localStorage.getItem('user')

const Share = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const hadleSubmit = async event => {
        const userName = localStorage.getItem('user').nickname
        const token = localStorage.getItem('user')

        event.preventDefault()

        const { number } = event.target


        try {
            const sendSMS = await fetch(`${constants.apiUrl}/api/send/send`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": token
                },
                body: {
                    "nickname": userName,
                    "cel": number
                }

            }
            )
            if (!sendSMS.ok) return alert('Error en la peticion al servidor')

            const response = await sendSMS.json()

            if (!response.process) return alert('Error al guardar el nuevo usuario')

            alert('¡Invitación enviada!')
            setOpen(false);

        } catch (error) {
            alert('Error en la peticion al servidor')
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
                <>
                    <h1>Compartir</h1>
                    <p>Invita a tus amigos a jugar trivia Marvel a través de SMS!</p>
                    <form onSubmit={hadleSubmit}>
                        <label htmlFor="number">+57</label>
                        <input name="number" type="tel" placeholder="xxx xxxxxxx" maxLength="10" required></input>
                        <button type='submit'>Enviar</button>
                        <button type="button" onClick={handleClose}>Cancelar</button>
                    </form>
                </>
            </Modal>
        </>

    )
}


export default Share;