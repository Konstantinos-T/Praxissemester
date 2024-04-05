"use strict";
import banner from "./banner.js";
import navbar from "./navbar.js";
import allCountriesCard from './allCountriesCard.js';
import footer from "./footer.js";


let allCountries = {

  view: function () {
    return [
      m(banner),
      m(navbar),
      //m(".limiter",[
        m(allCountriesCard),
      //]),
      m(footer),
    ];
  },
};

export default allCountries;