import React from "react";
import { useState, useCallback, useEffect } from "react";

import { getPokemonByUrl } from "../../Services/services";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Loader from "../ui/Loader";

import classes from "./PokemonCard.module.css";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});

  const callPokemonByUrl = useCallback(async (pokemonUrl) => {
    const result = await getPokemonByUrl(pokemonUrl);
    setPokemonInfo({
      name: result.name,
      types: result.types,
      image: result.sprites.other["official-artwork"].front_default,
    });
  }, []);

  useEffect(() => {
    callPokemonByUrl(pokemonUrl);
  }, [callPokemonByUrl, pokemonUrl]);

  if (!pokemonInfo.name) {
    return (
      <Card className={classes.pokemonCard}>
        <Loader />
      </Card>
    );
  }

  return (
    <Card className={classes.pokemonCard}>
      <Card className={classes.pokemonName}>{pokemonInfo.name}</Card>

      <img
        src={pokemonInfo.image}
        alt={pokemonInfo.name}
        className={classes.pokemonImage}
      />
      <div className={classes.typesContainer}>
        <h4 style={{ height: 15, marginTop: 10, marginBottom: 10 }}>Tipos</h4>
        <div className={classes.typesList}>
          {pokemonInfo.types.map((type, index) => {
            return (
              <p key={index} className={classes.type}>
                {type.type.name}
              </p>
            );
          })}
        </div>
        <Button className={classes.cta} url={pokemonUrl}>
          Ver Pokemon
        </Button>
      </div>
    </Card>
  );
};

export default PokemonCard;
