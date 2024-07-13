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
    return (
        <>
            <button id={style.shareButton} onClick={handleOpen}>
                <img id={style.shareIcon} src="./share-icon.png" alt="Logo trivia" />
            </button>

            <Modal isOpen={open} onClose={handleClose}>
                <>
                    <h1>Compartir</h1>
                    <p>Invita a tus amigos a jugar trivia Marvel a través de SMS!</p>
                    <form>
                        <input type="tel" placeholder="+57 xxx xxxxxxx"></input>
                        <button type='submit'>Enviar</button>
                    </form>
                </>
            </Modal>
        </>

    )
}


export default Share;