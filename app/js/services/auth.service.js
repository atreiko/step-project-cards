import  axios from 'axios';
import BaseHttpService from "./base-http.service";

export default class AuthService extends BaseHttpService {
    async signIn({ email, password }) {
        const { data } = await axios.post(`${this.BASE_URL}/login`, {
            email,
            password,
        });
        this.saveToken(data);
        return data;
    }

    signOut() {
        return this.removeToken();
    }
}
