import React from 'react'
import Geolocation from '../Components/Form/Geolocation'
import ModalThanks from '../Components/Form/ModalThanks';
import ModalWelcome from '../Components/Form/modalWelcome';
// import Geolocation from '../Components/Form/Geolocation'
// import ModalWelcome from '../Components/Form/modalWelcome';
import Preferences from '../Components/Form/Preferences';


const FormPage = () => {
    return (
        <div>
             <ModalThanks/>
            <ModalWelcome/>
            {/* <Geolocation /> */}
            <Preferences/>
        </div>
    )
}

export default FormPage;
