import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ContactContent from './ContactContent.js'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <ContactContent heading='Contact' desc='this is some contact form here' />
            <Footer />

        </div>
    )
}

export default Contact
