import React from 'react'

const Offer = () => {

    return (
        <div className="Card-offer">
            <div className="ValorMax">
                <strong>Valor Máximo: </strong><span>19250</span>
            </div>
            <div className="ValorMin">
                <strong>Valor Mínimo: </strong><span>10000</span>
            </div>
            <div className="jurosMes">
                <strong>Juros ao mês: </strong><span>0.0118</span>
            </div>
            <div className="QntParcelaMax">
                <strong>Quantidade de Parcelas Max.: </strong><span>72</span>
            </div>
            <div className="QntParcelaMin">
                <strong>Quantidade de Parcelas Min.: </strong><span>24</span>
            </div>
        </div>
    );

}
export default Offer;
