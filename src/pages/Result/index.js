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
    const { location } = this.props; //PRECISAAAA COLOCAR ISSO, OU VAI QUEBRAR
    const user = location.state.res; 
    console.log(user)
    await this.setState({ user });
    console.log(this.state.user)
    console.log(this.props.history.location.state)
  };

  render() {
    const { user } = this.state;
    console.log(user.avatar_url) //printa {}    
    return (
      <main >
        <div className="content">
          <h1>{user.name} </h1>

          <div className="perfil__container">
            <img src={user.avatar_url} alt="foto de perfil"></img>
            <h3>{user.name} </h3>           
            <p>{user.bio}</p>
            <p>{user.location}</p>
            <p>{user.public_repos}</p>
            <p>{user.followers}</p>
            <p>{user.following}</p>      
          </div>
        </div>
      </main>
    );
  }


}

export default Result;