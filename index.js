


function getRandomInt(min, max) {
    min = Math.ceil(1)
    max = Math.floor(899)
    return Math.floor(Math.random() * (max - min) + min)
}


function generatePokemon()  {
    fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt()}`)
        .then(r => r.json())
        .then(json => generatePokemonCard(json))
}
function generateThreePokemon() {
    const cardContainer = document.querySelector('.cardContainer')
    cardContainer.innerHTML = ''
    for (i = 0; i < 3; i++) {
        generatePokemon()
    }
}



function generatePokemonCard(json) {
    const cardContainer = document.querySelector('.cardContainer')
    const pokeCard = document.createElement('div')
    const pokeName = document.createElement('h2')
    const pokeSprite = document.createElement('img')
    const pokeTypeOne = document.createElement('p')
    const pokeTypeTwo = document.createElement('p')
    const catchButton = document.createElement('button')
    catchButton.textContent = "Catch"
    pokeName.innerText = json.species.name
    pokeSprite.src = json.sprites.front_default
    pokeTypeOne.textContent = json.types[0].type.name
    json.types[1] ? pokeTypeTwo.textContent = json.types[1].type.name : pokeTypeTwo.innerHTML = ''
    cardContainer.append(pokeCard)
    pokeCard.append(pokeName, pokeSprite, pokeTypeOne, pokeTypeTwo, catchButton)
    pokeCard.className = "card"
}

const btn = document.querySelector('button')

btn.addEventListener('click', generateThreePokemon)