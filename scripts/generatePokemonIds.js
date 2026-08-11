import pokemonData from "../src/assets/pokemonData.js";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function addIds() {
  const pokemonWithIds =[];
  for (const pokemon of pokemonData) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name.toLowerCase()}`
    );



    const data = await response.json();
    pokemonWithIds.push({id: data.id, ...pokemon, 

    })

  }

  const fileContent = "export default" + JSON.stringify(pokemonWithIds, null, 2) + ";";

  const outputPath = path.join(
    __dirname,
    "../src/assets/pokemonDataWithIds.js"
  );

  
  fs.writeFileSync(outputPath, fileContent);
  
  console.log("Arquivo criado com sucesso!");
}

addIds();