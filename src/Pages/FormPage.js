import React from "react";
import Geolocation from "../Components/Form/Geolocation";
import ModalWelcome from "../Components/Form/modalWelcome";
import Age from "../Components/Form/Age";

const FormPage = () => {
  return (
    <div>
      <ModalWelcome />
      <Age />
      <Geolocation />
    </div>
  );
};

export default FormPage;
