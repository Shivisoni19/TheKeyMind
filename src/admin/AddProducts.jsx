import React, { useState } from 'react';
import './AddProducts.css';

const AddProducts = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [regularPrice, setRegularPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');


  return (
    <>
    <div className='add-product container'>
    <form>
      {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      <label>
        Product Image:
        <input
          type="file"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
          required
        />
      </label>
      <label>
        Product Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </label>
      <label>
        Regular Price:
        <input
          type="number"
          value={regularPrice}
          onChange={(e) => setRegularPrice(e.target.value)}
          required
        />
      </label>
      <label>
        New Price:
        <input
          type="number"
          value={discountedPrice}
          onChange={(e) => setDiscountedPrice(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Product</button>
       </form>
    </div>
        
    </>
    
  );
};

export default AddProducts;
