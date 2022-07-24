import React, { useState } from 'react'
import { categories } from './data/categories'

function CategoryTable() {
    const [categoryList, setCategoryList] = useState(categories)
    const [searchByName, setSearchByName] = useState('')

    const removeItem = (id) => {
        let newList = categoryList.filter(x => x.id !== id)
        setCategoryList(newList)
    }

    const removeAll = () => {
        setCategoryList([])
    }

    const searchCategories = (data) => {
        let newData = data.toLowerCase().trim()
        let newCategories = categories.filter(q => q.name.toLowerCase().includes(newData))
        setCategoryList(newCategories)
    }
    return(<>
    <div>
        <input type='text' onChange={(e) => searchCategories(e.target.value)}></input>
    </div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>description</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                    {
                        categoryList && categoryList.map((item) => {
                            return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.description}</td>
                            <td>{item.name}</td>
                            <td><button onClick={() => removeItem(item.id)}>remove</button></td>
                            </tr>
                        })
                    }
            </tbody>
        </table>
        <button onClick={() => removeAll()}>remove all</button>
    </>
    )
}
export default CategoryTable