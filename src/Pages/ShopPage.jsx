import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import StoreTitleSection from '../PageSections/StoreTitleSection/StoreTitleSection.jsx'
import StoreBodySection from '../PageSections/StoreBodySection/StoreBodySection.jsx'
import React, { useEffect } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx'

function ShopPage() {

    useEffect(() => {
        document.title = 'DCCPAI - Shop'; // Change this text as needed
    }, []);

    return (
        <>
        <NavBar />
        <StoreTitleSection />
        <StoreBodySection />
        <Footer /> 
        <ShoppingCart/>
        </>
    )
}

export default ShopPage