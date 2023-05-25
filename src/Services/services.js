const urlPath = "https://pokeapi.co/api/v2";

//Traer todos los pokemon
export async function getAllPokemon() {
  const data = await fetch(`${urlPath}/pokemon/?limit=2000`);
  const pokemonList = data.json();

  return pokemonList;
}

//Traer todos los pokemon por tipo
export async function getAllPokemonByType(type) {
  const data = await fetch(`${urlPath}/type/${type}`);
  const pokemonList = data.json();

  return pokemonList;
}

//Traer pokemon por ID
export async function getPokemonByUrl(url) {
  const data = await fetch(`${url}`);
  const pokemonList = data.json();

  return pokemonList;
}

//Traer tipos de pokemon
export async function getPokemonTypes(url) {
  const data = await fetch(`${urlPath}/type`);
  const pokemonList = data.json();

  return pokemonList;
}
