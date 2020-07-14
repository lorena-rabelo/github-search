import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Api from "../../api/service";
import SearchBar from "../../components/SearchBar";
import './styles.css';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      user: "",
      error: ""
    }
  }

  onChange = e => {
    const value = e.target.value;
    this.setState({ user: value });
    console.log('chamou onChange', value)
  };

  onClick = async () => {
    const { user, error } = this.state;
    console.log('chamou onClick', user)
    console.log('chamou onClick', error)
    user
    ? await Api.getUser(user)
        .then(res =>
          this.props.history.push({
            pathname: "/result",
            state: {
              res
            }
          })
        )
        .catch(error =>
          this.setState({ error: "Nenhum usuário encontrado!", user: "" })
        )
    : this.setState({ error: "Por favor, insira usuário!" });
}

  render() {
    const { user, error } = this.state;
    return (
      <main className="main-container">
        <h1>Github Search</h1>
        <SearchBar
          onClick={this.onClick}
          onChange={this.onChange}
          value={user}
        />
        {error && <h3>{error}</h3>}
      </main>
    )
  }
}

export default Home;