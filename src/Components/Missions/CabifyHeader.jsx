import React from 'react'
import './Styles/HeaderMisiones.css'
import {Link} from 'react-router-dom'

const CabifyHeader = () => {
    return (
        <div className="header-mision-cont">
            <Link to="/misiones">
            <div className="mision-header-1">
                <h2 className="mision-text">{"<"}</h2>
            </div>
            </Link>
            <div className="mision-header-2">
                <h2 className="mision-text">Misión</h2>
            </div>
            <div className="mision-header-3"></div>
        </div>
    )
}

export default CabifyHeader;