import React from 'react'
import Button from '../../hooks/Button';
import '../style.css';

const Offer = ({ QntParcelaMax, valorMax, valorMin, jurosMes, QntParcelaMin, onClick }) => {
    return (
        <div className="card-offer">
            <div className="card-info">
                <div className="card-item ValorMax">
                    <strong>Valor Máximo: </strong><sup>$</sup> <span>{valorMax}</span>
                </div>
                <div className="card-item jurosMes">
                    <strong>Juros ao mês: </strong><span>{jurosMes}</span> %
                </div>
                <div className="card-item QntParcelaMax">
                    <strong>Parcelas de</strong> <span>{QntParcelaMin}x </span> <strong>até </strong><span>{QntParcelaMax}x</span>
                </div>
            </div>
            <div className="actions">
                <Button title="Contratar" onClick={onClick} className="btn btn-primary bg-primary w-48 justify-center mt-2" />
            </div>
        </div>
    );

}
export default Offer;
