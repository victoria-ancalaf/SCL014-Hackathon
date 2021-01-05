import React from 'react';
import ModalThanks from '../Components/Form/ModalThanks';
import ModalWelcome from '../Components/Form/modalWelcome';
// import Geolocation from '../Components/Form/Geolocation'
// import ModalWelcome from '../Components/Form/modalWelcome';
import Preferences from '../Components/Form/Preferences';


const FormPage = () => {
    return (
        <div>
             <ModalThanks/>
            <h1>FOOOOOOOOOOOOOOOOOOOOOORM</h1>
            <ModalWelcome/>
            {/* <Geolocation /> */}
            <Preferences/>
        </div>
    )
}

export default FormPage;
