import React from 'react'
import '../style.css';

const Offer = ({ QntParcelaMax, valorMax,valorMin,jurosMes,QntParcelaMin }) => {
    return (
        <div className="card-offer">
            <div className="ValorMax">
                <strong>Valor Máximo: </strong><span>{valorMax}</span>
            </div>
            <div className="ValorMin">
                <strong>Valor Mínimo: </strong><span>{valorMin}</span>
            </div>
            <div className="jurosMes">
                <strong>Juros ao mês: </strong><span>{jurosMes}</span>
            </div>
            <div className="QntParcelaMax">
                <strong>Quantidade de Parcelas Max.: </strong><span>{QntParcelaMax}</span>
            </div>
            <div className="QntParcelaMin">
                <strong>Quantidade de Parcelas Min.: </strong><span>{QntParcelaMin}</span>
            </div>
        </div>
    );

}
export default Offer;
