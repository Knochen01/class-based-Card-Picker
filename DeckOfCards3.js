let picture = document.querySelector('img');
let button = document.querySelector("button");
let cardDiv = document.getElementById('cardArea');
let $cardArea = $('#card-area') 
let baseURL = 'https://deckofcardsapi.com/api/deck';


class CardGame {

    constructor() {

    }

    // Get New Deck
    async newDeck() {
       const res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
       console.log(res.data)
       this.deck_id = res.data.deck_id
       this.suit = res.data.suit
    }
    // Draw a Card
    async drawCard() {
        try {
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=1`)
            console.log(res.data)
            this.suit = res.data.cards[0].suit
            this.value = res.data.cards[0].value
            picture.setAttribute('src',res.data.cards[0].image ) 
        } catch (error) {
            console.log("You dont have a deck_id yet, use the newDeck Function FIRST", error)
        }
    }
    // Request a card from a newly shuffled deck
    async shuffleDeck() {
        try {
            const response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deck_id}/shuffle/?remaining=true `)
            console.log(response.data)
        } catch (error) {
            console.log()
        }
    }
    async setup() {
        const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
        console.log(response)
        button.addEventListener("click", async function() {
            let cardData = await axios.get(`https://deckofcardsapi.com/api/deck/${response.data.deck_id}/draw/ `)
            console.log(cardData.data.cards[0].image)
            let value = cardData.data.cards[0].image
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            $cardArea.append(
                $('<img>', {
                  src: value,
                  css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                    }
                })
            )
        if (cardData.data.remaining === 0) {
            button.remove();
            alert("No more Cards left")
        }
        })
    }
}


p = new CardGame()
p.newDeck()
p.setup()