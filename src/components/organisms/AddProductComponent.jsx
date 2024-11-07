import React,{useEffect, useState} from 'react'
import productServiceInstance from '../../Services/ProductService';
import {useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../molecules/ProductForm';

const AddProductComponent = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
    const {id} =useParams();

    const saveOrUpdateProduct = (e) => {
        e.preventDefault();
        const product = {name, description, price, stock, category};
        if(id){
            productServiceInstance.updateProduct(id,product).then(response =>{
                console.log(response.data);
                navigate('/products');
            }).catch(error =>{
                console.log(error);
            })
        }else{
            productServiceInstance.createProduct(product).then(response =>{
                console.log(response.data);
                navigate('/products');  
            }).catch(error =>{
                console.log(error);
            })
        }
    }
    useEffect(()=>{
        productServiceInstance.getProductById(id).then((response)=>{
            setName(response.data.name);
            setDescription(response.data.description);
            setPrice(response.data.price);
            setStock(response.data.stock);
            setCategory(response.data.category);
        }).catch(error =>{  
            console.log(error);
        })
    },[id])

    return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>{id ? 'Update Product' : 'Create Product'}</h2>
          <div className='card-body'>
            <ProductForm 
              name={name} setName={setName}
              description={description} setDescription={setDescription}
              price={price} setPrice={setPrice}
              stock={stock} setStock={setStock}
              category={category} setCategory={setCategory}
              onSubmit={saveOrUpdateProduct}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductComponent
