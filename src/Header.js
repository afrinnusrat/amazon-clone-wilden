import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon  from '@material-ui/icons/Search';

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
      <div className="header_search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header_searchIcon" />
      </div>

    </div>
  )
}

export default Header
