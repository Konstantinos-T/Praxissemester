"use strict";
import banner from "./banner.js";
import navbar from "./navbar.js";
import form from "./formVaccine.js";
import vaccineData from "./vaccineData.js";
import vaccineCard from "./vaccineCard.js";
import footer from "./footer.js";

/* Globale Variable verschieben in die Komponente */
let vaccine = {
  oninit: vaccineData.getData(),

  view: function () {
    return [
      m(banner),
      m(navbar),
      m(".limiter", [m(vaccineCard), m(form)]),
      m(footer),
    ];
  },
};

export default vaccine;
