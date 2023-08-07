import React from 'react'
import {Link} from 'react-router-dom'
import './Pricing.css'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className="card-container">

            <div className='card'>
                <h3>- Specifikáció 1 -</h3>
                <span className='bar'></span>
                <p className='btc'>2500 Ft / 1000 db</p>
                <p>- 4 szín + lakk nyomtatás -</p>
                <p>- 80g-os címkenyomó papír -</p>
                <p>- Hőálló lakk -</p>
                <Link to="/contact" className='btn'>Rendelés</Link>
            </div>

            <div className='card'>
            <h3>- Specifikáció 2 -</h3>
                <span className='bar'></span>
                <p className='btc'>3500 Ft / 1000 db</p>
                <p>- 5 szín + lakk nyomtatás -</p>
                <p>- 80g-os ofszet papír -</p>
                <p>- Hőálló lakk -</p>
                <Link to="/contact" className='btn'>Rendelés</Link>
            </div>

            <div className='card'>
            <h3>- Specifikáció 3 -</h3>
                <span className='bar'></span>
                <p className='btc'>4500 Ft / 1000 db</p>
                <p>- 6 szín + lakk nyomtatás -</p>
                <p>- 80g-os műnyomó papír -</p>
                <p>- Hőálló, magasfényű lakk -</p>
                <Link to="/contact" className='btn'>Rendelés</Link>
            </div>

        </div>
    </div>
  )
}

export default Pricing