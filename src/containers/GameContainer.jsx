import React, {useState, useEffect} from "react";

const GameContainer = () => {

    const [deck, setDeck] = useState([]);

    const generateDeck = () => {
        const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        const ranks = ["2", "3", "4", "5", "6", "7",  "8", "9", "10", "J", "Q", "K", "A"];

        const cards = [];

        suits.forEach(suit => {
            ranks.forEach(rank => {
                cards.push({suit, rank});
            });
        });
        
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