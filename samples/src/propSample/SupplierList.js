import React, { useState } from 'react'
import { suppliers } from '../data/suppliers'
import SupplierItem from './SupplierItem'

function SupplierList() {

    const [supplierList, setSupplierList] = useState(suppliers)

    const deleteItem = (id) => {

        let newSuppliers = supplierList.filter(q => q.id !== id);
        setSupplierList(newSuppliers)
    }
    return (<>
        {
            supplierList && supplierList.map((item, key) => {
                return <SupplierItem key={item.id} supplier={item} deleteItem={() => deleteItem(item.id)}></SupplierItem>
            })
        }</>
    )
}

export default SupplierList