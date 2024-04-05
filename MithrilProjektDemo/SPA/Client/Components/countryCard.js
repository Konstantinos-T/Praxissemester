"use strict";
import CovidData from "./countryData.js";

let countryCard = {
  isActive: false,
  oninit: CovidData.getData(),

  view: function () {
    return [
      m("div.l-content", [
        m("div.dataTableContainer pure-g", [
          m("div.pure-u-1 ", [
            m("div.data-table ", [
              m("div.table-header", [
                m("h2", "Information about: "),
                m("span.table-data", CovidData.country + " ", [m("span", "")]),
              ]),
              m(".accordion", [
                m(
                  ".contextBox" /* Hier wird die Klasse active in die contextBox gesetzt wenn diese geklickt wurde. */,
                  { class: countryCard.isActive ? "active" : "" },
                  [
                    m(
                      ".label",
                      {
                        onclick: function (e) {
                          e.prevendDefault;
                          countryCard.isActive = !countryCard.isActive;
                        },
                      },
                      "Mehr Informationen "
                    ),
                    m(".content", [
                      m("ul.data-table-list", [
                        m("li", "Country population: " + CovidData.population),
                        m("li", "People confirmed: " + CovidData.confirmed),
                        m("li", "People died: " + CovidData.deaths),
                        m("li", "People recovered: " + CovidData.recovered),
                        m("li", "Capital city: " + CovidData.capital_city),
                        m("li", "Continent: " + CovidData.continent),
                        m("li", "Location: " + CovidData.location),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ];
  },
};

export default countryCard;
