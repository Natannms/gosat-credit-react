import React from 'react'
import AboveTheFold from './components/AboveTheFold';
import Header from '../hooks/Header';

const Home = ({options}) => {
    const {setViewLogin, cancelAllViews, dashboardView} =  options
    return (
        <div className='container-full'>
            <Header headerOptions={{setViewLogin, cancelAllViews, dashboardView}}/>
            <AboveTheFold options={options}/>
        </div>
    );
}
export default Home;
