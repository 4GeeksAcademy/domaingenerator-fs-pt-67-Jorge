/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["I", "You", "He", "She", "We"];
let adj = ["Big", "Small", "Fast", "Beautiful", "Smart"];
let noun = ["Dog", "Cat", "Table", "City", "Mountain"];
let dom = [".com", ".es", ".net", ".org", ".us"];
let dominios = [];

window.onload = function() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let c = 0; c < dom.length; c++) {
          console.log(pronoun[i] + adj[j] + noun[k] + dom[c]);
          //declarar array vacío dentro de la función para ponerle dentro los arrays que hagamos generales
          dominios.push(pronoun[i] + adj[j] + noun[k] + dom[c]);
        }
      }
    }
  }
  document.getElementById("dominios").innerHTML = dominios.join("<br>");
};
