import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pokemonData from "../src/assets/pokemonData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const outputPath = path.join(__dirname, "../src/data/pokemonTypes.json");

const pokemonTypes ={};

for(const pokemon of pokemonData){
    console.log(`Buscando ${pokemon.name}...`)

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
    )

    if(!response.ok){
        console.log(`Erro ao buscar ${pokemon.name}`);
        continue
    }

    const data = await response.json();

    pokemonTypes[pokemon.id] = data.types.map(type =>type.type.name)
}

fs.writeFileSync(
    outputPath,
    JSON.stringify(pokemonTypes, null, 2)
);

console.log("Arquivo pokemonTypes.json criado com sucesso!");

