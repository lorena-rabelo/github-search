import React from 'react'

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
    <div className="perfil__container">
      <img src={url} alt={`${name} user`}></img>
      <h2>{name} </h2>
      <p>{bio}</p>
      <p>{location}</p>
      <p>{public_repos}</p>
      <p>{followers}</p>
      <p>{following}</p>
    </div>
  )

}

export default Profile