import React, { Fragment } from "react";
import "./Styles/Competitive.css";

const Competitive = () => {
  return (
    <Fragment>
      <div className="container-competitive">
        <div className="box-textCompetitive">
          <h2 className="text-Competitive">¿Te consideras competitiv@?</h2>
        </div>
        <div className="box-btn">
          <div>
            <button className="btn-Competitive">Si, mucho</button>
          </div>
          <div>
            <button className="btn-Competitive"> No, para nada</button>
          </div>
          <div>
            <button className="btn-Competitive">Lo justo y necesario</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Competitive;
