import {autobind} from "core-decorators";
import {computed, observable, action, toJS} from "mobx";
import SignUpRepository from "../repository/SignUpRepository";

@autobind
class SignUpStore {

    @observable
    registerInfo = {};

    @observable
    step = '';

    @observable
    selectedCategories = [];
    @observable
    categories = [];

    @computed
    get getStep() {
        return this.step;
    }

    @computed
    get getCategories() {
        return toJS(this.categories);
    }

    @action
    handleChangeStep(direction) {
        console.log(direction);
        if ('prev' === direction) {
            this.step = !this.step ? 1 : this.step - 1;
        }
        if ('next' === direction) {
            this.step = !this.step ? 2 : this.step + 1;
        }
    }

    @action
    handleChangeRegisterInfo(attr, value) {
        this.registerInfo[attr] = value;
    }

    @action
    findCategories() {
        SignUpRepository.findCategories(this.selectedCategories).then(response => {
            console.log(response.data);
            this.selectedCategories = [];
            this.categories = response.data || [];
        })
    }




}
export default new SignUpStore();
export const signUpStore = new SignUpStore();