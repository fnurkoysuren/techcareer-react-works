import React from 'react'

function EditProduct() {
  return (
      <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Ürün Adı</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ürün Adı" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Ürün Fiyatı</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Ürün Fiyatı" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Ürün Stok</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Ürün Stok" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Ürün Açıklama</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Ürün Açıklama" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
      </form>

  )
}

export default EditProduct