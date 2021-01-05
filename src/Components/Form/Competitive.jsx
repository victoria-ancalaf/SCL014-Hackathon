import React, { Fragment } from "react";
import './Styles/Competitive.css'

const Competitive = () => {
  return (
    <Fragment>
      <div className="container-competitive">
        <div className="box-textCompetitive">
          <h1 className="text-Competitive">¿Te consideras competitiv@?</h1>
        </div>
        <div>
          <button className="btn-Competitive">Si, mucho</button>
          <button className="btn-Competitive"> No, para nada</button>
          <button className="btn-Competitive">Lo justo y necesario</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Competitive;
