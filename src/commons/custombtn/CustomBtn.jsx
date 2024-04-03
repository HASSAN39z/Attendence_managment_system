import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ICONS } from '../../constants'

function CustomBtn({icon, title}) {
  return (
    <div className='container'>
       <img src={icon}/>
        <Link to="/dashboard" className='customBtn'>{title}</Link>
    </div>
  )
}

export default CustomBtn