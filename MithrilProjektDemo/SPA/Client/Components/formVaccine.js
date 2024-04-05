"use strict";

import vaccineData from "./vaccineData.js";

let formVaccine = {
  oncreate: function (vnode) {
    var getEl = document.getElementById("INPUT").value;
  },

  view: function () {
    return [
      m("div", [
        m("form.pure-form[action='']", [
          m("input#INPUT[Placeholder=Country][value='']"),
          m(
            "button.button.pure-button pure-button-primary",
            {
              onclick: function (e) {
                e.preventDefault();
                var getInput = document.getElementById("INPUT").value;
                vaccineData.getData(getInput);
              },
            },
            "Search"
          ),
        ]),
      ]),
    ];
  },
};

export default formVaccine;
