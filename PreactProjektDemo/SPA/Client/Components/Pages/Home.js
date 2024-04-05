"use strict";

import { h, render } from "../../libs/distPreact.js";
import htm from "../../libs/distPreactHTM.js";

const html = htm.bind(h);

export const HomePage = () => {
  return html
  ` 
  <div class="section">
    <div class="container mt-6">
    <h1 class="title">Single Page Application Demo, erstellt mit Preact.js and Bulma.io Framework </h1>
      <div class="columns is-multiline">
        <div class="column is-full-desktop">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam doloribus fugit sed, aliquid accusantium, quod ipsa dolor possimus impedit minima eum ea a enim! Autem totam quasi esse molestias?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam doloribus fugit sed, aliquid accusantium, quod ipsa dolor possimus impedit minima eum ea a enim! Autem totam quasi esse molestias?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam doloribus fugit sed, aliquid accusantium, quod ipsa dolor possimus impedit minima eum ea a enim! Autem totam quasi esse molestias?
        </div>
        <div class="column is-full-desktop">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam doloribus fugit sed, aliquid accusantium, quod ipsa dolor possimus impedit minima eum ea a enim! Autem totam quasi esse molestias?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam doloribus fugit sed, aliquid accusantium, quod ipsa dolor possimus impedit minima eum ea a enim! Autem totam quasi esse molestias?
        </div>
      </div>
    </div>
    <div class="container mt-6">
      <div class="columns">
        <div class="column is-half-desktop">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam doloribus fugit sed, aliquid accusantium, quod ipsa dolor possimus impedit minima eum ea a enim! Autem totam quasi esse molestias?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam doloribus fugit sed, aliquid accusantium, quod ipsa dolor possimus impedit minima eum ea a enim! Autem totam quasi esse molestias?
        </div>
        <div class="column is-half-desktop">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam doloribus fugit sed, aliquid accusantium, quod ipsa dolor possimus impedit minima eum ea a enim! Autem totam quasi esse molestias?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam doloribus fugit sed, aliquid accusantium, quod ipsa dolor possimus impedit minima eum ea a enim! Autem totam quasi esse molestias?
        </div>
      </div>
    </div>
  </div>

  `;
};
