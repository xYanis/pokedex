import React from 'react';

interface Pokemon {
  name: string;
  imgSrc?: string | null;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

const NavBar: React.FC<NavBarProps> = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => {
            setPokemonIndex(index);
            if (pokemon.name === "pikachu") {
              alert("pika pikachu !!!");
            }
          }}
          style={{
            fontWeight: pokemonIndex === index ? 'bold' : 'normal', 
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
