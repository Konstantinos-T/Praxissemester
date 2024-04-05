"use strict";

import { h } from "../libs/distPreact.js";
import { useState, useEffect } from "../libs/distPreactHooks.js";
import htm from "../libs/distPreactHTM.js";
import Router, { route } from "../libs/distPreactRoute.js";
import { createHashHistory } from '../libs/distHistory.js';
const html = htm.bind(h);

/* Komponenten */

import { HomePage } from "../Components/Pages/Home.js";
import { Dashboard } from "./Pages/Dashboard.js";
import { Vaccine } from './Pages/Vaccines.js';
import { Country } from './Pages/Country.js';

export const Navigation = () => {

  const [active, setActive] = useState("");

  return html`
    <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <a
      role="button"
      class="navbar-burger ${active}"
      aria-label="menu"
      aria-expanded="true"
      onClick=${()=> setActive( active === "" ? "is-active" : "")}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    <div id="navbarBasicExample" class="navbar-menu ${active}">
      <div class="navbar-start">
        <a class="navbar-item" href="/" onClick=${()=> setActive("")}>
          Home
        </a>
        <a class="navbar-item" href="/dashboard" onClick=${()=> setActive("")}>
          Dashboard
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Suche nach
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="/vaccine" onClick=${()=> setActive("")}>
              Impfungen in einem Land
            </a>
            <a class="navbar-item" href="/country" onClick=${()=> setActive("")}>
              Fälle in einem Land
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <${Router} history=${createHashHistory()} >
    <${HomePage} path="/" />
    <${Dashboard} path="/dashboard"/>
    <${Vaccine} path="/vaccine"/>
    <${Country} path="/country"/>
  </$>

  `;
};
