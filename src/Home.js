import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        alt=""
      />
      
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        {/* Product */}
        <Product
          id="12341234"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="12341234"
          title="Apple iPhone 11 Pro Max, 64GB, Midnight Green - Fully Unlocked (Renewed)"
          price={1.044}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61GggH1hAaL._AC_SL1000_.jpg"
        />
      </div>
      
      <div className="home__row">
        <Product
          id="12341234"
          title="DJI Mavic Pro Platinum with Extra Battery, Flagship 4K Quadcopter Drone with 30 Mins Flight Time, 7 km Range, Obstacle Avoidance and More"
          price={1.049}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71gKtFQ9hIL._AC_SL1500_.jpg"
        />
        <Product
          id="12341234"
          title="Acer Predator Helios 300, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6 inch Full HD 144Hz, 16GB Dual-Channel DDR4, 512GB NVMe SSD"
          price={1.329}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"
        />
        <Product
          id="12341234"
          title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround"
          price={37.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SL1301_.jpg"
        />
      </div>
      
      <div className="home__row">
        <Product
          id="12341234"
          title="Dash Mini Maker: The Mini Waffle Maker Machine for Individual Waffles, Paninis, Hash browns, & other on the go Breakfast, Lunch, or Snacks - Red"
          price={11.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81zKwg8kQ0L._AC_SL1500_.jpg"
        />
      </div>

    </div>
  )
}

export default Home
