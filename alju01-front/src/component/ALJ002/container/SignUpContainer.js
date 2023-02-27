import {Component} from "react";
import {inject, observer} from "mobx-react";
import SignUpNavBar from "../view/SignUpNavBar";
import SignUpView1 from "../view/SignUpView1";
import SignUpView2 from "../view/SignUpView2";
import {Container} from "react-bootstrap";
import SignUpView3 from "../view/SignUpView3";


@inject('signUpStore')
@observer
class SignUpContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {getStep, handleChangeStep, findCategories, getCategories} = this.props.signUpStore;
        return (
            <Container>
                <SignUpNavBar step={getStep} handleChangeStep={handleChangeStep}/>
                {(!getStep || 1 === getStep) && <SignUpView1/>}
                {(2 === getStep) && <SignUpView2/>}
                {(3 === getStep) && <SignUpView3 findCategories ={findCategories} getCategories = {getCategories}/>}
            </Container>
        );
    }
}

export default SignUpContainer;
