import React from "react";
import './Styles/modalMachelo.css';

const ModalMachelo = ({modalOn, setModalOn}) => {
    const classModal = modalOn === true ? 'modalVisible' : 'modalInvisible'
    return(
        <div className={classModal} modalOn={modalOn} onClick={() => setModalOn(!modalOn)}>
            Mo0dalmacheo
        </div>
    );
}

export default ModalMachelo;