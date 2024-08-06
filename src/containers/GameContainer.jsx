import React, {useState, useEffect} from "react";

const GameContainer = () => {

    const [deck, setDeck] = useState([]);
    const [playerHand, setPlayerHand] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);

    const generateDeck = () => {
        const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        const ranks = ["2", "3", "4", "5", "6", "7",  "8", "9", "10", "J", "Q", "K", "A"];

        const cards = [];

        suits.forEach(suit => {
            ranks.forEach(rank => {
                cards.push({suit, rank});
            });
        });

        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        
        setDeck(cards);
    }

    useEffect(generateDeck, []);

    return(
        <main>
            <p>stuff goes here</p>
        </main>
    )

}

export default GameContainer;