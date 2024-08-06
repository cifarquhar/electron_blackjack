import React from "react";
import Card from "./Card";

const Hand = ({playerName, cards}) => {

    const score = cards.reduce((accumulator, card) => {
        if (card.rank === "A") {
            return accumulator + 1;
        }
        if (["J", "Q", "K"].includes(card.rank)){
            return accumulator + 10;
        }
        return accumulator + parseInt(card.rank);
    }, 0);

    const cardNodes = cards.map((card, index) => {
        return <Card card={card} key={index}/>
    });

    return(
        <section>
            <h2>{playerName}</h2>
            {cardNodes}
            <p>Total: {score}</p>
        </section>
    )

}

export default Hand;