import axios from "axios";


const apiUrlM = 'alju01-member';
const localApiUrl = 'localhost:8080';
class AuthRepository {
    login(userinfo) {
        console.log(userinfo);
        return axios.post(`${apiUrlM}/login`, userinfo).then(response => response || '');
    }

    test() {
        return axios.get(`/${apiUrlM}/member/usersGroup/location`).then(
            response => response || ''
        );
    }
}
export default new AuthRepository();
