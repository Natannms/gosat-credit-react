import React from 'react'
import '../style.css';
import Badge from './Badge';
const Card = ({ opportunity, HandleOfferSelected }) => {
    return (
        <div className='Card'>
            <div className='card-header'>
                <h1 className='card-title'>{opportunity.nome}</h1>
                <div className="badge-container">
                    {opportunity.modalidades.map((md) => {
                        return (
                            <Badge key={md.code} modalidade={md} onClick={()=>HandleOfferSelected(md)}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );

}
export default Card;
