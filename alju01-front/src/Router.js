import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Containers
import Sample from './component/Sample';
import Header from "./layout/Header";
import Footer from "./layout/Footer";


// Route Config
const ALJ01 = [
    {id: 'sample', desc: '샘플Component', Component: Sample},
];

const contextPath = '/';
const router = [...ALJ01];
const Router = () => (
    <BrowserRouter basename={contextPath}>
        <Header/>
        <div className='gw'>
            <Routes>
                {router.map(route => (
                    <Route key={route.id} exact path='/sample' element={<route.Component/>}/>
                ))}
            </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
);
export default Router;
