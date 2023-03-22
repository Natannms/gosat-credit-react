import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import './index.css';
import Offer from '../Home/components/Offer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};



export function Graphs({ graphsOptions, offers }) {
  const { analyzeInGraphs } = graphsOptions;
  const labels = ['Valor Máximo', 'Valor Mínimo', 'Juros ao mês', 'Qtd.Parcelas Max', 'Qtd.Parcelas Min'];
  let dataSets = [];

  // retorna um rgb aleatorio
  function random_rgba() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(1);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }


  let datasets = () => {
    offers.forEach(element => {
      dataSets.push({
        label: element.instituicao,
        data: [
          element.offer.valorMax,
          element.offer.valorMin,
          element.offer.jurosMes,
          element.offer.QntParcelaMax,
          element.offer.QntParcelaMin,
        ],
        backgroundColor: random_rgba(),
      })
    });
  }
  datasets();
  console.log("DATASETS", dataSets);
  const data = {
    labels,
    datasets: dataSets
  };
  console.log("GRAFICOS INICIANDO", offers)
  return (
    <div className="container">
      <div className="graphs-content">
        <Bar options={options} data={data} />;
      </div>
      <div className="card-content">
        {offers && offers.map((item) => {
          return (
            <Offer QntParcelaMax={item.offer.QntParcelaMax} QntParcelaMin={item.offer.QntParcelaMin} jurosMes={item.offer.jurosMes} valorMax={item.offer.valorMax} valorMin={item.offer.valorMin
            } />
          );
        })}
      </div>
    </div>


  );

}
