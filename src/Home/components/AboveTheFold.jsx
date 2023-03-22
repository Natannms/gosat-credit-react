import React from 'react'
import '../style.css';
import Card from './Card';
import Offer from './Offer';
import InputCpf from './InputCpf';
import Spinner from '../../hooks/Spinner'
import Button from '../../hooks/Button'
import { FaArrowCircleLeft, FaRegChartBar } from "react-icons/fa";

const AboveTheFold = ({ options }) => {
    const { cpf, handleChangeCpf, getOpportunitiesList, opportunities, homeSpinner, viewOpportunities, HandleOfferSelected, offers, analyzeInGraphs, viewOffers, returnToHome, offerSpinner } = options

    return (
        <div className='AboveTheFold'>
            <h1 className='app-name text-3xl pl-4'>Gosat Credits</h1>
            <div className="content-col">
                <div className="search">
                    <div className="div spinner-container">
                        {homeSpinner && <Spinner />}
                        {offerSpinner && <Spinner />}
                    </div>
                    <div className="ajustments-left">
                        {opportunities && viewOpportunities &&
                            <Button
                                className="btn-secondary bg-secondary btn w-48 mb-2"
                                title="Voltar1"
                                icon={<FaArrowCircleLeft />}
                                onClick={() => { returnToHome() }}
                            />}
                        {opportunities && viewOpportunities && opportunities.map((op) => {
                            return (
                                <Card HandleOfferSelected={HandleOfferSelected} opportunity={op} />
                            );
                        })}
                    </div>

                    {!opportunities && !viewOpportunities &&
                        <p className='text-primary text-1xl w-156 pl-4'>Não deixe para depois o pagamento daquele boleto ou a quitação de suas dívidas. Aproveite as inúmeras oportunidades de crédito disponíveis agora mesmo através do nosso incrível aplicativo, Gosat Credits!</p>
                    }

                    {!opportunities && !viewOpportunities && <InputCpf options={{ cpf, handleChangeCpf, getOpportunitiesList, viewOpportunities, }} />}
                </div>
                <div className="view-offer ajustments-left">

                    {offers && offers.map((item) => {
                        return (
                            <Offer QntParcelaMax={item.offer.QntParcelaMax} QntParcelaMin={item.offer.QntParcelaMin} jurosMes={item.offer.jurosMes} valorMax={item.offer.valorMax} valorMin={item.offer.valorMin
                            } />
                        );
                    })}
                      <div className="content-row pt-2">
                        {viewOffers && <Button
                            className="btn-secondary bg-secondary btn w-48 mb-2"
                            title="Voltar2"
                            icon={<FaArrowCircleLeft />}
                            onClick={() => { getOpportunitiesList()}}
                        />
                        }

                        {viewOffers && (
                            <div className="">
                                <Button className="btn bg-third btn-third w-96 ml-2" icon={<FaRegChartBar />} title="Ofertas em gráficos" onClick={() => { analyzeInGraphs() }} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default AboveTheFold;
