import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://cdn-images-1.medium.com/fit/t/1600/480/0*PPKK7RZAC6QAfDpQ"
        alt=""
      />
      {
        basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more click "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* List out all of the Chechout Products */}
            {
              basket.map(item => (
                <CheckoutProduct
                  item={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Checkout
