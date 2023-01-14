import React from 'react'
import { FaHome, FaMailBulk, FaPhone } from 'react-icons/fa'
import './FooterStyles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='top'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: 'white', marginRight: "2rem" }} />
                        <div>
                            <p>New Delhi</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <FaPhone size={20} style={{ color: 'white', marginRight: "2rem" }} />
                        <h4>+91-9968522761</h4>
                    </div>
                    <div className='email'>
                        <FaMailBulk size={20} style={{ color: 'white', marginRight: "2rem" }} />
                        <h4>dakshtevathia@gmail.com</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
