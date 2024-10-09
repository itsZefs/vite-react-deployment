import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import ProductDetailsBodySection from '../PageSections/ProductDetailsBodySection/ProductDetailsBodySection.jsx'
import React, { useEffect } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';

function ProductDetailsPage() {

    useEffect(() => {
        document.title = '[Insert Product Name Here]'; // Change this text as needed
    }, []);

    return (
        <>
        <NavBar />
        <ProductDetailsBodySection />
        <Footer /> 
        <ShoppingCart/>
        </>
    )
}

export default ProductDetailsPage