import style from './Share.module.css'

const Share = () => {

    /* const openShareModal = ()=>{
        var modal = document.getElementById("shareModal");

        // Get the button that opens the modal
        var btn = document.getElementById("shareButton");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        } */
    return (
        <>
            <button id={style.shareButton}>
                <img id={style.shareIcon} src="./share-icon.png" alt="Logo trivia" />
            </button>

            <div id={style.shareModal} className={style.modal}>
                <div className={style.modalContent}>
                    <span className={style.close}>&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        </>

    )
}


export default Share;