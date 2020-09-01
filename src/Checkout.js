import React from 'react'
import { useStateValue } from './StateProvider';

function Checkout() {

  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
        alt=""
      />
    </div>
  )
}

export default Checkout
