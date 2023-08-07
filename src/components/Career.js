import React from 'react'
import {Link} from 'react-router-dom'
import './Career.css'

const Career = () => {
  return (
    <div className='career'>
        <div className="card-container">

            <div className='card'>
                <h3>- Nyomdai gépmester -</h3>
                <span className='bar'></span>
                <p className='btc'> Bérezés: 3500 Ft / óra</p>
                <p>- Gépmester végzettség szükséges -</p>
                <p>- Kafetéria havonta -</p>
                <p>- 13. havi fizetés -</p>
                <Link to="/contact" className='btn'>Jelentkezés</Link>
            </div>

            <div className='card'>
            <h3>- Nyomdai kikészítő -</h3>
                <span className='bar'></span>
                <p className='btc'> Bérezés: 2000 Ft / óra</p>
                <p>- Nyomdász végzettség előny -</p>
                <p>- Kafetéria havonta -</p>
                <p>- 13. havi fizetés -</p>
                <Link to="/contact" className='btn'>Jelentkezés</Link>
            </div>

            <div className='card'>
            <h3>- Termékmenedzser -</h3>
                <span className='bar'></span>
                <p className='btc'> Bér megegyezés szerint </p>
                <p>- Nyomdász végzettség előny -</p>
                <p>- Kafetéria havonta -</p>
                <p>- 13. havi fizetés -</p>
                <Link to="/contact" className='btn'>Jelentkezés</Link>
            </div>

        </div>
    </div>
  )
}

export default Career