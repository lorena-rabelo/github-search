import React from 'react'

const Repositories = ({ repos }) => {
  return (
    <div>
     { repos.map((repo, index) => {
       return (
           <div>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
         </div>)
        // console.log(repo.name)
      })}
    </div>
  )
}

export default Repositories