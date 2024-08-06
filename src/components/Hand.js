import React from "react";
import Card from "./Card";

const Hand = ({playerName, cards, score}) => {

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