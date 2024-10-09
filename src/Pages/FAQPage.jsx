import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import FAQTitleSection from '../PageSections/FAQTitleSection/FAQTitleSection.jsx'
import FAQBodySection from '../PageSections/FAQBodySection/FAQBodySection.jsx'
import React, { useEffect } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx'

function FAQPage() {

    useEffect(() => {
        document.title = 'DCCPAI - Frequently Asked Questions'; // Change this text as needed
    }, []);

    return (
        <>
        <NavBar />
        <FAQTitleSection />
        <FAQBodySection />
        <Footer /> 
        <ShoppingCart/>
        
        </>
    )
}

export default FAQPage