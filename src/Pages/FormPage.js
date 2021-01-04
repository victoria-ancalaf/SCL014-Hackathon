import React from "react";
import Geolocation from "../Components/Form/Geolocation";
import ModalWelcome from "../Components/Form/modalWelcome";
import Age from "../Components/Form/Age";
import Gender from "../Components/Form/Gender";

const FormPage = () => {
  return (
    <div>
      <ModalWelcome />
      <Age />
      <Gender />
      <Geolocation />
    </div>
  );
};

export default FormPage;
