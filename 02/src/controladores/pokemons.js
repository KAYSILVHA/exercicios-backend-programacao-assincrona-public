const { listarPokemons, detalharPokemon } = require('utils-playground')

const listaPokemons = async (req, res) => {
  const pokemon = await listarPokemons();
  return res.status(200).json(pokemon)
};


const detalharPokemonPorIdOuNome = async (req, res) => {
  const { idOuNome } = req.params;
    const pokemon = await detalharPokemon(idOuNome);
    
    const pokemonSelecionado = {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      base_experience: pokemon.base_experience,
      forms: pokemon.forms,
      abilities: pokemon.abilities,
      species: pokemon.species,
    };

    return res.status(200).json(pokemonSelecionado);
};

module.exports = {
  listaPokemons,
  detalharPokemonPorIdOuNome
}

