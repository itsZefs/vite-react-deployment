import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import PaymentsTitleSection from '../PageSections/PaymentsTitleSection/PaymentsTitleSection.jsx'
import PaymentsBodySection from '../PageSections/PaymentsBodySection/PaymentsBodySection.jsx'
import React, { useEffect } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';

function PaymentsPage() {
    
    useEffect(() => {
        document.title = 'DCCPAI - Payments'; // Change this text as needed
    }, []);

    return (
        <>
        <NavBar />
        <PaymentsTitleSection />
        <PaymentsBodySection />
        <Footer /> 
        <ShoppingCart/>
        </>
    )
}

export default PaymentsPage