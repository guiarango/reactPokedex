import React from "react";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <h1>Bienvenidos clase de Énfasis Web III</h1>
      <p style={{ fontSize: 20, marginTop: 20, marginBottom: 20 }}>
        En esta presentación vamos a crear una aplicación simulando un Pokédex
        con:
      </p>

      <h1>React</h1>
      <img src="/logo512.png" alt="logo react" />
    </div>
  );
};

export default Home;
