import React from "react";
import "./Styles/Age.css";

const Age = () => {
  return (
    <div className="AgeContainer">
      <div className="AgeHeader"></div>
      <section className="SelectDate">
        <div className="SelectText">Tu fecha de nacimiento (dd/mm/aaaa)</div>
        <div className="InputDate">
        <form>
        <input className="input-box" type="text" id="day" value="dd" />
        <input className="input-box" type="text" id="month" value="mm" />
        <input className="input-box" type="text" id="year" value="aaaa" />
        </form>
      </div>
      </section>
     
    </div>
  );
};

export default Age;
