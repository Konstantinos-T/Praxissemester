"use strict";

import { h, render } from "./libs/distPreact.js";
import htm from "./libs/distPreactHTM.js";

const html = htm.bind(h);

import { Navigation } from "./Components/navigation.js";

const Home = () => {
  return html`
    <${Navigation} />
    <footer class="footer mt-6">
      <div class="content has-text-centered">
        <p>
          <strong>Covid Demo mit Preact.js and Bulma.io</strong> erstellt von Konstantinos Tsolakidis
        </>
      </div>
    </footer>
  `;
};

render(h(Home), document.body);
