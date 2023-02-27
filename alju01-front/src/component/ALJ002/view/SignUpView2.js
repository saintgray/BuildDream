import {Component} from "react";
import Banner from "../../../shared/Banner";
import {Container} from "react-bootstrap";

class SignUpView2 extends Component {

    constructor(props) { super(props); }

    render() {
        return(
            <Container className='w-50'>
                <Banner title='지역선택'></Banner>
                    <div className="descript mb-2">지역을 선택해주세요</div>
                    <div className="d-flex flex-wrap justify-content-around" id="locarea">

                    </div>
            </Container>
        );
    }

}
export default SignUpView2;