import { getPokemonByItem } from "../utils/itemUtils";
import { getItemImage } from "../assets/itemImages";

function ItemCard({ item, onSelectPokemon }) {
    const results = getPokemonByItem(item);

    const image = getItemImage(item);

    return (
<div className="item-card">

    <div className="item-header">
        <h2>{item}</h2>

        {image && (
            <img
                src={image}
                alt={item}
                className="item-image"
            />
        )}
    </div>

    <h3>Item dropado por: </h3>

    <ul>
        {results.map(({ pokemon, drop }) => (
            <li key={pokemon.id}>
                <button
                     className="item-pokemon-row"
                     onClick={() => onSelectPokemon(pokemon)}
                >
                    <strong>{pokemon.name}</strong>

                <span>
                    Chance: {drop.chance}%
                </span>

                <span>
                    Quantidade: {drop.quantity.min} - {drop.quantity.max}
                </span>
                </button>
            </li>
        ))}
    </ul>

</div>
    );
}

export default ItemCard;