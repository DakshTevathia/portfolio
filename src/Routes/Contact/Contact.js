import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
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
