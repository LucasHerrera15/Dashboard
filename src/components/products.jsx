import React from 'react'
import {Link} from 'react-router-dom'


import CardProduct from './cardProduct'
import ProductDesc from './productoDescription';

export default function Products() {
  return (
    <div>
        <Link to='/product'>
            <CardProduct/>
            <ProductDesc/>
        </Link>
    </div>
  )
}
