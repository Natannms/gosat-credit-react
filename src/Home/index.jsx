import React from 'react'
import AboveTheFold from './components/AboveTheFold';
import Header from './components/Header';
import './style.css';

const Home = () => {

    return (
        <div className='container-full'>
            <Header />
            <AboveTheFold />
        </div>
    );

}
export default Home;
