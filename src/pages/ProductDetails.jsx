import React from 'react'
import ProductsHeader from '../components/ProductDetails/ProductsHeader'
import ProductDetailsMain from '../components/ProductDetails/ProductDetailsMain';
import ProductDescription from '../components/ProductDetails/ProductDescription';
import SoftwareInstallSteps from '../components/Home/SoftwareInstallSteps';
// import SystemRequirements from '../components/ProductDetails/SystemRequirements';

const ProductDetails = () => {
  return (
    <>
      <ProductsHeader/>
      <ProductDetailsMain/>
      <ProductDescription/>
      <SoftwareInstallSteps/>
    </>
  )
}

export default ProductDetails ;
