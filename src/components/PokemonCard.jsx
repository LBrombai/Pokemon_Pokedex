import { getItemImage } from "../assets/itemImages";
import pokeball from "../assets/images/pokeball.svg";

import pokemonTypes from "../data/pokemonTypes.json";
import TypeBadge from "./TypeBadge";
import { getEffectiveness } from "../utils/typeCalculator";

function PokemonCard({ pokemon, onSelectItem }) {

  console.log(pokemon);

  const types = pokemonTypes[pokemon.id] ?? [];
  const effectiveness = getEffectiveness(types);

console.log("Pokemon:", pokemon.name);
console.log("Types:", types);
console.log("Effectiveness:", effectiveness);


  if (!pokemon) {
    return null;
  }

  return (
<div className="pokemon-card">

  <div className="pokemon-header">
    <h2>{pokemon.name}</h2>
    <span>#{pokemon.id}</span>
  </div>

  <div className="pokemon-content">
<div className="pokemon-image-wrapper">
      <div className="watermark">
        <img src={pokeball} />
    </div>
  <img
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
    alt={pokemon.name}
    className="pokemon-image"
  />
</div>

    <div className="pokemon-right">
<h3>📍 Location</h3>

    <p>{pokemon.locations.join(", ")}</p>

<h3>Types</h3>

<div className="pokemon-types">
    {types.map((type) => (
        <TypeBadge
            key={type}
            type={type}
        />
    ))}
</div>

<h3>Type Effectiveness</h3>

<h4>Effective</h4>
<div className="type-list">
    {effectiveness.effective.map((type) => (
        <TypeBadge
            key={type}
            type={type}
        />
    ))}
</div>

<h4>Ineffective</h4>
<div className="type-list">
    {effectiveness.ineffective.map((type) => (
        <TypeBadge
            key={type}
            type={type}
        />
    ))}
</div>

{effectiveness.noEffect.length > 0 && (
    <>
        <h4>No Effect</h4>

<div className="type-list">
    {effectiveness.noEffect.map((type) => (
        <TypeBadge
            key={type}
            type={type}
        />
    ))}
</div>
    </>
)}

      <h3>Drops</h3>

      <ul className="drop-list">
        {pokemon.drops.map((item) => {
          const image = getItemImage(item.name);

          return (
            <li key={item.name} className="drop-item"
            onClick={() => onSelectItem(item.name)}>
              {image && (
                <img
                  src={image}
                  alt={item.name}
                  className="drop-image"
                />
              )}

              <div className="drop-info">
                <div className="drop-header">
                  <strong>{item.name}</strong>

                  <span className="drop-chance">
                    {item.chance}%
                  </span>
                </div>

                <p>
                  Quantity: {item.quantity.min} - {item.quantity.max}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
</div>
  );
}

export default PokemonCard;