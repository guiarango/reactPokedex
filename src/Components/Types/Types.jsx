import React from "react";
import { useState, useEffect, useCallback } from "react";

import Button from "../ui/Button";

import Loader from "../ui/Loader";

import classes from "./Types.module.css";

import { getPokemonTypes } from "../../Services/services";

const Types = () => {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const callPokemonTypes = useCallback(async () => {
    const pokemonTypesList = await getPokemonTypes();
    setPokemonTypes(pokemonTypesList.results);
  }, []);

  useEffect(() => {
    callPokemonTypes();
  }, [callPokemonTypes]);

  if (pokemonTypes.length <= 0) {
    return (
      <div className={classes.typesContainer}>
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div className={classes.typesContainer}>
      <ul className={classes.typesLinks}>
        {pokemonTypes.map((type, index) => {
          return (
            <li key={index} className={classes.li}>
              <Button className={classes.typeLink} url={`/types/${type.name}`}>
                {type.name}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Types;
