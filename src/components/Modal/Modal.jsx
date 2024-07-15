import style from './modal.module.css'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
 
    return (
        <div className={style.overflow}>
            <div className={style.container}>
                {children}
            </div>
        </div>
    );
};

export default Modal;