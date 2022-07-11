function capitalize(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1)
    return string
}


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
    // const pokeTypeOne = document.createElement('p')
    // const pokeTypeTwo = document.createElement('p')
    const pokeTypes = document.createElement('p')
    const catchButton = document.createElement('button')
    catchButton.textContent = "Catch"
    pokeName.innerText = capitalize(json.species.name)
    pokeSprite.src = json.sprites.front_default
    json.types[1] ? pokeTypes.textContent = `${capitalize(json.types[0].type.name)}, ${capitalize(json.types[1].type.name)}` : pokeTypes.textContent = capitalize(json.types[0].type.name)
    // pokeTypeOne.textContent = json.types[0].type.name
    // json.types[1] ? pokeTypeTwo.textContent = json.types[1].type.name : pokeTypeTwo.innerHTML = ''
    cardContainer.append(pokeCard)
    pokeCard.append(pokeName, pokeSprite, pokeTypes, catchButton)
    pokeCard.className = "card"

    catchButton.addEventListener( 'click', () => {
        pokeCard.removeChild(catchButton)
        const releaseButton = document.createElement('button')
        releaseButton.textContent = 'Release'
        pokeCard.append(releaseButton)
        myTeam.append(pokeCard)
    })
}

const btn = document.querySelector('button')

btn.addEventListener('click', generateThreePokemon)

const myTeam = document.querySelector('.myTeam')

