import React, { useState } from 'react';

function Card() {
    const [card, setCard] = useState('')

    const handleCardDisplay = () => {
        const rawText = [...card.split(' ').join('')] // Remove old space
        const creditCard = [] // Create card as array
        rawText.forEach((t, i) => {
            if (i % 4 === 0) creditCard.push(' ') // Add space
            creditCard.push(t)
        })
        return creditCard.join('') // Transform card array to string
    }

    return (
        <div>
            <input 
                value={handleCardDisplay()} 
                onChange={(e) => setCard(e.target.value)}
            />
        </div>
    )
}

export default Card;