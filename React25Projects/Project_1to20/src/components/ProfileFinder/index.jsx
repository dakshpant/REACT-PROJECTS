import React, { useEffect, useState } from 'react'
import User from './user.jsx'
const ProfileFinder = () => {
    const [userName, setUserName] = useState("dakshpant")
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)
    async function fetchUserData() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        if (data) {
            setUserData(data);
            setLoading(false)
            // setUserName('')
        }
        console.log(data);


    }
    function handleSubmit() {
        fetchUserData()
    }
    useEffect(() => {
        fetchUserData()
    }, [])

    if (loading) {
        return <h1>Loading.... Data! Please Wait</h1>
    }

    return (
        <div className=''>
            <div className='flex flex-row justify-center items-center'>
                <input
                    className='w-3xs border border-green-400 text-center me-4 rounded-sm p-3 text-[16px]'
                    type="text"
                    name='search by username'
                    placeholder='Search The User'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} />

                <button
                    className='py-0.5 px-2 rounded-md border cursor-pointer'
                    onClick={handleSubmit}>search</button>
            </div>
            <div>
                {
                   userData !== null ? <User user={userData}/> : <h1>No Data Found</h1>
                }
            </div>
        </div>
    )
}

export default ProfileFinder