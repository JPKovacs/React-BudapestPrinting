import React from 'react'
import {FaFacebook, FaTwitter, FaLinkedin, FaMailBulk, FaSearchLocation, FaPhone} from 'react-icons/fa';
import './Footer.css'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-container">
            <div className="left">

                <div className="location">
                    <FaSearchLocation size={20} style={{color: '#fff', marginRight: '2rem'}} />
                    <div>
                        <p>Gutenberg utca 100.</p>
                        <h4>1094 Budapest</h4>
                    </div>  
                </div>  

                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}} />
                        06-80-123-4567
                    </h4>
                </div> 

                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}} />
                        info@budapestprinting.hu
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>Rólunk</h4>
                <p>Cégünk a legmagasabb minőségben vállalja címkék nyomtatását ofszet technológiával. Korszerű gépparkunk biztosítja a folyamatos jó színvonalú gyártást. Magasan képzett munkatársaink képesek a legjobb minőségű termékek előállítására!</p>
                <div className="social">
                    <FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}} />
                    <FaTwitter size={30} style={{color: '#fff', marginRight: '1rem'}} />
                    <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}} />
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer