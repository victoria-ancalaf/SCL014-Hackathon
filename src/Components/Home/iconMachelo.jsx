import React, { useState, Fragment } from "react";
import ola from '../../Img/iconMachelo.png';
import "./Styles/iconMachelo.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

// const IconMachelo = () => {
//   let [modalOn, setModalOn] = useState(false);
//   return (
//     <Fragment>
//       <div className="containerIconMachelo" modalOn={modalOn} onClick={() => setModalOn(!modalOn) }>
//         <img className="iconMachelito" src={ola} alt="icon" />
//       </div>
//       <ModalMachelo modalOn={modalOn} setModalOn={setModalOn}/>
//     </Fragment>
//   );
// };

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "360px",
    height: "592px",
    backgroundColor: " #580CE5",
    borderRadius: "25px",
    boxShadow: theme.shadows[5],
  },
  equipo: {
    width: "267px",
    height: "188px",
    backgroundColor: " #FFFFFF",
    borderRadius: "15px",
  },
  writem: {
    width: "267px",
    height: "46px",
    backgroundColor: " #FFFFFF",
    borderRadius: "15px",
  },
  enviarbtn: {
    width: "82px",
    height: "41px",
    backgroundColor: " #999999",
    border: "1px solid #999999",
    borderRadius: "5px",
  },
  textitle: {
    fontFamily: "Nunito",
    color: "#333333",
    fontSize: "16px",
    fontWeight: "bold",
  },
  firstcont: {
    display: "flex",
  },
  dudas: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#FFFFFF",
    paddingLeft: "22%",
  },
  btnback: {
    fontFamily: "Nunito",
    color: "#FFFFFF",
    fontSize: "20px",
    textDecoration: "none",
    backgroundColor: " #580CE5",
    borderStyle: "none",
    fontWeight: "bold",
  },
}));



const IconMachelo = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.firstcont}>
        <button className={classes.btnback}>{"<"}</button>
        <h2 className={classes.dudas} id="simple-modal-title">
          ¿Tienes dudas?
        </h2>
      </div>
      <p id="simple-modal-description">
        En MACH te acompañamos todo el tiempo.
      </p>
      <div className={classes.equipo}>
        <h3 className={classes.textitle}>Equipo MACH</h3>
        <p>Hola Juana, ¿en qué te podemos ayudar?</p>
      </div>
      <div className={classes.writem}>Escribir mensaje</div>
      <button className={classes.enviarbtn}>Enviar</button>
    </div>
  );

  return (
    <Fragment>
      <div className="containerIconMachelo" onClick={handleOpen}>
        <img className="iconMachelito" src={ola} alt="icon" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      </Fragment>
    
  );
};

export default IconMachelo;
