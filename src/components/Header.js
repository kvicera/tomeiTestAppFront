import './Header.css'
import React from 'react'
import logo from '../assets/Logo.png'

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="logo"/>
    </div>
  )
}
export default Header
