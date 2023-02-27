import { Component } from "react";
import LoginView from "../view/LoginView";
import {authStore} from "../store/AuthStore";
import {inject, observer} from "mobx-react";
import {autobind} from "core-decorators";

@inject('authStore')
@observer
class LoginContainer extends Component {
    constructor(props) { super(props); }

    render() {
        const {login, handleChangeValue, getUserInfo, test} = this.props.authStore;
        return (
            <LoginView handleChangeValue = { handleChangeValue }
            getUserInfo = {getUserInfo}
            login = {login}
            test = {test}/>
        );
    }
}
export default LoginContainer;