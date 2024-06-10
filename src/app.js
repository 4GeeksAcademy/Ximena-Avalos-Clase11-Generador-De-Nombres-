/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //Mi codigo

  function forLoopArreglo() {
    const pronoun = ["the", "our"];
    const adj = ["great", "big"];
    const noun = ["jogger", "racoon"];
    const extensions = [".com", ".net", ".us", ".io", ".mx"];

    console.log("Lista de combinaciones de dominios:");

    for (let p = 0; p < pronoun.length; p++) {
      for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
          for (let e = 0; e < extensions.length; e++) {
            console.log(pronoun[p] + adj[a] + noun[n] + extensions[e]);
          }
        }
      }
    }
  }

  forLoopArreglo();
};
