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

        return cards;
    }

    const startGame = () => {
        const cards = generateDeck();
        setDealerHand(cards.splice(0,2));
        setPlayerHand(cards.splice(0,2));
        setDeck(cards)
    }

    const dealCard = (target) => {

        const updatedDeck = [...deck];
        const nextCard = updatedDeck.pop();

        if (target === "dealer") {
            const updatedDealerHand = [...dealerHand, nextCard];
            setDealerHand(updatedDealerHand);
            setDeck(updatedDeck);
            return
        }

        const updatedPlayerHand = [...playerHand, nextCard];
        setPlayerHand(updatedPlayerHand);
        setDeck(updatedDeck);

    }

    useEffect( startGame, []);

    return(
        <main>
            <p>stuff goes here</p>
        </main>
    )

}

export default GameContainer;