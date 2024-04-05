"use strict";
import banner from './banner.js';
import navbar from "./navbar.js";
import CovidData from "./countryData.js";
import countryCard from './countryCard.js';
import form from "./formCountry.js";
import footer from "./footer.js";

let country = {
  oninit: CovidData.getData(),

  view: function () {
    return [
      m(banner),
      m(navbar),
      m('.limiter', [
        m(countryCard),
        m(form),
      ]),
      m(footer)
    ];
  },
};

export default country;
