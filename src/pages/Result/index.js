import React, { Component } from 'react'
import Api from "../../api/service"
import "./styles.css";

class Result extends Component {
  constructor() {
    super();

    this.state = {
      user: {}
    };
  }

  componentDidMount = async () => {
    console.log("O componente foi montado")
    const { location } = this.props;  //PRECISAAAA COLOCAR ISSO, OU VAI QUEBRAR
    await this.setState({ user: this.props.history.location.state });
    console.log(this.props.history.location.state)
    console.log(this.state.user)
  };

  render() {
    const { user } = this.state;
    console.log(user) //printa {}
    return (
      <main >
        <div className="content">
          <h1>OI </h1>
        </div>
      </main>
    );
  }


}

export default Result;