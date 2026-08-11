const rare = 1;
const pokemonData = [
  //Phenac City

  {
    name: "Taillow",
    drops: [
      { name: "Rubber Ball", quantity: { min: 1, max: 5 }, chance: 100 },
      { name: "Straw", quantity: { min: 1, max: 5 }, chance: 100 },
      { name: "Feather", quantity: { min: 1, max: 1 }, chance: 39 },
      { name: "Bird Beak", quantity: { min: 1, max: 1 }, chance: 18 },
      { name: "Crimson Feather", quantity: { min: 1, max: 1 }, chance: 5.5 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Swellow",
    drops: [
      { name: "Straw", quantity: { min: 1, max: 19 }, chance: 100 },
      { name: "Rubber Ball", quantity: { min: 1, max: 19 }, chance: 100 },
      { name: "Bird Beak", quantity: { min: 1, max: 1 }, chance: 76.5 },
      { name: "Feather", quantity: { min: 1, max: 1 }, chance: 65 },
      { name: "Crimson Feather", quantity: { min: 1, max: 1 }, chance: 53.1 },
      { name: "Feather Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Heart Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Swablu",
    drops: [
      { name: "Rubber Ball", quantity: { min: 1, max: 5 }, chance: 100 },
      { name: "Straw", quantity: { min: 1, max: 5 }, chance: 100 },
      { name: "Feather", quantity: { min: 1, max: 1 }, chance: 39 },
      { name: "Cloud", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Altaria",
    drops: [
      { name: "Straw", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Dragon Scale", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Feather", quantity: { min: 1, max: 1 }, chance: 76.5 },
      { name: "Cloud", quantity: { min: 1, max: 1 }, chance: 27.6 },
      { name: "Feather Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Crystal Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Zangoose",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Seviper",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Makuhita",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Hariyama",
    drops: [
      { name: "Band-aid", quantity: { min: 1, max: 43 }, chance: 100 },
      { name: "Samurai Hair", quantity: { min: 1, max: 1 }, chance: 75 },
      { name: "Big Hands", quantity: { min: 1, max: 1 }, chance: 35 },
      { name: "Punch Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Ancient Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Aron",
    drops: [
      { name: "Piece of Steel", quantity: { min: 1, max: 5 }, chance: 100 },
      { name: "Small Stone", quantity: { min: 1, max: 5 }, chance: 100 },
      { name: "Stone Orb", quantity: { min: 1, max: 1 }, chance: 60 },
      { name: "Metal Hull", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Lairon",
    drops: [
      { name: "", quantity: { min: 1, max: 1 }, chance: 1 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 1 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 1 },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Mawile",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Bagon",
    drops: [
      { name: "Dragon Scale", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Mini Wings", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Shelgon",
    drops: [
      { name: "Dragon Scale", quantity: { min: 1, max: 20 }, chance: 100 },
      { name: "Mini Wings", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Crystal Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Whismur",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Loudred",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Exploud",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Duskull",
    drops: [
      { name: "Ghost Essence", quantity: { min: 1, max: 20 }, chance: 100 },
      { name: "Ghost Skull", quantity: { min: 1, max: 1 }, chance: 10 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Dusclops",
    drops: [
      { name: "Ghost Essence", quantity: { min: 1, max: 43 }, chance: 100 },
      { name: "Ghost Skull", quantity: { min: 1, max: 1 }, chance: 50 },
      { name: "Darkness Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Creepy Eye", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Shuppet",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Banette",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Spoink",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Grumpig",
    drops: [
      { name: "Enchanted Gem", quantity: { min: 1, max: 43 }, chance: 100 },
      { name: "Future Orb", quantity: { min: 1, max: 1 }, chance: 90 },
      { name: "Springs", quantity: { min: 1, max: 1 }, chance: 85 },
      { name: "Enigma Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Cacnea",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Cacturne",
    drops: [
      { name: "Dark Gem", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Seed", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Small Crown", quantity: { min: 1, max: 1 }, chance: 75 },
      { name: "Cactus Head", quantity: { min: 1, max: 1 }, chance: 85 },
      { name: "Leaf Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Darkness Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Meditite",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Baltoy",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Claydol",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Trapinch",
    drops: [
      { name: "Earth Ball", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Sandbag", quantity: { min: 1, max: 1 }, chance: 60 },
      { name: "Strange Ball", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Vibrava",
    drops: [
      { name: "Earth Ball", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Dragon Scale", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Sandbag", quantity: { min: 1, max: 1 }, chance: 90 },
      { name: "Sand Tail", quantity: { min: 1, max: 1 }, chance: 10 },
      { name: "Earth Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Flygon",
    drops: [
      { name: "Earth Ball", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Dragon Scale", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Sandbag", quantity: { min: 1, max: 1 }, chance: 50 },
      { name: "Sand Tail", quantity: { min: 1, max: 1 }, chance: 20 },
      { name: "Earth Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Crystal Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Anorith",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Armaldo",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Bronzor",
    drops: [
      { name: "Piece of Steel", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Tech Ball", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  {
    name: "Bronzong",
    drops: [
      { name: "Piece of Steel", quantity: { min: 1, max: 20 }, chance: 100 },
      { name: "Metal Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Tech Ball", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Enigma Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Phenac City"],
  },

  //Agate Village

  {
    name: "Croagunk",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Toxicroak",
    drops: [
      { name: "Bottle of Poison", quantity: { min: 1, max: 35 }, chance: 100 },
      { name: "Band-aid", quantity: { min: 1, max: 35 }, chance: 100 },
      { name: "Punch Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Venom Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Crystal Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Treecko",
    drops: [
      { name: "Seed", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Leaves", quantity: { min: 1, max: 1 }, chance: 78 },
      { name: "Greens", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Grovyle",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Sceptile",
    drops: [
      { name: "Seed", quantity: { min: 1, max: 43 }, chance: 100 },
      { name: "Leaves", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "Greens", quantity: { min: 1, max: 1 }, chance: 70.1 },
      { name: "Leaf Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Tropius",
    drops: [
      { name: "Straw", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Seed", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Bird Beak", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "Feather", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "Palm Leaves", quantity: { min: 1, max: 1 }, chance: 63.8 },
      { name: "Feather Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Leaf Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Ancient Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Seedot",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Nuzleaf",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Shiftry",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Electrike",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Poochyena",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Mightyena",
    drops: [
      { name: "Dark Gem", quantity: { min: 1, max: 43 }, chance: 100 },
      { name: "Hyena Tail", quantity: { min: 1, max: 1 }, chance: 54.4 },
      { name: "Darkness Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Absol",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Lileep",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Cradily",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Lotad",
    drops: [
      { name: "Water Gem", quantity: { min: 1, max: 5 }, chance: 100 },
      { name: "Seed", quantity: { min: 1, max: 5 }, chance: 100 },
      { name: "Leaves", quantity: { min: 1, max: 1 }, chance: 39 },
      { name: "Water Pendant", quantity: { min: 1, max: 1 }, chance: 39 },
      { name: "Water Plant", quantity: { min: 1, max: 1 }, chance: 5.5 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Lombre",
    drops: [
      { name: "Seed", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Water Gem", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Leaves", quantity: { min: 1, max: 1 }, chance: 48 },
      { name: "Water Pendant", quantity: { min: 1, max: 1 }, chance: 48 },
      { name: "Water Plant", quantity: { min: 1, max: 1 }, chance: 11 },
      { name: "Leaf Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Water Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Ludicolo",
    drops: [
      { name: "Seed", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Water Gem", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Leaves", quantity: { min: 1, max: 1 }, chance: 68.3 },
      { name: "Water Pendant", quantity: { min: 1, max: 1 }, chance: 68.3 },
      { name: "Water Plant", quantity: { min: 1, max: 1 }, chance: 73.3 },
      { name: "Leaf Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Water Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Slakoth",
    drops: [
      { name: "Rubber Ball", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Fur", quantity: { min: 1, max: 1 }, chance: 78 },
      { name: "Fur Ball", quantity: { min: 1, max: 1 }, chance: 6.5 },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Vigoroth",
    drops: [
      { name: "Rubber Ball", quantity: { min: 1, max: 43 }, chance: 100 },
      { name: "Fur", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "Fur Ball", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "Hearth Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Mudkip",
    drops: [
      { name: "Water Gem", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Water Pendant", quantity: { min: 1, max: 1 }, chance: 63 },
      { name: "Black Fins", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Marshtomp",
    drops: [
      { name: "Earth Ball", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Water Gem", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Sandbag", quantity: { min: 1, max: 1 }, chance: 48 },
      { name: "Water Pendant", quantity: { min: 1, max: 1 }, chance: 48 },
      { name: "Black Fins", quantity: { min: 1, max: 1 }, chance: 10 },
      { name: "Earth Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Water Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Swampert",
    drops: [
      { name: "Earth Ball", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Water Gem", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Sandbag", quantity: { min: 1, max: 1 }, chance: 68.3 },
      { name: "Water Pendant", quantity: { min: 1, max: 1 }, chance: 68.3 },
      { name: "Black Fins", quantity: { min: 1, max: 1 }, chance: 56.5 },
      { name: "Earth Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Water Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Corphish",
    drops: [
      { name: "Water Gem", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Water Pendant", quantity: { min: 1, max: 1 }, chance: 63 },
      { name: "Lobster Claw", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Crawdaunt",
    drops: [
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Torchic",
    drops: [
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Combusken",
    drops: [
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Blaziken",
    drops: [
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Numel",
    drops: [
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Camerupt",
    drops: [
      { name: "Essence of Fire", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Earth Ball", quantity: { min: 1, max: 21 }, chance: 100 },
      { name: "Pot of Lava", quantity: { min: 1, max: 1 }, chance: 96.8 },
      { name: "Sandbag", quantity: { min: 1, max: 1 }, chance: 22 },
      { name: "Nu Ball", quantity: { min: 1, max: 1 }, chance: 20.7 },
      { name: "Fire Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Earth Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Mini Volcano", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Torkoal",
    drops: [
      { name: "Essence of Fire", quantity: { min: 1, max: 63 }, chance: 100 },
      { name: "Pot of Lava", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "Black Hull", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "Fire Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Ancient Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Spheal",
    drops: [
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Sealeo",
    drops: [
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Walrein",
    drops: [
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Snorunt",
    drops: [
      { name: "Snowball", quantity: { min: 1, max: 10 }, chance: 100 },
      { name: "Ice Orb", quantity: { min: 1, max: 1 }, chance: 30 },
      { name: "Ice Blocks", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Glalie",
    drops: [
      { name: "Snowball", quantity: { min: 1, max: 43 }, chance: 100 },
      { name: "Ice Orb", quantity: { min: 1, max: 1 }, chance: 75 },
      { name: "Ice Blocks", quantity: { min: 1, max: 1 }, chance: 68 },
      { name: "Ice Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Froslass",
    drops: [
      { name: "Snowball", quantity: { min: 1, max: 43 }, chance: 100 },
      { name: "Ice Orb", quantity: { min: 1, max: 1 }, chance: 75 },
      { name: "Ice Blocks", quantity: { min: 1, max: 1 }, chance: 34.4 },
      { name: "Ice Stone", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "Dawn Stone", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Snover",
    drops: [
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  {
    name: "Abomasnow",
    drops: [
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: 100 },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
      { name: "", quantity: { min: 1, max: 1 }, chance: rare },
    ],
    locations: ["Agate Village"],
  },

  // MT Silver

  {
    name: "Weezing",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Poliwrath",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Scizor",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Kingdra",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Golduck",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Quagsire",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Tyranitar",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Donphan",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver", "Outland South"],
  },

  {
    name: "Steelix",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver", "Outland East"],
  },

  {
    name: "Onix",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Qwilfish",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Parasect",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver", "Outland North"],
  },

  {
    name: "Gliscor",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Ursaring",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Weavile",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Lapras",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  {
    name: "Misdreavus",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver", "Outland East"],
  },

  {
    name: "Mismagius",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["MT Silver"],
  },

  // Partes Externas de MT Silver

  {
    name: "Houndoom",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Partes Externas"],
  },

  {
    name: "Rapidash",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Partes Externas"],
  },

  {
    name: "Arbok",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Partes Externas"],
  },

  {
    name: "Primeape",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Partes Externas"],
  },

  {
    name: "Sunflora",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Partes Externas"],
  },

  {
    name: "Heracross",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Partes Externas", "Outland North"],
  },

  {
    name: "Dragonite",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Partes Externas"],
  },

  {
    name: "Delibird",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Partes Externas"],
  },

  {
    name: "Drifblim",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Partes Externas"],
  },

  {
    name: "Togekiss",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Partes Externas"],
  },

  //Outlands
  //Outland EAST

  {
    name: "Hitmonlee",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East"],
  },

  {
    name: "Hitmonchan",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East"],
  },

  {
    name: "Hitmontop",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East"],
  },

  {
    name: "Arcanine",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East"],
  },

  {
    name: "Magmar",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East", "MT Silver"],
  },

  {
    name: "Typhlosion",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East", "Outland South"],
  },

  {
    name: "Nidoking",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East"],
  },

  {
    name: "Nidoqueen",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East"],
  },

  {
    name: "Gengar",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East"],
  },

  {
    name: "Honchkrow",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East"],
  },

  {
    name: "Rhydon",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East"],
  },

  {
    name: "Golem",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East"],
  },

  {
    name: "Pupitar",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East"],
  },

  {
    name: "Wigglytuff",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland East", "Outland South"],
  },

  //Outland North

  {
    name: "Meganium",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North"],
  },

  {
    name: "Venusaur",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North"],
  },

  {
    name: "Girafarig",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North"],
  },

  {
    name: "Xatu",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North", "Outland North"],
  },

  {
    name: "Alakazam",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North"],
  },

  {
    name: "Hypno",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North"],
  },

  {
    name: "Blastoise",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North"],
  },

  {
    name: "Feraligatr",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North"],
  },

  {
    name: "Mantine",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North"],
  },

  {
    name: "Gyarados",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North"],
  },

  {
    name: "Pinsir",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North"],
  },

  {
    name: "Scyther",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland North"],
  },

  //Outland South

  {
    name: "Miltank",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Clefable",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Granbull",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South", "Partes Externas"],
  },

  {
    name: "Noctowl",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Skarmory",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Pidgeot",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Crobat",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South", "MT Silver"],
  },

  {
    name: "Marowak",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Sandslash",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Electabuzz",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Ampharos",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South", "Partes Externas"],
  },

  {
    name: "Raichu",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Charizard",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South", "Outland East"],
  },

  {
    name: "Dewgong",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Cloyster",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Piloswine",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Dragonair",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },

  {
    name: "Jynx",
    drops: [
      { name: "", chance: 1 },
      { name: "", chance: 2 },
      { name: "", chance: 3 },
      { name: "", chance: 4 },
      { name: "", chance: 2 },
    ],
    locations: ["Outland South"],
  },
];

export default pokemonData;
