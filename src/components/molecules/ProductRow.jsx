import React from 'react';
import Button from '../atoms/Button';

const ProductRow = ({ product, onDelete }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.category}</td>
      <td className='d-flex'>
        <Button to={`/edit-product/${product.id}`} label="Edit" className='btn btn-info' />
        <Button 
          label="Delete" 
          className='btn btn-danger' 
          style={{ marginLeft: "10px" }} 
          onClick={() => onDelete(product.id)} 
        />
      </td>
    </tr>
  );
};

export default ProductRow;
