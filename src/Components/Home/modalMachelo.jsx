import React from "react";
import './Styles/modalMachelo.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
      position: 'absolute',
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


const ModalMachelo = ({modalOn, setModalOn}) => {
    const classModal = modalOn === true ? 'modalVisible' : 'modalInvisible'
    return(
        <div className={classModal} modalOn={modalOn} onClick={() => setModalOn(!modalOn)}>
            Mo0dalmacheo

const ModalMachelo = () => {
    const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

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
        <h2 className={classes.dudas} id="simple-modal-title">¿Tienes dudas?</h2>

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

    return(
         <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
    );
}

export default ModalMachelo;