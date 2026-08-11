import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const POKEAPI_URL = "https://pokeapi.co/api/v2";

const types = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
];


/** @type {Record<string, Record<string, number>>} */
const typeChart = {};

for (const type of types) {
    console.log(`Buscando tipo ${type}...`);

    const response = await fetch(
    `${POKEAPI_URL}/type/${type}`
    );

    if (!response.ok) {
        console.log(`Erro ao buscar ${type}`);
        continue;
    }

    const data = await response.json();
    console.log(data.damage_relations);

    typeChart[type] = {};

    for (const target of data.damage_relations.double_damage_to) {
         typeChart[type][target.name] = 2;
}

    for (const target of data.damage_relations.half_damage_to) {
        typeChart[type][target.name] = 0.5;
}

    for (const target of data.damage_relations.no_damage_to) {
         typeChart[type][target.name] = 0;
}


}

const outputPath = path.join(
    __dirname,
    "../src/data/typeChart.js"
);

const fileContent =
    `const typeChart = ${JSON.stringify(typeChart, null, 4)};\n\n` +
    `export default typeChart;`;
console.log(fileContent.slice(0, 200));

console.log(typeChart);
console.log(Object.keys(typeChart).length);
fs.writeFileSync(outputPath, fileContent);

console.log(`Arquivo criado com sucesso!\n${outputPath}`);