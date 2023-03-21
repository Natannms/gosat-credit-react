import React from 'react'
import AboveTheFold from './components/AboveTheFold';
import Header from './components/Header';
import './style.css';

const Home = ({options}) => {

    return (
        <div className='container-full'>
            <Header />
            <AboveTheFold options={options}/>
        </div>
    );

}
export default Home;
