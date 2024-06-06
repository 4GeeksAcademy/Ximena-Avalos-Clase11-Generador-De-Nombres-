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
    const extensions = [".com", ".net", ".us", ".io"];

    console.log("Lista de combinaciones de dominios:");

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; n < noun.length; k++) {
          for (let e = 0; e < extensions.length; e++) {
            console.log(pronoun[i] + adj[j] + noun[k] + extensions[e]);
          }
        }
      }
    }
  }

  forLoopArreglo();
};
