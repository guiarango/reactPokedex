import React from "react";
import { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";
import { getAllPokemon, getAllPokemonByType } from "../../Services/services";

import PokemonCard from "../PokemonDetail/PokemonCard";

import classes from "./Pokedex.module.css";
import Loader from "../ui/Loader";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const params = useParams();
  const typeId = params.typeId;

  const callAllPokemonService = useCallback(async () => {
    const result = await getAllPokemon();
    setPokemonList(result.results);
  }, []);

  const callAllPokemonByTypeService = useCallback(async (type) => {
    const result = await getAllPokemonByType(type);
    const pokemonfiltered = result.pokemon.map((pokemon) => {
      return pokemon.pokemon;
    });

    setPokemonList(pokemonfiltered);
  }, []);

  useEffect(() => {
    if (!typeId) {
      callAllPokemonService();
    } else {
      callAllPokemonByTypeService(typeId);
    }
  }, [callAllPokemonService, callAllPokemonByTypeService, typeId]);

  if (pokemonList.length <= 0) {
    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 300,
          minHeight: 300,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div className={classes.pokemonList}>
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemonUrl={pokemon.url} />
      ))}
    </div>
  );
};

export default Pokedex;
