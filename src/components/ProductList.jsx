import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({product}) => {
  return (
    <div className='list '>
        {
  React.Children.toArray(product.map(item=><ProductCard element={item}/>))
        }
      
    </div>
  )
}

export default ProductList