import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component{
    render() {
        return(
            // <h1>this is footer</h1>
            <div id="footerwrap">
                <div className="d-flex flex-row flex-wrap justify-content-center" id="innerfooterwrap">
                    <Link to='/'>
                        <img src='/template/logo.svg' alt='' className="mx-4" id="logo"/>
                    </Link>
                    <div className="f-info mx-4">
                        <ul className="f-list">
                            <li><span className="head">회사소개</span></li>
                            <li>알려드림</li>
                            <li>채용안내</li>
                        </ul>
                    </div>

                    <div className="f-info mx-4">
                        <ul className="f-list">
                            <li><span className="head">고객안내</span></li>
                            <li>이용안내</li>
                            <li>이용약관</li>
                        </ul>
                    </div>

                    <div className="f-info mx-4">
                        <ul className="f-list">
                            <li><a className="head" href={'/'}>고객센터</a></li>
                            <li><a href={'/'}>공지사항</a></li>
                            <li><a href={'/'}>1:1문의</a></li>
                            <li>자주 묻는 질문</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;