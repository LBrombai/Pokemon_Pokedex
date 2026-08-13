import "./App.css";
import { useState } from "react";
import pokemonData from "./assets/pokemonData";
import { getAllItems, getPokemonByItem } from "./utils/itemUtils";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import ItemCard from "./components/ItemCard";


function App() {
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = getAllItems();

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
);

  const pokemon = pokemonData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );


  function handleSearch(value) {
    setSearch(value);
    setSelectedPokemon(null);
    setSelectedItem(null);
  }

return (
    <>
        <header className="app-header">
            <h1>Pokédex Drops</h1>
            <p>Encontre os drops de qualquer Pokémon</p>
        </header>

        <SearchBar
            search={search}
            setSearch={handleSearch}
        />

        {!selectedPokemon && !selectedItem && search.trim() && (
            <div className="search-results">

                {pokemon.length > 0 && (
                    <section>
                        <h3>Pokémon</h3>

                        <ul className="pokemon-list">
                            {pokemon.map((item) => (
                                <li
                                    key={item.name}
                                    className="pokemon-item"
                                >
                                    <button
                                        className="pokemon-button"
                                        onClick={() =>
                                            setSelectedPokemon(item)
                                        }
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {filteredItems.length > 0 && (
                    <section>
                        <h3>Itens</h3>

                        <ul className="pokemon-list">
                            {filteredItems.map((item) => (
                                <li
                                    key={item}
                                    className="pokemon-item"
                                >
                                    <button
                                        className="pokemon-button"
                                        onClick={() => setSelectedItem(item)}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {pokemon.length === 0 &&
                    filteredItems.length === 0 && (
                        <p>No results found.</p>
                    )}
            </div>
        )}

        {selectedPokemon && (
            <PokemonCard
                pokemon={selectedPokemon}
                onSelectItem={(item) => {
                    setSelectedItem(item);
                    setSelectedPokemon(null);
                }}
            />
        )}

        {selectedItem && (
            <ItemCard
                item={selectedItem}
                onSelectPokemon={(pokemon) => {
                    setSelectedPokemon(pokemon);
                    setSelectedItem(null);
                }}
            />
        )}
    </>
)};

export default App;
