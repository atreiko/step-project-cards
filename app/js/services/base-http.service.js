import axios from "axios";

export default class BaseHttpService {
  BASE_URL = "https://ajax.test-danit.com/api";

  _accessToken = null;

  async get(endpoint = "", options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .get(`${this.BASE_URL}/${endpoint}`, options)
      .then((res) => res.data)
      .catch((error) => this._handleHttpError(error));
  }

  async post(endpoint = "", data = {}, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .post(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error) => this._handleHttpError(error));
  }

  async put(endpoint = "", data = {}, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .put(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error) => this._handleHttpError(error));
  }

  async delete(endpoint = "", options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .delete(`${this.BASE_URL}/${endpoint}`, options)
      .catch((error) => this._handleHttpError(error));
  }

  _handleHttpError(error) {
    const { statusCode } = error.response.data;
    if (statusCode !== 401) {
      throw error;
    } else {
      return this._handle401();
    }
  }

  _handle401 = () => {
    this._accessToken = null;
    this.removeToken();
    window.location.replace("/");
  };

  _getCommonOptions = () => {
    const { accessToken } = this.loadToken();

    return {
      headers: {
        Authorization: `Bearer 5477a706-ec9a-47b1-8a9e-3f6d29cdb837`, //e205eb72-9dc5-43a3-b3b0-c9f22972b5c4
      },
    };
  };

  get accessToken() {
    return this._accessToken ? this._accessToken : this.loadToken();
  }

  saveToken = (data) => {
    const { accessToken } = data;
    this._accessToken = accessToken;

    localStorage.setItem("accessToken", accessToken);

    return {
      accessToken,
    };
  };

  loadToken() {
    const accessToken = localStorage.getItem("accessToken");
    this._accessToken = accessToken;

    return {
      accessToken,
    };
  }

  removeToken = () => {
    localStorage.removeItem("accessToken");
  };
}
