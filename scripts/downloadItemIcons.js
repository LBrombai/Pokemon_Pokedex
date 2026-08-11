import * as cheerio from "cheerio";
import pokemonData from "../src/assets/pokemonData.js";
import { downloadFile } from "./utils/downloader.js";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const itemsFolder = path.join(
    __dirname,
    "../src/assets/items"
);

const WIKI_URL = "https://wiki.pokexgames.com";


const ITEM_PAGE_NAMES = {
  "Band-aid": "Band_Aid",
  "Bottle of Poison": "Bottle_Of_Poison",
  "Pot of Lava": "Pot_Of_Lava",
  "Piece of Steel": "Piece_Of_Steel",
};

function normalizeName(name) {
  return name
    .trim()
    .replace(/\.(png|gif)$/i, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

async function getWikiItems() {
  const response = await fetch(
    `${WIKI_URL}/index.php/Itens_de_Loot`
  );

  const html = await response.text();
  const $ = cheerio.load(html);

  const wikiItems = {};

  $("img").each((_, element) => {
    const alt = $(element).attr("alt");
    const src = $(element).attr("src");

    if (!alt || !src) return;

    const originalName = alt.replace(/\.(png|gif)$/i, "");

    wikiItems[normalizeName(originalName)] = {
      originalName,
      src,
    };
  });

  return wikiItems;
}

function getPokemonItems() {
  const items = new Set();

  for (const pokemon of pokemonData) {
    for (const drop of pokemon.drops) {
      if (!drop.name.trim()) continue;

      items.add(drop.name);
    }
  }

  return [...items];
}

async function findItemImage(itemName, wikiItems) {
  const key = normalizeName(itemName);

  if (wikiItems[key]) {
    return wikiItems[key];
  }

  return await searchItemPage(itemName);
}

async function searchItemPage(itemName) {
  const pageName =
  ITEM_PAGE_NAMES[itemName] ??
  itemName.replace(/\s+/g, "_");

  const response = await fetch(
    `${WIKI_URL}/index.php/${pageName}`
  );

  if (!response.ok) {
    return null;
  }

  const html = await response.text();
  const $ = cheerio.load(html);

  const firstImage = $("img").first();

const src = firstImage.attr("src");
const alt = firstImage.attr("alt");

if (!src || !alt) {
  return null;
}

return {
  originalName: alt.replace(/\.(png|gif)$/i, ""),
  src,
};
}

async function createItemsFolder() {
await fs.mkdir(itemsFolder, {
    recursive: true,
});
}

async function downloadImage(itemName, imageSrc) {
    const imageUrl = `${WIKI_URL}${imageSrc}`;

    console.log(`Baixando ${itemName}...`);

    const extension = imageSrc.split(".").pop();

    const fileName = `${itemName}.${extension}`;

    const filePath = path.join(
        itemsFolder,
        fileName
    );

    return await downloadFile(imageUrl, filePath);
}

async function main() {
  await createItemsFolder();

  const wikiItems = await getWikiItems();
  const pokemonItems = getPokemonItems();


  const stats = {
  found: 0,
  notFound: 0,
  downloaded: 0,
  skipped: 0,
};
  const missingItems = [];

  console.log(`Itens da Wiki: ${Object.keys(wikiItems).length}`);
  console.log(`Itens da Pokédex: ${pokemonItems.length}`);

  console.log("\nItens encontrados:\n");

 for (const item of pokemonItems) {
const image = await findItemImage(item, wikiItems);

if (image) {
  stats.found++;

  console.log(`✅ ${item} -> ${image.originalName}`);

  const result = await downloadImage(item, image.src);

  if (result === "downloaded") {
    stats.downloaded++;
  } else if (result === "skipped") {
    stats.skipped++;
  }
} else {
  stats.notFound++;
  missingItems.push(item);

  console.log(`❌ ${item}`);
}}
console.log("\n==========================");
console.log("Resumo");
console.log("==========================");
console.log(`Itens na Pokédex : ${pokemonItems.length}`);
console.log(`Encontrados      : ${stats.found}`);
console.log(`Não encontrados  : ${stats.notFound}`);
console.log(`Baixados         : ${stats.downloaded}`);
console.log(`Já existiam      : ${stats.skipped}`);
console.log("==========================");
if (missingItems.length > 0) {
  console.log("\nItens não encontrados:");

  for (const item of missingItems) {
    console.log(`- ${item}`);
  }
}
}

main();