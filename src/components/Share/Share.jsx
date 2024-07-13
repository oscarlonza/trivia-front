import style from './Share.module.css'
import Modal from '../Modal';
import React from "react";

const Share = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const hadleSubmit = async event=>{
        event.preventDefault()
        setOpen(false);
    }

    return (
        <>
            <button id={style.shareButton} onClick={handleOpen}>
                <img id={style.shareIcon} src="./share-icon.png" alt="Logo trivia" />
            </button>

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