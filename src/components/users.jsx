import React from 'react'
import {Link} from 'react-router-dom'
import CardUser from './cardUser'
import UserDesc from './userDescription'




export default function Users() {
  return (
    <div>
        <Link to='/users'>
            <CardUser/>
            <UserDesc/>
        </Link>
    </div>
  )
}
