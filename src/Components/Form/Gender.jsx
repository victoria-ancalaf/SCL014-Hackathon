import React from 'react'
import './Styles/Gender.css'
import Navigation from './Navigation'

const Gender = () => {
    return (
        <div className="gender-container">
            <div className="AgeHeader"></div>
            <section  className="gender-p-container">
                <p className="gender-p">¿Qué género te define?</p>
            </section>
            <section className="gender-buttons">
                <button className="gender-btn">Femenino</button>
                <button className="gender-btn">Masculino</button>
                <button className="gender-btn">No binario</button>
            </section>
            <div>
                <Navigation />
            </div>
        </div>
    )
}

export default Gender
