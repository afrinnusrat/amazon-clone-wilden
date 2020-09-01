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
      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span>Hai,</span>
            <span>Sign In</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span>Return</span>
            <span>& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>

        {/* 4th link */}
        
      </div>

    </div>
  )
}

export default Header
