import React, { useState } from 'react'

const User = ({user}) => {
    // eslint-disable-next-line no-unused-vars
    const {avatar_url, followers, following, public_repos, name, login, created_at, bio} = user
    const createdDate = new Date(created_at)
  return (
    <div className='m-auto max-w-[1000px] border-2 p-5 mt-10 flex flex-col gap-4 justify-between items-center'>
        <div className=''>
            <img className='h-50 w-50 rounded-full' src={avatar_url} alt="avatar" />
        </div>
        <div className=''>
            <a href={`https://github.com/${login}`} target="_blank">{name || login}</a>
        </div>
        <div>
            <p>Joined on:{`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}</p>
        </div>
        <div>
            <p>Followers: {followers}</p>
        </div>
        <div>
            <p>Following: {following}</p>
        </div>
        <div>
            <p>Repos : {public_repos}</p>
        </div>
        {/* <div>
            <p>{bio}</p>
        </div> */}
       
    </div>
  )
}

export default User