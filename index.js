function getRandomInt(min, max) {
    min = Math.ceil(1)
    max = Math.floor(899)
    return Math.floor(Math.random() * (max - min) + min)
}


function generatePokemon()  {
    fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt()}`)
        .then(r => r.json())
        .then(console.log)
}

function generateThreePokemon() {
    for (i = 0; i < 4; i++) {
         console.log(generatePokemon())
    }
}

generateThreePokemon()

// build a card that displays Name, Type, Sprite, and a Save button