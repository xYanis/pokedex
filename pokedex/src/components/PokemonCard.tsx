interface Pokemon {
  name: string;
  imgSrc: string | null; // imgSrc peut être une chaîne ou null
}

interface PokemonCardProps {
  pokemon: Pokemon; // Définition des props
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => { // Utilisation de la déstructuration
  return (
    <figure>
      {pokemon.imgSrc ? ( // Vérification si imgSrc est défini
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p> // Affichage de "???" si imgSrc n'est pas défini
      )}
      <figcaption>{pokemon.name}</figcaption> {/* Affichage du nom du Pokémon */}
    </figure>
  );
};

export default PokemonCard;

