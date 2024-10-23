import React from 'react';

// Définition de l'interface Pokemon
interface Pokemon {
  name: string;
  imgSrc?: string | null; // Autoriser undefined et null
}

// Interface pour typer les props du composant NavBar
interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

const NavBar: React.FC<NavBarProps> = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  // Fonction pour aller au Pokémon précédent
  const handlePrev = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  // Fonction pour aller au Pokémon suivant
  const handleNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      {/* Affiche le bouton "Précédent" seulement si l'index est supérieur à 0 */}
      {pokemonIndex > 0 && <button onClick={handlePrev}>Précédent</button>}

      {/* Affiche le bouton "Suivant" seulement si l'index est inférieur à la longueur de la liste */}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNext}>Suivant</button>}
    </div>
  );
};

export default NavBar;
