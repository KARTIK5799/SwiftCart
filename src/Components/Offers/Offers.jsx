import React from 'react'
import './Offers.css'
import ExclusiveImg from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on Best Seller Product</p>
        <button>Check</button>
      </div>

      <div className="offers right">
<img src={ExclusiveImg} alt="" />
      </div>
    </div>
  )
}

export default Offers
