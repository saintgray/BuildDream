import {Component} from "react";
import {Key,Person} from 'react-bootstrap-icons'
import {Button} from "react-bootstrap";


class LoginView extends Component {


    render() {
        const { handleChangeValue, login } = this.props;
        return(
            <div className="container" id="loginWrap">
                <div className="banner text-center">
                    로그인
                </div>
                <div className="container d-flex flex-wrap flex-column justify-content-center p-2" id="insertarea">
                    <div className="input-group">
                            <span className="input-group-text">
                            <Person size={20}/>
                            </span>
                        <input type="text" className="form-control" placeholder="이메일" onInput={(e) => handleChangeValue('usrEmail', e)} />
                    </div>
                    <div id="w_email" className="warning my-2">
                    </div>

                    <div className="input-group">
                            <span className="input-group-text">
                            <Key size={20}/>
                            </span>
                        <input type="password" className="form-control" placeholder="비밀번호" onInput={(e) => handleChangeValue('usrPw', e)} />
                    </div>
                    <div id="w_pw" className="warning my-2">
                    </div>

                    <div className="d-flex flex-row flex-wrap justify-content-between">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="autoLogin" name="remember-me" />
                            <label className="form-check-label" htmlFor="autoLogin">자동 로그인</label>
                        </div>
                        <div>
                            <span id="forgetMe">비밀번호 찾기</span>
                        </div>
                    </div>
                </div>
                <div className="my-2" id="btnarea">
                    <Button variant="warning" onClick={login}>로그인</Button>
                </div>
            </div>
        );
    }
}
export default LoginView

