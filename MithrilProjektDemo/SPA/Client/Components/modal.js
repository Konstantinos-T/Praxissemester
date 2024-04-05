"use strict";

import countryData from "./fetchAllCountriesData.js";

/* Das Modal wird verwendet um ein Popup fenster mit entsprechendem Inhalt zu erzeugen. */

/** Modal Class */
class Modal {
  constructor() {
    this.countryIsLoading = "is loading";

    this.options = {
      title: "Modal",
      buttons: [],
    };
    this.cData = countryData.countryData;
    this.isOpen = false;
  }

  closeModal(redraw = true) {
    this.isOpen = false;
    // Redraw by default unless caller suppressed
    if (redraw) {
      m.redraw();
    }
  }

  modalIsOpen() {
    return this.isOpen;
  }

  openModal(opts) {
    //console.log("Wert von ISOPEN " + this.isOpen);
    // Deep copy the supplied opts
    this.isOpen = true;
    this.options = { ...opts };
    this.options.buttons = opts.buttons
      ? opts.buttons.map((b) => ({ ...b }))
      : [];
    // Redraw by default unless caller suppressed
    //console.log("Open Modal vor der if " + this.isOpen);
    if (this.options.redraw == null || this.options.redraw === true) {
      //console.log("Open Modal nach der if " + this.isOpen);
      m.redraw();
      //console.log("Open Modal nach der redraw " + this.isOpen);
    }
  }

  onbeforeremove({ dom }) {
    // Trigger hide animation, wait for it to finish
    dom.classList.add("hide");
    return new Promise((r) => {
      dom.addEventListener("animationend", r);
    });
  }

  view(ctrl) {
    const currentCountry = ctrl.tag.options.title;

    if (ctrl.tag.isOpen) {
      //console.log(ctrl.tag.options.title);
      //console.log(this.cData);
      return m(
        ".modal",
        m(
          ".modal-box",
          m("p.modalP", this.cData[currentCountry].All.country),
          m(
            "p.modalP",
            "Bestätigte Fälle: " + this.cData[currentCountry].All.confirmed
          ),
          m(
            "p.modalP",
            "Wieder Gesund: " + this.cData[currentCountry].All.recovered
          ),
          m("p.modalP", "Tote: " + this.cData[currentCountry].All.deaths),

          ctrl.tag.options.content &&
            m(".modal-content", ctrl.tag.options.content),
          ctrl.tag.options.data,
          m(
            ".modal-buttons",
            ctrl.tag.options.buttons.map((b) => {
              return m(
                "button",
                {
                  type: "button",
                  disabled: !ctrl.tag.isOpen,
                  onclick() {
                    ctrl.tag.isOpen = false;
                    ctrl.tag.options.onclick && ctrl.tag.options.onclick(b.id);
                  },
                },
                b.text
              );
            })
          )
        )
      );
    }
  }
}

export default Modal;
