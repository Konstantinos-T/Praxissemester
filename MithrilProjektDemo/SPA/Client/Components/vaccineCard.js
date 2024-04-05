"use strict";
import vaccineData from "./vaccineData.js";

/* Hier befindet sich die implementierung der Karten mit der Hyperscriptfunktion m() */
/* An diesem Beispiel ist auch schön ersichtlich wie strukturiert man programmieren kann.
Zusätzlich ist die Implementierung von Styles und anderen Funktionen direkt möglich. */

let vaccineCard = {
  isActive: false,
  oninit: vaccineData.getData(),

  view: function () {
    return [
      m("div.l-content", [
        m("div.dataTableContainer ", [
          m("div.pure-u-1", [
            m("div.data-table ", [
              m("div.table-header", [
                m("h2", "Information about: "),
                m("span.table-data", vaccineData.country + " ", [
                  m("span", "updated: " + vaccineData.updated.substring(0, 10)),
                ]),
              ]),
              m('.accordion',[
                m('.contextBox', /* Hier wird die Klasse active in die contextBox gesetzt wenn diese geklickt wurde. */
                { class: vaccineCard.isActive  ? "active" : "" },[
                  m('.label',{ onclick: function(e){
                    e.prevendDefault;
                    vaccineCard.isActive = !vaccineCard.isActive                 
                  }}, "Mehr Informationen "),
                  m('.content',[
                    m("ul.data-table-list ", [
                    m("li", "Administered: " + vaccineData.administered),
                    m("li", "People partially vaccinated: " + vaccineData.people_partially_vaccinated),
                    m("li", "People vaccinated: " + vaccineData.people_vaccinated),
                  ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ];
  },
};

  export default vaccineCard;