import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon  from '@material-ui/icons/Search';
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {

  const [{ basket }] = useStateValue();   // cara akses ke react context

  console.log(basket);
  
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
            <span className="header__optionLineOne">Hai,</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasketIcon />
            {/* Number of items in the basket */}
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Header
