import React from 'react'
import '../style.css';
import Card from './Card';
import Offer from './Offer';
import InputCpf from './InputCpf';
import Spinner from '../../hooks/Spinner'
const AboveTheFold = ({ options }) => {
    const { cpf, handleChangeCpf, getOpportunitiesList, opportunities, homeSpinner, viewOpportunities, HandleOfferSelected } = options
    return (
        <div className='AboveTheFold'>
            <div className="search">
                <h1 className='app-name text-3xl pt-2 pl-4'>Gosat Credits</h1>
                <div className="div spinner-container">
                    {homeSpinner && <Spinner />}
                </div>

                {opportunities && viewOpportunities && opportunities.map((op) => {
                    return (
                        <Card HandleOfferSelected={HandleOfferSelected} opportunity={op} />
                    );
                })}

                {!opportunities && !viewOpportunities &&
                    <p className='text-primary text-1xl w-156 pl-4'>Não deixe para depois o pagamento daquele boleto ou a quitação de suas dívidas. Aproveite as inúmeras oportunidades de crédito disponíveis agora mesmo através do nosso incrível aplicativo, Gosat Credits!</p>
                }

                <InputCpf options={{ cpf, handleChangeCpf, getOpportunitiesList, viewOpportunities }} />
            </div>
            <div className="view-offer">
                <Offer />
            </div>
        </div>
    );

}
export default AboveTheFold;
