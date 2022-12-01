
const h2 = document.querySelector('h1');
function changeColor(el, color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            el.style.color = color
            resolve()
        }, 1000)
    })
}

let starWars = {
    genre: "Sci-Fi",
    async loadMovieData() {
        let url ="https://swapi.dev/api/people/1/"
        let movieData = await axios.get(url)
        console.log(movieData.data.name)
    } 
}

let deck = { 
    async init() {
        const res = await axios.get('https://deckofcardsapi.com/api/deck/new/')
        this.deckID = res.data.deck_id
        console.log(this.deckID)
    },
    async shuffle() {
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckID}/shuffle/`)
        console.log(res)
    },
    // Using fetchSyntax
    async draw() {
            await fetch(`https://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`)
            .then(data => data.json())
            .then((data) => console.log(data.cards[0]))
    },
    async draw1() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`)
        console.log(res.data)
        this.suit = res.data.cards[0].suit
        this.value = res.data.cards[0].value
    }
}


class Pokemon {
    constructor(id) {
        this.id = id
        this.types = []
    }
    // axios syntax
    async getInfo() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        this.name = res.data.name
        for (let type of res.data.types) {
            console.log(type)
            this.types.push(type.type.name)
        }
    }
}
let user1 =  new Pokemon(51)
let user2 = new Pokemon(25)



async function getStarWars() {
    try {
        const res = await axios.get(`https://swapi.dev/api/peowerweple/1/`)
            console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}



async function getUSer(user) {
    try {
        let response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

function getUser1(user) {
     axios.get(`https://api.github.com/users/${user}`)
        .then(data => console.log(data))
        .catch(e => console.log(e, "--------->>>>>>>>>User does not exist")) 
} 



async function getPokemon(idx1, idx2, idx3) {
    let baseURl = `https://pokeapi.co/api/v2/pokemon/`
    let pokemon =  await Promise.all([
        axios.get(`${baseURl}${idx1}`),
        axios.get(`${baseURl}${idx2}`),
        axios.get(`${baseURl}${idx3}`)
    ])

            console.log(`The first Pokemon is ${pokemon[0].data.name}`)
            console.log(`The second Pokemon is ${pokemon[1].data.name}`)
            console.log(`The third Pokemon is ${pokemon[2].data.name}`)
}
getPokemon(25,151,26)