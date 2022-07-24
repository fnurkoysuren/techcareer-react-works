import React from 'react'

export default function CategoryTable({ categories, removeCategory, setName, setDescription, addNewCategory }) {
    return (<>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    categories && categories.map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><button onClick={() => removeCategory(item.id)}>Remove</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <div>
            <label>Name: </label>
            <input type='text' onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
            <label>Description: </label>
            <input type='text' onChange={(e) => setDescription(e.target.value)}></input>
        </div>
        <div>
            <button onClick={() => addNewCategory()}>Add</button>
        </div>
    </>
    )
}
