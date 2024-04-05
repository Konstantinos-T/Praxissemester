"use strict";
import allData from "./fetchAllCountriesData.js";
import Modal from "./modal.js";
//import infinite from 'https://unpkg.com/mithril-infinite@1.3.0/dist/mithril-infinite.js';

let countryCard = {
  country: [],
  dashboardState: { pageY: 0, pageHeight: window.innerHeight },

  oninit: () => {
    allData.fetchAll().then((result) => {
      countryCard.country = allData.countryNames.map((country) => {
        return { country: country, modal: new Modal() };
      });
    });
  },

  view: () => {
    
    return [
      m("h1.AllCountriesH1", "All Countries Worldwide: "),

      /* Die divs werden in dem Wrapper Div erstellt. */
      /* Zu jedem Land wird ein Modal (Popup-Fenster eingebaut) */
      
      m(
        ".wrapper",
        { style: { background: "transparent" } },
        countryCard.country.map(({ country, modal }) => {
          //console.log("Das ist das country Objekt" + country);
          return m(
            ".countryDiv scale pure-u-md-1-4",
            m("h3", country),
            [
              m(
                "p",
                m(
                  "button",
                  {
                    type: "button",
                    onclick() {
                      // Mit dieser Funktion wird das Modal mit dem entsprechendem Inhalt erstellt.
                      modal.openModal({
                        title: country,
                        buttons: [{ id: "exit", text: "Exit" }],
                        onclick(id) {
                          // The modal closes automatically when a button is clicked
                          console.log("Clicked modal button id: " + id);
                        },
                      });
                    },
                  },
                  "Click for more informations"
                )
              ),
              modal.modalIsOpen() && m(modal),
            ]
          );
        })
      ),
    ];
  },
};

export default countryCard;
