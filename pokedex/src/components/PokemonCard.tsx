const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const PokemonCard: React.FC = () => {
  const pokemon = pokemonList[1]; // Premier Pokémon du tableau

  return (
    <figure>
      {/* Afficher l'image seulement si imgSrc est défini, sinon afficher ??? */}
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption> {/* Nom du Pokémon */}
    </figure>
  );
};

export default PokemonCard;
