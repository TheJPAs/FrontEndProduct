import React from 'react';
import FormInput from '../atoms/FormInput';
import { Link } from 'react-router-dom';

const ProductForm = ({ name, setName, description, setDescription, price, setPrice, stock, setStock, category, setCategory, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <FormInput 
        label="Name" 
        type="text" 
        placeholder="Write the product Name" 
        name="name" 
        value={name} 
        onChange={e => setName(e.target.value)} 
        />
      <FormInput 
        label="Description" 
        type="text" 
        placeholder="Write the product Description" 
        name="description" 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
        />
      <FormInput 
        label="Price"
        type="number" 
        placeholder="Write the product Price" 
        name="price" value={price}
        onChange={e => setPrice(e.target.value)} 
        />
      <FormInput 
        label="Stock" 
        type="number" 
        placeholder="Write the product Stock" 
        name="stock" 
        value={stock} 
        onChange={e => setStock(e.target.value)} 
        />
      <FormInput 
        label="Category" 
        type="text" 
        placeholder="Write the product Category" 
        name="category" 
        value={category} 
        onChange={e => setCategory(e.target.value)} 
        />
      
      <button className='btn btn-success'>Save</button>
      &nbsp;
      <Link to='/products' className='btn btn-danger '>Cancel</Link>
    </form>
  );
};

export default ProductForm;
