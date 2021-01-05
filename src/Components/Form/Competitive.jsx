import React, { Fragment } from "react";
import "./Styles/Competitive.css";
import { Link } from "react-router-dom";

const Competitive = () => {
  return (
    <Fragment>
      <div className="container-competitive">
        <div className="box-textCompetitive">
          <h2 className="text-Competitive">¿Te consideras competitiv@?</h2>
        </div>
        <div className="box-btn">
          <div>
            <button className="btn-Competitive">Sí, mucho</button>
          </div>
          <div>
            <button className="btn-Competitive"> No, para nada</button>
          </div>
          <div>
            <button className="btn-Competitive">Lo justo y necesario</button>
          </div>
        </div>
        <div>
        <div className="navigation-container">
      <div>
        <Link to="/form4">
        <button className="navigation-btn">{"< "}Atrás</button>
        </Link>
      </div>
      <div>
        <Link to="/form6">
        <button className="navigation-btn">Siguiente{" >"}</button>
        </Link>
      </div>
    </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Competitive;
