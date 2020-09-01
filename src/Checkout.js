import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css'

function Checkout() {

  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
        alt=""
      />
      {
        basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
          </div>
        ) : (
          <div>
            <h2>Your Shopping Basket</h2>
          </div>
        )
      }
    </div>
  )
}

export default Checkout
