import React from 'react'
import '../style.css';
const Card = ({opportunity}) => {
    console.log(opportunity);
    return (
        <div className='Card'>
            <div className='card-header'>
                 <h1 className='card-title'>{opportunity.nome}</h1>
                 <p className='card-subtitle'>Card Subtitle</p>
                 <p className="card-description">Card Description</p>
            </div>
        </div>
    );

}
export default Card;
