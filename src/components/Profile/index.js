import React from 'react'
import './styles.css'

const Profile = ({
  url,
  name,
  bio,
  location,
  public_repos,
  followers,
  following
}) => {
  return (
    <div className="profile__container">
      <img src={url} alt={`${name} user`} className="profile__img"></img>
      <h2>{name} </h2>
      <p>{bio}</p>
      <p>{location}</p>
      <p>{public_repos} Repositórios</p>
      <p>{followers} Seguidores</p>
      <p>{following} Seguindo</p>
    </div>
  )

}

export default Profile