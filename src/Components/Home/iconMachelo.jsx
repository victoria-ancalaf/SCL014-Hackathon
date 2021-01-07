import React, { useState, Fragment } from "react";
import ModalMachelo from "./modalMachelo";
import ola from '../../Img/iconMachelo.png';
import "./Styles/iconMachelo.css";

const IconMachelo = () => {
  let [modalOn, setModalOn] = useState(false);
  return (
    <Fragment>
      <div className="containerIconMachelo" modalOn={modalOn} onClick={() => setModalOn(!modalOn) }>
        <img className="iconMachelito" src={ola} alt="icon" />
      </div>
      <ModalMachelo modalOn={modalOn} setModalOn={setModalOn}/>
    </Fragment>
  );
};

export default IconMachelo;
