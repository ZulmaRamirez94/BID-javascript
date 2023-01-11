const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
//Una serie de objetos Pokémon donde la identificación es divisible por 3
const pkmnDivisibleConTres = pokemon.filter(p => p.id % 3 === 0).map(val => val.name);
console.log("Id divisible por 3: ", pkmnDivisibleConTres);

//una serie de objetos Pokémon que son del tipo "fuego"
const pkmnTypeFire = pokemon.filter( p => p.types[0] === "fire" );
console.log("pokemon del tipo fuego: ", pkmnTypeFire);

//Una variedad de objetos Pokémon que tienen más de un tipo
const pkmnConVariosTipos = pokemon.filter( p => p.types.length === 2 ).map(val => val.name);
console.log(" Pokemon que tienen mas de un tipo: ", pkmnConVariosTipos);

//una matriz con solo los nombres de los Pokémon
const pkmnNames = pokemon.map(val => val.name);
console.log(" Matriz con los nombres de pokemon: ", pkmnNames);

//Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
const pkmnIDmayor99 = pokemon.filter(p => p.id > 99).map(val => val.name);
console.log(" Nombres de Pokemon con id mayor a 99: ", pkmnIDmayor99);

//una matriz con solo los nombres del pokémon cuyo único tipo es veneno    VERIFICAAAAAAAAAAARRRRR
const pkmnTipoVeneno = pokemon.filter( p => p.types[0] === "poison" ).map(val => val.name);
console.log(" Pokemon cuyo unico tipo es veneno: ", pkmnTipoVeneno);

//una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const pkmnSegundoTipoVolador = pokemon.filter( p => p.types[1] === "flying").map(val => val.types[0] == val.name);
console.log("Primer tipo de pokemon que son de segundo tipo volador ", pkmnSegundoTipoVolador);

//un recuento de la cantidad de pokémon que son de tipo "normal"
const pkmnTipoNormal = pokemon.filter( p => p.types[0] === "normal");
console.log(" Polemon del tipo normal: ", pkmnTipoNormal);
