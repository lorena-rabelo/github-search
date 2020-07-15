import React, { Component } from 'react'
import Api from "../../api/service"
import Profile from '../../components/Profile'
import Repositories from '../../components/Repos'

import "./styles.css";

class Result extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      repos: []
    };
  }

  componentDidMount = async () => {
    console.log("O componente foi montado")
    const { location } = this.props; //PRECISAAAA COLOCAR ISSO, OU VAI QUEBRAR
    const user = location.state.res;
    const repos = await Api.getRepos(user.login);
    console.log(user)
    console.log(repos)
    this.setState({ user, repos });
    console.log(this.state.user)
    console.log(this.state.repos)
    console.log(this.props.history.location.state)
  };

  render() {
    const { user, repos } = this.state;
    console.log(user.avatar_url)
    return (
      <main >
        <div className="content">
          <Profile
            url={user.avatar_url}
            name={user.name}
            bio={user.bio}
            location={user.location}
            public_repos={user.public_repos}
            followers={user.followers}
            following={user.following}
          />
         <Repositories 
         repos={repos}/>


        </div>
      </main>
    );
  }


}

export default Result;