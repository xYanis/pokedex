import { useState } from 'react'; // Importation du hook useState
import './App.css'; // Importation du fichier CSS
import PokemonCard from './components/PokemonCard'; // Importation de PokemonCard

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

  // Fonction pour passer au Pokémon précédent
  const handlePrev = () => {
    setPokemonIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  // Fonction pour passer au Pokémon suivant
  const handleNext = () => {
    setPokemonIndex((prevIndex) =>
      prevIndex < pokemonList.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div>
      {/* Affiche le Pokémon en fonction de pokemonIndex */}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {/* Affichage conditionnel des boutons */}
      <div>
        {/* Affiche le bouton "Précédent" seulement si pokemonIndex > 0 */}
        {pokemonIndex > 0 && (
          <button onClick={handlePrev}>Précédent</button>
        )}

        {/* Affiche le bouton "Suivant" seulement si pokemonIndex < pokemonList.length - 1 */}
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={handleNext}>Suivant</button>
        )}
      </div>
    </div>
  );
}

export default App;

