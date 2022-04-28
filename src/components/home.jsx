import React from 'react'
import {Link} from 'react-router-dom'


import CardProduct from './cardProduct'
import CardUser from './cardUser';

export default function Home() {
  return (
    <div>
        <Link to='/'>
          <div className='home'> 
            <CardProduct/>
            <CardUser/>
          </div> 
        </Link>
    </div>
  )
}
