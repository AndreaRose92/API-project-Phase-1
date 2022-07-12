// function getRandomInt(min, max) {
//     min = math.ceil(1)
//     max = math.floor(899)
//     return math.floor(math.random()*(max-min)+min)
// }

// function capitalize(string) {
//     string = string.charAt(0).toUpperCase() + string.slice(1)
//     return string
// }

// function pokedexEntry(pokemons){
//     const pokedex = document.querySelector('.pokedex')
//     pokemons.forEach(pokemon=>{
//         const pokeTitle = document.createElement('p')
//         pokeTitle.textContent = pokemon.species.name
//         pokedex.append(pokeTitle)
//     })
// }

// function pageStart() {
//     fetch('https://pokeapi.co/api/v2/pokemon/')
//         .then(r=>r.json())
//         .then((json)=>pokedexEntry(json))
// }

// // function createPokeCard(json) {
// //     let pokemonObj = JSON.parse(json)
// //     pokemonObj.forEach(pokemon => {
// //         const tallGrass = document.querySelector('.cardContainer')
// //         const pokeCard = document.createElement('div')
// //         const pokeName = document.createElement('h2')
// //         const pokeSprite = document.createElement('img')
// //         const pokeTypes = document.createElement('p')
// //         const pokeBall = document.createElement('button')
// //         pokeBall.textContent = 'Catch!'
// //         pokeName.innerText = capitalize(pokemon.species.name)
// //         pokeSprite.src = pokemon.sprites.other['official-artwork'].front_default
// //         pokemon.types[1] ? pokeTypes.textContent = `${capitalize(pokemon.types[0].type.name)}, ${capitalize(pokemon.types[1].type.name)}` : pokeTypes.textContent = capitalize(pokemon.types[0].type.name)
// //         let i = 0
// //         while (i<3) {
// //             tallGrass.append(pokemonObj[`${getRandomInt()}`])
// //             pokeCard.appendChild(pokeName, pokeSprite, pokeTypes, pokeBall)
// //             i++
// //         }
// //     })
// // }

// // function pageStart(){
// //     fetch('https://pokeapi.co/api/v2/pokemon')
// //         .then(r=>r.json())
// //         .then(json=>createPokeCard(json))
// // }


// function addEvents() {}

// const init = () => {pageStart(), addEvents()}
// document.addEventListener("DOMContentLoaded", init)