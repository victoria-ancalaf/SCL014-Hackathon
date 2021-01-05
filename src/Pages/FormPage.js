import React from 'react'
import Geolocation from '../Components/Form/Geolocation'
import ModalThanks from '../Components/Form/modalThanks';
import ModalWelcome from '../Components/Form/modalWelcome';
import Preferences from '../Components/Form/Preferences';
import Age from "../Components/Form/Age"
import Gender from "../Components/Form/Gender"

const FormPage = () => {
    return (
        <div>
            <ModalWelcome/>
            <Age />
            <Gender />
            <Preferences/>
            <Geolocation /> 
            <ModalThanks/>
        </div>
    )
}

export default FormPage;
