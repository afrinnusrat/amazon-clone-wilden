import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      {/* Logo on the left -> img */}
      {/* Search Box */}
      {/* 3 Links */}
      {/* Basket icon with number */}

      {/* Logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Search Box */}
      <input type="text" className="header__searchInput"/>

    </div>
  )
}

export default Header
