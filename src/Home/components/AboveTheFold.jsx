import React from 'react'

import Card from '../../hooks/Card';
import Offer from './Offer';
import InputCpf from './InputCpf';
import Spinner from '../../hooks/Spinner'
import Button from '../../hooks/Button'
import { FaArrowCircleLeft, FaArrowCircleRight, FaRegChartBar } from "react-icons/fa";
import { Graphs } from '../../Graphs';

const AboveTheFold = ({ options }) => {
    const { cpf, handleChangeCpf, getOpportunitiesList, opportunities, homeSpinner, viewOpportunities, HandleOfferSelected, offers, analyzeInGraphs, viewOffers, returnToHome, offerSpinner, viewGraphs, graphsOptions, selectOfferForContract, selectedItems, getOffers } = options

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
                            <div className="content-row">
                                <Button
                                    className="btn-secondary bg-secondary btn w-48 mb-2 mr-4"
                                    title="Voltar"
                                    icon={<FaArrowCircleLeft />}
                                    onClick={() => { returnToHome() }}
                                />
                                <Button
                                    className="btn-primary bg-primary btn w-48 mb-2"
                                    title="Continuar"
                                    icon={<FaArrowCircleRight />}
                                    onClick={() => { getOffers() }}
                                />
                            </div>
                        }
                        <div className="content-row  items-center">
                            <p className="text-1xl text-primary">Selecione um banco e continue:</p>
                        </div>
                        {opportunities && viewOpportunities && opportunities.map((op, index) => {
                            return (
                                <Card key={index} options={{ selectedItems, index }} onClick={() => HandleOfferSelected(op, index)} op={op} />
                            );
                        })}
                    </div>

                    {!opportunities && !viewOpportunities &&
                        <p className='text-primary text-1xl w-156 pl-4'>Não deixe para depois o pagamento daquele boleto ou a quitação de suas dívidas. Aproveite as inúmeras oportunidades de crédito disponíveis agora mesmo através do nosso incrível aplicativo, Gosat Credits!</p>
                    }

                    {!opportunities && !viewOpportunities && <InputCpf options={{ cpf, handleChangeCpf, getOpportunitiesList, viewOpportunities, }} />}
                </div>
                <div className="view-offer ajustments-left">

                    {offers && viewOffers && offers.map((item) => {
                        return (
                            <Offer onClick={() => { selectOfferForContract(item) }} QntParcelaMax={item.offer.QntParcelaMax} QntParcelaMin={item.offer.QntParcelaMin} jurosMes={item.offer.jurosMes} valorMax={item.offer.valorMax} valorMin={item.offer.valorMin
                            } />
                        );
                    })}
                    <div className="content-row pt-2">
                        {viewOffers && <Button
                            className="btn-secondary bg-secondary btn w-60 mb-2"
                            title="Oportunidades"
                            icon={<FaArrowCircleLeft />}
                            onClick={() => { getOpportunitiesList() }}
                        />
                        }

                        {viewOffers && (
                            <div className="">
                                <Button className="btn bg-third btn-third w-72 ml-2" icon={<FaRegChartBar />} title="Ofertas em gráficos" onClick={() => { analyzeInGraphs() }} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="view-graphs">
                    {viewGraphs && <Graphs graphsOptions={graphsOptions} offers={offers} />}
                </div>
            </div>
        </div>
    );

}
export default AboveTheFold;
