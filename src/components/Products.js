import React from 'react'
import {Link} from 'react-router-dom'
import './Products.css'

const Products = () => {
  return (
    <div className='products'>
        <div className="card-container">

            <div className='card'>
                <h3>- Specifikáció 1 -</h3>
                <span className='bar'></span>
                <p>- 4 szín + lakk nyomtatás -</p>
                <p>- 80g-os címkenyomó papír -</p>
                <p>- Hőálló lakk -</p>
                <Link to="/contact" className='btn'>Rendelés</Link>
            </div>

            <div className='card'>
            <h3>- Specifikáció 2 -</h3>
                <span className='bar'></span>
                <p>- 5 szín + lakk nyomtatás -</p>
                <p>- 80g-os ofszet papír -</p>
                <p>- Hőálló lakk -</p>
                <Link to="/contact" className='btn'>Rendelés</Link>
            </div>

            <div className='card'>
            <h3>- Specifikáció 3 -</h3>
                <span className='bar'></span>
                <p>- 6 szín + lakk nyomtatás -</p>
                <p>- 80g-os műnyomó papír -</p>
                <p>- Hőálló, magasfényű lakk -</p>
                <Link to="/contact" className='btn'>Rendelés</Link>
            </div>

        </div>
    </div>
  )
}

export default Products