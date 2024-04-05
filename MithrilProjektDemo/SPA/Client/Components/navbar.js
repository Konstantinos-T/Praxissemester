"use strict";

import { State } from "../index.js";

let navbar = {
  view: function () {
    return [
      /* Die Navigationsleiste ist mit dem purecss.io Framework gestyled. Dafür wird einfach der Klassenname von purecss.io dem 
      entsprechendem HTML tag mitgegeben. */
      m("nav.pure-menu pure-menu-horizontal", [
        m("ul.pure-menu-list", [
          m("li.pure-menu-item pure-menu-selected", [
            m(
              "a.pure-menu-link[href=./index.html#!home]",
              {
                /*Hier wird der State abgefragt um sicherzustellen auf welcher Seite man sich gerade befindet. 
                  Um damit entsprechend eine Klasse mitzugeben die Styles hinterlegt hat.*/
                class: State.page === "/home" ? "navItemSelected" : "",
                /* Mit m.route.link wird der angegebene Link in href übergeben. */
                oncreate: m.route.link,
              },
              "HOME"
            ),
          ]),
          m(
            "li.pure-menu-item pure-menu-has-children pure-menu-allow-hover navitems",
            [
              m("a.pure-menu-link", "Suche nach:"),
              m("ul.pure-menu-children", [
                m("li.pure-menu-item", [
                  m(
                    "a.pure-menu-link[href=./index.html#!vaccine]",
                    {
                      class: State.page === "/vaccine" ? "navItemSelected" : "",
                      oncreate: m.route.link,
                    },
                    "Impfungen in einem Land"
                  ),
                ]),

                m("li.pure-menu-item", [
                  m(
                    "a.pure-menu-link[href=./index.html#!country] navText",
                    {
                      class: State.page === "/country" ? "navItemSelected" : "",
                      oncreate: m.route.link,
                    },
                    "Allgemeine Coronazahlen in einem Land"
                  ),
                ]),
                m("li.pure-menu-item", [
                  m(
                    "a.pure-menu-link[href=./index.html#!allCountries] navText",
                    {
                      class:
                        State.page === "/allCountries" ? "navItemSelected" : "",
                      oncreate: m.route.link,
                    },
                    "Dashboard aller Länder Weltweit"
                  ),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
    ];
  },
};

export default navbar;
