import React from "react";
import "./Styles/Age.css";
import Navigation from './Navigation'

const Age = () => {
  return (
    <div className="AgeContainer">
      <div className="AgeHeader"></div>
      <section className="SelectDate">
        <div className="SelectText">Tu fecha de nacimiento (dd/mm/aaaa)</div>
        <div className="InputDate">
        <form>
        <input className="input-box" type="text" id="day" placeholder="dd" />
        <input className="input-box" type="text" id="month" placeholder="mm" />
        <input className="input-box" type="text" id="year" placeholder="aaaa" />
        </form>
      </div>
      </section>
      <div className="navigation-component">
        <Navigation />
      </div>
    </div>
  );
};

export default Age;
