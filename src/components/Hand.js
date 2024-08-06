import React from "react";

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

    return(
        <section>
            <h2>{playerName}</h2>
            <p>Cards go here</p>
            <p>Total: {score}</p>
        </section>
    )

}

export default Hand;