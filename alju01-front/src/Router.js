import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Containers
import Sample from './component/Sample';
import LoginContainer from "./component/ALJ001/container/LoginContainer";
import NoticeContainer from "./component/ALJ003/container/NoticeContainer";
import SignUpContainer from "./component/ALJ002/container/SignUpContainer";
import Header from "./layout/Header";
import Footer from "./layout/Footer";



// Route Config
const ALJ01 = [
    {id: 'sample', desc: '샘플Component', Component: Sample},
    {id: 'login', desc: '로그인', Component: LoginContainer},
    {id: 'notice', desc: '공지사항', Component: NoticeContainer},
    {id: 'signup', desc: '회원가입', Component: SignUpContainer},
];

const contextPath = '/';
const router = [...ALJ01];
const Router = () => (
    <BrowserRouter basename={contextPath}>
        <Header/>
        <div className='gw'>
            <Routes>
                {router.map(route => (
                    <Route key={route.id} exact path={`/${route.id}`} element={<route.Component />}/>
                ))}
            </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
);
export default Router;
