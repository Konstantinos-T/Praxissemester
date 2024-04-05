"use strict";

import { h } from "../../libs/distPreact.js";
import { useState, useEffect } from "../../libs/distPreactHooks.js";
import htm from "../../libs/distPreactHTM.js";

const html = htm.bind(h);

//import { Modal } from '../Components/modal.js';

export const Dashboard = () => {
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [active, setActive] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");

  const fetchApi = () => {
    fetch("https://covid-api.mmediagroup.fr/v1/cases")
      .then((response) => response.json())
      .then((response) => {
        setCountries(
          Object.keys(response).map((c) => {
            return { value: c };
          })
        );
        setCountryData(response);
      });
  };

  //console.log(active);
  //console.log(currentCountry);

  const Modal = (props) => {
    //console.log(props);
    //var country = props.data;

    return html`
      <div class="modal ${active}">
        <div class="modal-background" onClick=${() => setActive("")}></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">
              ${props.data}
            </p>
            <button
              class="delete"
              aria-label="close"
              onClick=${() => setActive("")}
            ></button>
          </header>
          <section class="modal-card-body has-text-centered">
            <!-- Content ... -->
            <p>confirmed: ${countryData[props.data]?.All?.confirmed}</p>
            <p>recovered: ${countryData[props.data]?.All?.recovered}</p>
            <p>deaths: ${countryData[props.data]?.All?.deaths}</p>
          </section>
        </div>
        ‚
      </div>
    `;
  };

  const openModal = (e) => {
    e.preventDefault();
    setActive("is-active");
    setCurrentCountry(e.target.value);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return html`
    <!-- Cardgenerator  -->
    <div class="container my-6">
    <div class="section">
    <h1 class="title">Dashboard</h1>
    <h1 class="subtitle">Eine Liste mit allen Ländern der Welt</h1>
        <div class="columns is-multiline">
          ${countries.map((el) => {
            return html`
              <div class="column is-half-tablet is-one-quarter-desktop">
                <div class="card  has-text-centered">
                  <header class="card-header has-background-link">
                    <p class="card-header-title">
                      ${el.value}
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <button
                        class="button is-primary has-text-dark"
                        onClick=${openModal}
                        value=${el.value}
                      >
                        more informations
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `;
          })};
        </div>
      </div>
    </div>
    <!-- Modal -->
    <${Modal} data=${currentCountry} active=${active} />
  `;
};
