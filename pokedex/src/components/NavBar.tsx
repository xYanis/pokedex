import React from 'react';

// Définition de l'interface Pokemon
interface Pokemon {
  name: string;
  imgSrc?: string | null;
}

// Interface pour typer les props du composant NavBar
interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

const NavBar: React.FC<NavBarProps> = ({ setPokemonIndex, pokemonList }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name} 
          onClick={() => setPokemonIndex(index)} 
        >
          {pokemon.name} 
        </button>
      ))}
    </div>
  );
};

export default NavBar;
