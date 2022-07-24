import React from 'react'

function SupplierItem({supplier, deleteItem}) {

    const removeSupplier = (id) => {
        deleteItem(id);
    }

    return (
        <div>
            <p>Company Name: {supplier.companyName}</p>
            <p>Contact Name: {supplier.contactName}</p>
            <p>Contact Title: {supplier.contactTitle}</p>
            <button onClick={() => removeSupplier(supplier.id)}>Remove</button>
        </div>
    )
}

export default SupplierItem