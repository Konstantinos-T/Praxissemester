"use strict";

import { h } from "../../libs/distPreact.js";
import { useState, useEffect } from "../../libs/distPreactHooks.js";
import htm from "../../libs/distPreactHTM.js";

const html = htm.bind(h);

export const Country = () => {
  const [countryData, setCountryData] = useState([]);
  const [input, setInput] = useState({});
  const [federalStates, setFederalStates] = useState([]);

  const fetchApi = (input) => {
    fetch("https://covid-api.mmediagroup.fr/v1/cases?country=" + ( input || "Germany"))
      .then((response) => response.json())
      .then((response) => { 
          setCountryData(response);
          setFederalStates(Object.keys(response).map((el) => {return { State: el }}));
        })
  };

  const handleInputChange = (e) => {
    setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value });
  }     

  const onClick = (e) => {
    e.preventDefault();
    fetchApi(input?.country);
  }
  useEffect(() => {
    fetchApi(input.county);
  }, []);

  return html`
    <div class="container my-6">
      <div class="section">
        <h1 class="title has-text-centered">Search result: ${countryData?.All?.country}</h1>
      </div>
      <div class="section">
              <div class="columns">
                <div class="column has-text-centered">
                  <input class="input is-rounded" type="text" name="country" Placeholder="Enter a country" onChange=${ handleInputChange }/>
                  <button class="button is-link mt-2" onClick=${onClick}> Suche </button>
                </div>
              </div>
        </div>
      <div class="section">
        <div class="columns is-multiline">
              ${federalStates.map( (el) => {
                return html
                `
                <div class="column is-half-tablet is-one-quarter-desktop has-text-centered">
                  <article class="message is-info">
                    <div class="message-header">
                      <p>${el.State}</p>
                    </div>
                    <div class="message-body">
                      <p>Confirmed: ${countryData[el.State].recovered}</p>
                      <p>Confirmed: ${countryData[el.State].deaths}</p>
                      <p>Confirmed: ${countryData[el.State].confirmed}</p>
                    </div>
                  </article>
                </div>
                `
              })}
          </div>
      </div>
    </div>
  `;
};
