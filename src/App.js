import React from "react";
import Client from "./Client";
import Visiteur from "./Visiteur";

function App() {
  // variable simple
  const connecte = true; // essaie b false bach tchouf l'autre cas

  // affichage conditionnel
  if (connecte) {
    return <Client />;
  } else {
    return <Visiteur />;
  }
}

export default App;
