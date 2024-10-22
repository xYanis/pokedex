import './App.css'; // Importation du fichier CSS
import PokemonCard from './components/PokemonCard'; // Importation de PokemonCard

// Déclaration du tableau pokemonList
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    imgSrc: null, // imgSrc est défini sur null pour Mew
  },
];

function App() {
  return (
    <div>
      {/* Affiche uniquement le Pokémon Mew */}
      <PokemonCard pokemon={pokemonList[1]} />
    </div>
  );
}

export default App;
