import React from 'react'

function UsersTable({users}) {
    return (<>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                {
                    users && users.map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default UsersTable