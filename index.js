const url = "https://pokeapi.co/api/v2/pokemon"
const cardContainer = document.querySelector('.cardContainer')
const grassStarterIDs = [1, 152, 252, 387, 495, 650, 722, 810]
const fireStarterIDs = [4, 155, 255, 390, 498, 653, 725, 813]
const waterStarterIDs = [7, 158, 258, 393, 501, 656, 728, 816]
const regularStarterIDs = [grassStarterIDs, fireStarterIDs, waterStarterIDs]



function capitalize(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1)
    return string
}


function getRandomInt(min, max) {
    min = Math.ceil(1)
    max = Math.floor(899)
    return Math.floor(Math.random() * (max - min) + min)
}

// fetch pokemon
function generatePokemon()  {
    fetch(`${url}/${getRandomInt()}`)
        .then(r => r.json())
        .then(json => generatePokemonCard(json))
}

// putting 3 fetched pokemon on the DOM
function generateThreePokemon() {
    const cardContainer = document.querySelector('.cardContainer')
    cardContainer.innerHTML = ''
    for (i = 0; i < 3; i++) {
        generatePokemon()
    }
}


// pulling data from the API and populating the pokeCards
function generatePokemonCard(json) {
    const pokeCard = document.createElement('div')
    const pokeName = document.createElement('h2')
    const pokeSprite = document.createElement('img')
    const pokeTypes = document.createElement('p')
    const catchButton = document.createElement('button')
    catchButton.textContent = "I Choose You!"
    pokeName.innerText = capitalize(`${json.species.name}`)
    pokeSprite.src = `${json.sprites.other['official-artwork'].front_default}`
    json.types[1] ? pokeTypes.textContent = `${capitalize(json.types[0].type.name)}, ${capitalize(json.types[1].type.name)}` : pokeTypes.textContent = capitalize(`${json.types[0].type.name}`)
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
        cardContainer.innerHTML = ''
    })
}

const btn = document.querySelector('.pokeFetch')

btn.addEventListener('click', generateThreePokemon)

const myTeam = document.querySelector('.myTeam')

const formPoke = document.querySelector("#pokeSearchForm")
// console.log(formPoke, "you clicked me")


formPoke.addEventListener("submit", (event)=>{
    event.preventDefault()
    // console.log(event, "stop poking me!")
    const wantedPoke = event.target.searchBox.value.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${wantedPoke}`)
    .then(r => {
        if (r.ok) {
            r.json().then(wantedPoke=>generateSearchPokemonCard(wantedPoke))
        } else {
            cardContainer.innerText="This species of Pokemon hasn't been discovered yet! Try again!"
        }
        })
    },
    formPoke.reset()
)

  function generateSearchPokemonCard (wantedPoke){
    const cardContainer = document.querySelector('.cardContainer')
    cardContainer.innerHTML = ""
    generatePokemonCard(wantedPoke)
  }  


let starterIDsArray = []

// functions to fetch the starter pokemon
// function getBulbasaur() {
//     fetch(`${url}/1`)
//         .then(r => r.json())
//         .then(json => {starterArray[0]=json})
//     starterArray    
// }

// function getCharmander() {
//     fetch(`${url}/4`)
//         .then(r => r.json())
//         .then(json => {starterArray[1]=json})
// }

// function getSquirtle() {
//     fetch(`${url}/7`)
//         .then(r => r.json())
//         .then(json => {starterArray[2]=json})
// }

function randomIDs(array) {
    return array[Math.floor(Math.random()*array.length)]
}
// pushing starters into an array and making cards
function getStarters() {
    if (Math.floor(Math.random()*20)+1 === 20) {
        fetch(`https://pokeapi.co/api/v2/pokemon/25`).then(r=>r.json()).then(json=>starterIDsArray.push(json))
        fetch(`https://pokeapi.co/api/v2/pokemon/133`).then(r=>r.json()).then(json=>starterIDsArray.push(json))
    } else {

        regularStarterIDs.forEach(starterArray => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${randomIDs(starterArray)}`)
                .then(r=>r.json())
                .then(json=>starterIDsArray.push(json))
        })
    }
}
function starterCards() {
    const cardContainer = document.querySelector('.cardContainer')
    cardContainer.innerHTML = ''
    starterIDsArray.forEach(starterObj=>{generatePokemonCard(starterObj)  
    })
}

document.addEventListener('DOMContentLoaded', getStarters)
const starterBtn = document.querySelector('.starterFetch')
starterBtn.addEventListener('click', () => {
    starterBtn.style.display = "none"
    alert("Choose Wisely! You only get one!")
    starterCards()
    btn.style.display = ""
})

