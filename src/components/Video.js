import React from 'react'
import printingVideo from '../assets/printing.mp4'
import {Link} from 'react-router-dom'
import './Video.css'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id="video">
            <source src={printingVideo} type="video/mp4" />
        </video>

        <div className="content">
            <h1>Budapest Printing</h1>
            <p>Az ország egyik legjobban felszerelt nyomdája!</p>
            <div>
                <Link to="/training" className='btn'>Támogatás</Link>
                <Link to="/contact" className='btn btn-light'>Kapcsolat</Link>
            </div>
        </div>
    </div>
  )
}

export default Video