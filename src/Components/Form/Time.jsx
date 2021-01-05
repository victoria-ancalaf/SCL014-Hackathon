import React from 'react'
import { Link } from "react-router-dom";

const Time = () => {
    return (
        <div>
            <p>¿Qué opinas de jugar contra el tiempo?</p>
            <div>
            <div className="navigation-container">
          <div>
              <Link to="/form3">
                <button className="navigation-btn">{"< "}Atrás</button>
              </Link>
          </div>
          <div>
              <Link to="/form5">
            <button className="navigation-btn">Siguiente{" >"}</button>
            </Link>
          </div>
        </div>
            </div>
        </div>
    )
}

export default Time
