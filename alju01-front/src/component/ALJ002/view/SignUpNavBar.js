import {Component} from "react";
import {Button, Container} from "react-bootstrap";

class SignUpNavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const SIGN_UP_MAX_GRID = 3;
        const {step, handleChangeStep} = this.props;
        const prevDisabled = !step || 1 === step;
        const nextDisabled = SIGN_UP_MAX_GRID === step;
        return (
            <Container className='d-flex justify-content-between w-50'>
                <Button className='position-relative'
                        variant={prevDisabled ? 'secondary' : 'primary'}
                        disabled={prevDisabled}
                        onClick={() => handleChangeStep('prev')}
                >{`< 이전`}</Button>
                <Button className='position-relative'
                        variant={nextDisabled ? 'secondary' : 'primary'}
                        disabled={nextDisabled}
                        onClick={() => handleChangeStep('next')}
                >{`다음 >`}</Button>
            </Container>
        );
    }
}

export default SignUpNavBar;
