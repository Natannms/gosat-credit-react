import React from 'react'
import '../style.css';
import Card from './Card';
import Offer from './Offer';
import InputCpf from './InputCpf';
import Spinner from '../../hooks/Spinner'
import Button from '../../hooks/Button'
const AboveTheFold = ({ options }) => {
    const { cpf, handleChangeCpf, getOpportunitiesList, opportunities, homeSpinner, viewOpportunities, HandleOfferSelected, offers, analyzeInGraphs, viewOffers } = options

    return (
        <div className='AboveTheFold'>
            <h1 className='app-name text-3xl pt-2 pl-4'>Gosat Credits</h1>
            <div className="content-row">
                <div className="search">
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
                    {offers && offers.map((item) => {
                        return (
                            <Offer QntParcelaMax={item.offer.QntParcelaMax} QntParcelaMin={item.offer.QntParcelaMin} jurosMes={item.offer.jurosMes} valorMax={item.offer.valorMax} valorMin={item.offer.valorMin
                            } />
                        );
                    })}


                    {viewOffers && <Button className="pl-4 button" title="Analisar Ofertas" onClick={()=>{analyzeInGraphs()}}/>}

                </div>
            </div>
        </div>
    );

}
export default AboveTheFold;
