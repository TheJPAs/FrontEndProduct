import React,{useEffect, useState} from 'react'
import ProductService from '../../Services/ProductService';
import Button from '../atoms/Button';
import ProductTable from '../molecules/ProductTable';

const ProductListComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        productsList();
    },[])
    
    const productsList = () => {
        ProductService.getAllProducts().then(response =>{
            setProducts(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteProduct = (id) => {
        ProductService.deleteProduct(id).then(response =>{
            productsList();
        }).catch(error =>{
            console.log(error);
        })
    }

    

return (
    <div className='container'>
      <h2 className='text-center'>Product List</h2>
      <div className='d-flex justify-content-end mb-2'>
        <Button to='/add-product' label="Add Product" className='btn btn-primary' />
      </div>
      <ProductTable products={products} onDelete={deleteProduct} />
    </div>
)
}

export default ProductListComponent;
