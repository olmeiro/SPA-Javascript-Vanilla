import { App } from "./App.js";
import api from './helpers/rick_api.js';

document.addEventListener('DOMContentLoaded', App);

//Cambio del hash: clg location.hash:
window.addEventListener('hashchange', () => {
  api.page = 1;
  App();
});