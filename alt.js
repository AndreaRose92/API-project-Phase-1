const grassStarterIDs = [1, 152, 252, 387, 495, 650, 722, 810]
const fireStarterIDs = [4, 155, 255, 390, 498, 653, 725, 813]
const waterStarterIDs = [7, 158, 258, 393, 501, 656, 728, 816]
const regularStarterIDs = [grassStarterIDs, fireStarterIDs, waterStarterIDs]

function randomIDs(array) {
    return array[Math.floor(Math.random()*array.length)]
}

function fetchRandomPokemon() {
    if (Math.floor(Math.random()*20)+1 === 20) {
        fetch(`https://pokeapi.co/api/v2/pokemon/25`).then(r=>r.json()).then(json=>console.log(json.name))
        fetch(`https://pokeapi.co/api/v2/pokemon/133`).then(r=>r.json()).then(json=>console.log(json.name))
    } else {

        regularStarterIDs.forEach(starterArray => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${randomIDs(starterArray)}`)
                .then(r=>r.json())
                .then(json=>console.log(json.name))
        })
    }
}
