import React from 'react'
import StarIcon from '../../assets/icons/star-icon.svg'

import './styles.css'

const Repositories = ({ repos }) => {
  return (
    <div>
      {repos.map((repo, index) => {
        return (
          <div className="repo--card">
            <a href={repo.html_url} target="blank">
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              <div className="star-count">
                <img src={StarIcon} alt="star"></img>
                <p>{repo.stargazers_count}</p>
              </div>
            </a>
          </div>)
        // console.log(repo.name)
      })}
    </div>
  )
}

export default Repositories