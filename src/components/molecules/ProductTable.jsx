import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products, onDelete }) => {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Product Price</th>
          <th>Product Stock</th>
          <th>Product Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductRow key={product.id} product={product} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
