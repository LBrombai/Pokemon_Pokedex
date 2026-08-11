import pokemonData from "../assets/pokemonData.js";

function getAllItems() {
    const items = new Set();

    for (const pokemon of pokemonData) {
        for (const drop of pokemon.drops) {
            if (!drop.name.trim()) continue;

            items.add(drop.name);
        }
    }

    return [...items];
}

function getPokemonByItem(itemName) {
    const results = [];

    for (const pokemon of pokemonData) {
        const drop = pokemon.drops.find(
            (drop) => drop.name === itemName
        );

        if (drop) {
            results.push({
                pokemon,
                drop,
            });
        }
    }

    return results;
}

export { getAllItems, getPokemonByItem };