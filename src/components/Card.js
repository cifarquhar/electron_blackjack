import React from "react";

const Card = ({card}) => {

    return(
        <article>
            <h3>{card.rank} of {card.suit}</h3>
        </article>
    )

}

export default Card;