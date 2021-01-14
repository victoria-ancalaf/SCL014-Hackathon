import React, { useState } from "react";
import "./Styles/preferences.css";
import alimentos from "../../Img/alimentos.svg";
import automotriz from "../../Img/automotriz.svg";
import belleza from "../../Img/belleza.svg";
import bancos from "../../Img/bancos.svg";
import decohogar from "../../Img/decohogar.svg";
import deporte from "../../Img/deporte.svg";
import entretencion from "../../Img/entretencion.svg";
import infantil from "../../Img/niño.svg";
import libros from "../../Img/libros.svg";
import mascotas from "../../Img/mascotas.svg";
import moda from "../../Img/moda.svg";
import musica from "../../Img/musica.svg";
import restaurantes from "../../Img/restaurantes.svg";
import tecnologia from "../../Img/tecnologia.svg";
import salud from "../../Img/salud.svg";
import vinos from "../../Img/vinos.svg";
import checkImg from "../../Img/Check.svg";
import { Link } from "react-router-dom";

const Preferences = () => {
  return (
    <div className="containerPreferences">
      <div className="AgeHeader"></div>
      <div className="containerTextPreferences">
        <p className="titlePreferences">Escoge tus intereses(como mínimo 3)</p>
        <p className="textPreferences">
          Y recibe recomendaciones personalizadas
        </p>
      </div>
      <div className="containerCheckBoxs">
        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-one"
          class="hide-checkbox"
          value="Option 1"
        />
        <label for="checkbox-button-opt-one">
          <div className="containerEmoji">
            <img className="emoji" src={alimentos} alt="emoji" />
          </div>
          Alimentos
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-2"
          class="hide-checkbox"
          value="Option 2"
        />
        <label for="checkbox-button-opt-2">
          <div className="containerEmoji">
            <img className="emoji" src={automotriz} alt="emoji" />
          </div>
          Automotríz
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-3"
          class="hide-checkbox"
          value="Option 3"
        />
        <label for="checkbox-button-opt-3">
          <div className="containerEmoji">
            <img src={belleza} className="emoji" alt="emoji" />
          </div>
          Belleza
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-4"
          class="hide-checkbox"
          value="Option 4"
        />
        <label for="checkbox-button-opt-4">
          <div className="containerEmoji">
            <img src={bancos} className="emoji" alt="emoji" />
          </div>
          Bancos
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-5"
          class="hide-checkbox"
          value="Option 5"
        />
        <label for="checkbox-button-opt-5">
          <div className="containerEmoji">
            <img src={decohogar} className="emoji" alt="emoji" />
          </div>
          Decohogar
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-6"
          class="hide-checkbox"
          value="Option 6"
        />
        <label for="checkbox-button-opt-6">
          <div className="containerEmoji">
            <img src={deporte} className="emoji" alt="emoji" />
          </div>
          Deporte
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-7"
          class="hide-checkbox"
          value="Option 7"
        />
        <label for="checkbox-button-opt-7">
          <div className="containerEmoji">
            <img src={entretencion} className="emoji" alt="emoji" />
          </div>
          Entretención
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-8"
          class="hide-checkbox"
          value="Option 8"
        />
        <label for="checkbox-button-opt-8">
          <div className="containerEmoji">
            <img src={infantil} className="emoji" alt="emoji" />
          </div>
          Infantil
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-9"
          class="hide-checkbox"
          value="Option 9"
        />
        <label for="checkbox-button-opt-9">
          <div className="containerEmoji">
            <img src={libros} className="emoji" alt="emoji" />
          </div>
          Libros
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-10"
          class="hide-checkbox"
          value="Option 10"
        />
        <label for="checkbox-button-opt-10">
          <div className="containerEmoji">
            <img src={mascotas} className="emoji" alt="emoji" />
          </div>
          Mascotas
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-11"
          class="hide-checkbox"
          value="Option 11"
        />
        <label for="checkbox-button-opt-11">
          <div className="containerEmoji">
            <img src={moda} className="emoji" alt="emoji" />
          </div>
          Moda
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-12"
          class="hide-checkbox"
          value="Option 12"
        />
        <label for="checkbox-button-opt-12">
          <div className="containerEmoji">
            <img src={musica} className="emoji" alt="emoji" />
          </div>
          Música
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-13"
          class="hide-checkbox"
          value="Option 13"
        />
        <label for="checkbox-button-opt-13">
          <div className="containerEmoji">
            <img src={restaurantes} className="emoji" alt="emoji" />
          </div>
          Restaurantes
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-14"
          class="hide-checkbox"
          value="Option 14"
        />
        <label for="checkbox-button-opt-14">
          <div className="containerEmoji">
            <img src={tecnologia} className="emoji" alt="emoji" />
          </div>
          Tecnología
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-15"
          class="hide-checkbox"
          value="Option 15"
        />
        <label for="checkbox-button-opt-15">
          <div className="containerEmoji">
            <img src={salud} className="emoji" alt="emoji" />
          </div>
          Salud y cuidado personal
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-16"
          class="hide-checkbox"
          value="Option 16"
        />
        <label for="checkbox-button-opt-16">
          <div className="containerEmoji">
            <img src={vinos} className="emoji" alt="emoji" />
          </div>
          Vinos y licores
        </label>

        <input
          type="checkbox"
          name="checkbox-option"
          id="checkbox-button-opt-17"
          class="hide-checkbox"
          value="Option 17"
        />
        <label for="checkbox-button-opt-17">
          <div className="containerEmoji">
            <img src={checkImg} className="emoji" alt="emoji" />
          </div>
          Todos
        </label>
      </div>
      <div className="navigation-container">
        <div>
          <Link to="/form2">
            <button className="navigation-btn">{"< "}Atrás</button>
          </Link>
        </div>
        <div>
          <Link to="/form4">
            <button className="navigation-btn">Siguiente{" >"}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
