import axios from "axios";

const apiUrlD = 'aljd01-code';
class SignUpRepository {
    findCategories(list) {
        return axios.post(`${apiUrlD}/categoryMgt`, list).then(response => response || '');
    }
}
export default new SignUpRepository();