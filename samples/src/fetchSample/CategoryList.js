import React, { useEffect, useState } from 'react'
import CategoryTable from './CategoryTable';

function CategoryList() {

    const [categories, setCategories] = useState([])

    const [loading, setLoading] = useState(true)

    const [name, setName] = useState('')

    const [description, setDescription] = useState('')

    const addNewCategory = () => {

        let newCategory = {
            name: name,
            description: description
        }

        let requestOption = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCategory)
          }

        fetch("https://northwind.vercel.app/api/categories/", requestOption)
        .then(res => res.json())
        .then((data) => {
            console.log('NEW CATEGORY', data);
        })
    }

    useEffect(() => {

        getData();

    }, [])

    const getData = () => {
        //HTTP GET metotu ile veri çekiyorum... (fetch default olarak "GET" isteği yapar.)
        fetch('https://northwind.vercel.app/api/categories')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setCategories(data)
                    setLoading(false)
                }, 2000);
            })
            .catch(() => {
                setLoading(false)
            })
    }

    const removeCategory = (id) => {

        //fetch ile apiden mevcut veri silinecek.
        fetch('https://northwind.vercel.app/api/categories/' + id, {
            method: 'DELETE',
        })
            .then(data => data.json())
            .then((res) => {
                let newCategories = categories.filter(q => q.id !==id)
                setCategories(newCategories)
                console.log(res);
            })
    }

    return (<>
        {
            loading ? <h1>loading...</h1> : <CategoryTable categories={categories} removeCategory={removeCategory} 
            addNewCategory={addNewCategory} setDescription={setDescription} setName={setName}>
            </CategoryTable>
        }
    </>
    )
}

export default CategoryList
