import {Component} from "react";
import {Container} from "react-bootstrap";
import Banner from "../../../shared/Banner";

class SignUpView1 extends Component {

    constructor(props) { super(props); }

    render() {
        return(
            <Container className='w-50'>
                <Banner title='기본정보'/>
                <div id="basicInfos">
                    <div className="d-flex flex-column justify-content-center" id="infoswrap">
                        <div>
                            <div className="input-group mt-4" id="emailarea">
                                <input type="text" name="m_email_prefix" className="form-control" placeholder="이메일"
                                       aria-label="Username"/>
                                    <span className="input-group-text">@</span>
                                    <input type="text" name="m_email_suffix" className="form-control"
                                           placeholder="examples.com" aria-label="Server"/>
                            </div>
                            <div className="input-group mt-2" id="autharea">
                            </div>
                        </div>

                        <div>
                            <div className="input-group mt-2">
                                <input type="password" name="m_password" className="form-control" placeholder="비밀번호"
                                       aria-label="Password" id="pw"/>
                            </div>
                        </div>

                        <div>
                            <div className="input-group mt-2">
                                <input type="password" className="form-control" placeholder="비밀번호 확인"
                                       aria-label="Password" id="repw"/>
                            </div>
                        </div>

                        <div>
                            <div className="input-group mt-2">
                                <input type="text" name="m_nm" className="form-control" placeholder="닉네임"
                                       aria-label="Name" id="m_nm"/>
                            </div>
                        </div>
                        <div className="mb-2 warningmsg" id="w_nick">Validation Msg</div>


                        <div id="userinterestselect" className="hidden">

                        </div>

                        <div>
                            <div className="descript my-4">프로필 사진</div>
                            <div className="d-flex flex-row justify-content-around" id="profilearea">
                                <img
                                    src="https://aljdreambucket.s3.ap-northeast-2.amazonaws.com/member/defaultprofile.png"
                                    id="preview"/>
                                    <div id="insertedProfile">
                                        <label htmlFor="myprofile" className="btn btn-general">
                                            사진등록
                                        </label>
                                        <input type="file" id="myprofile" className="hidden"/>
                                            <button type="button" className="btn btn-grey" id="usedefault">기본 이미지 사용
                                            </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

}
export default SignUpView1;