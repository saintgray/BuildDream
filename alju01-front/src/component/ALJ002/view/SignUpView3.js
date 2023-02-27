import {Component} from "react";
import {Button, Container} from "react-bootstrap";
import Banner from "../../../shared/Banner";

class SignUpView3 extends Component{

    constructor(props) { super(props); }

    componentDidMount() {
        const {findCategories} = this.props;
        findCategories();
    }

    render() {
        const {getCategories, findCategories} = this.props;

        return (
            <Container className='w-50'>
                <Banner title='관심사 선택'/>
                <div className="d-flex flex-column justify-content-around" id="interestInfos">
                {
                    getCategories.map(cat => {
                        return (<h3> {cat.catNm} </h3>);
                    })
                }
                </div>
                <Button variant='primary' onClick={findCategories}>선택</Button>
            </Container>
        );
    }
}
export default SignUpView3;