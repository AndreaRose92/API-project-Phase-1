
function getRandomInt(min, max) {
    min = 0
    max = Math.floor(898)
    return Math.floor(Math.random() * (max - min) + min)
}


function generatePokemon(num)  {
    fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt()+num}`)
        .then(r => r.json())
        .then(pokemons => obj = {pokemons})
}
function generateThreePokemon() {
    const cardContainer = document.querySelector('.cardContainer')
    cardContainer.innerHTML = ''
    for (i = 0; i < 3; i++) {
        generatePokemon(i)
    }
}

function generatePokemonCard(pokemons) {
    pokemons.forEach(pokemon => {
    const cardContainer = document.querySelector('.cardContainer')
    const pokeCard = document.createElement('div')
    const pokeName = document.createElement('h2')
    const pokeSprite = document.createElement('img')
    // const pokeTypeOne = document.createElement('p')
    // const pokeTypeTwo = document.createElement('p')
    const pokeTypes = document.createElement('p')
    const catchButton = document.createElement('button')
    catchButton.textContent = "Catch"
    pokeName.innerText = capitalize(pokemon.species.name)
    pokeSprite.src = pokemon.sprites.other['official-artwork'].front_default
    pokemon.types[1] ? pokeTypes.textContent = `${capitalize(pokemon.types[0].type.name)}, ${capitalize(pokemon.types[1].type.name)}` : pokeTypes.textContent = capitalize(pokemon.types[0].type.name)
    // pokeTypeOne.textContent = json.types[0].type.name
    // json.types[1] ? pokeTypeTwo.textContent = json.types[1].type.name : pokeTypeTwo.innerHTML = ''
    cardContainer.append(pokeCard)
    pokeCard.append(pokeName, pokeSprite, pokeTypes, catchButton)
    pokeCard.className = "card"

    catchButton.addEventListener( 'click', () => {
        if (myTeam.childElementCount >= 5) {
            myTeam.firstChild.remove()
        }
        pokeCard.removeChild(catchButton)
        const releaseButton = document.createElement('button')
        releaseButton.textContent = 'Release'
        pokeCard.append(releaseButton)
        myTeam.append(pokeCard)
        releaseButton.addEventListener('click', () => {
            myTeam.removeChild(pokeCard)
        })
    })
})}

const btn = document.querySelector('button')
btn.addEventListener('click', generatePokemonCard)