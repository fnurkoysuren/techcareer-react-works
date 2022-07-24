import React, { useEffect, useState } from 'react'
import UsersTable from './UsersTable'

function UserList() {

    const [users, setUsers] = useState([])

    const [loading, setloading] = useState(true)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setUsers(data)
                    setloading(false)
                }, 2000)
            })
            .catch(() => {
                setloading(false)
            })
    }, [])

    return (<>
        {loading ? <h1>loading...</h1> : <UsersTable users={users}></UsersTable>
        }
    </>
    )
}

export default UserList