import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://api.github.com"
    });
  }

  getUser = async user => {
    const { data } = await this.api.get(`/users/${user}`);

    return data;
  };

  getRepos = async user => {
    const { data } = await this.api.get(`/users/${user}/repos`);

    return data;
  };
}

export default new Api();
