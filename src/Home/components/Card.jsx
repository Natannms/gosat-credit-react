import React, { useState } from 'react'
const Card = ({ op, onClick, className, options }) => {
    const { selectedItems, index } = options
    return (
        <div onClick={onClick} className={selectedItems.includes(index) ? "Card-Selected" : "Card" }>

            <div className='card-header'>
                <h1 className='card-title'>{op.nome}</h1>
                <p>{op.selected ? 'Card' : 'Card selected'}</p>
            </div>
        </div>
    );

}
export default Card;
