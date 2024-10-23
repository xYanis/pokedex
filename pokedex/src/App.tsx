import { useState } from 'react'; // Importation du hook useState
import './App.css'; // Importation du fichier CSS
import PokemonCard from './components/PokemonCard'; // Importation de PokemonCard
import NavBar from './components/NavBar'; // Importation de NavBar

// Déclaration du tableau pokemonList avec plus de Pokémon
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc: null, // imgSrc est défini sur null pour Mew
  },
];

function App() {
  // Création de l'état pokemonIndex, initialisé à 0 (Bulbasaur)
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      {/* Affiche le Pokémon en fonction de pokemonIndex */}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {/* Utilisation du composant NavBar pour naviguer entre les Pokémon */}
      <NavBar 
        pokemonIndex={pokemonIndex} 
        setPokemonIndex={setPokemonIndex} 
        pokemonList={pokemonList} 
      />
    </div>
  );
}

export default App;
