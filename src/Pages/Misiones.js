import React from "react";
import HeaderMisiones from "../Components/Missions/HeaderMisiones";

const Misiones = () => {
  return (
    <div>
      <HeaderMisiones />
      <section className="buttons-saldo-container">
        <button className="saldo-btn">Misiones Temporales</button>
        <button className="saldo-btn">Misiones permanentes</button>
      </section>
      -
    </div>
  );
};

export default Misiones;
