import {action, observable, runInAction} from "mobx";
import {autobind} from "core-decorators";
import AuthRepository from "../repository/AuthRepository";

@autobind
class AuthStore {

    @observable
    contentLocation = '';

    @observable
    userinfo = {
        usrEmail:'',
        usrPw:'',
    };

    @observable
    token = '';


    @action
    handleChangeValue(attr, e) {
        this.userinfo[attr] = e.target.value;
    }

    @action
    login() {
        AuthRepository.login(this.userinfo)
            .then(response => {
                if (response) {
                    runInAction(() => {
                        // 화면 이동
                        console.log(response);
                        // this.token = response.token;
                    }) 
                } else {
                    console.log('서버 응답 없음');
                }
            });
    }
}
export default new AuthStore();
export const authStore = new AuthStore();