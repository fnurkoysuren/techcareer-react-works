import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'

function ProductDataGrid() {

  const [products, setProducts] = useState([])

  const columns = [
    {
      field: 'id',
      headerName: 'Product Id',
      width: 100
    },
    {
      field: 'name',
      headerName: 'Product Name',
      width: 300
    },
    {
      field: 'unitPrice',
      headerName: 'Unit Price',
      width: 300
    },
    {
      field: 'unitsInStock',
      headerName: 'Stock',
      width: 300
    },

  ]

  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/products')
      .then(res => setProducts(res.data))

  }, [])


  return (<>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={products}
        pageSize={5}
        checkboxSelection
      >
      </DataGrid>
    </div>
  </>
  )
}

export default ProductDataGrid