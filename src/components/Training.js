import React from 'react'
import {Link} from 'react-router-dom'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'
import './Training.css'

const Training = () => {
  return (
    <div className="training">

        <div className='left'>
            <h1>Támogatás</h1>
            <p>Cégünk a legmagasabb minőségben vállalja címkék nyomtatását ofszet technológiával. Korszerű gépparkunk biztosítja a folyamatos jó színvonalú gyártást. Magasan képzett munkatársaink képesek a legjobb minőségű termékek előállítására!</p>
            <Link to="/contact" className='btn'>Kapcsolat</Link>
        </div>

        <div className="right">
            <div className="image-container">
                <div className='image-stack top'>
                    <img src={Moon} alt="moon" />
                </div>
                <div className='image-stack bottom'>
                    <img src={Pod} alt="pod" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Training