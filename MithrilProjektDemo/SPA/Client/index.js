"use strict";

export const State = ({page: '/home' })


/* Diese Komponenten beinhalten die View Methode und können somit an das route als Komponente übergeben werden. */
/* Sie beinhalten alle ausgelagerten Komponenten (Banner, Header, Nav, Daten und den Footer) */
import home from "./Components/home.js";
import country from "./Components/country.js";
import vaccine from "./Components/vaccine.js";
import allCountries from './Components/allCountries.js';

/* Die Routen sind dann nochmal in der Navigationsleiste verlinkt und über den State hier gekennzeichent und entsprechend 
in der Navigationsleiste Farblich hervorgehoben. */

m.route(document.body, "/home", {
  "/home": {
    render: function () {
      State.page = "/home";
      return m(home);
    },
  },
  "/country": {
    render: function () {
      State.page = "/country";
      return m(country);
    },
  },
  "/vaccine": {
    render: function () {
      State.page = "/vaccine";
      return m(vaccine);
    },
  },
  "/allCountries": {
    render: function () {
      State.page = "/allCountries";
      return m(allCountries);
    },
  },
});
