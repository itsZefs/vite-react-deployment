import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import FindUsTitleSection from '../PageSections/FindUsTitleSection/FindUsTitleSection.jsx'
import FindUsBodySection from '../PageSections/FindUsBodySection/FindUsBodySection.jsx'
import React, { useEffect } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';

function FindUsPage() {

    useEffect(() => {
        document.title = 'DCCPAI - Find Us!'; // Change this text as needed
    }, []);

    return (
        <>
        <NavBar />
        <FindUsTitleSection />
        <FindUsBodySection />
        <Footer />
        <ShoppingCart/>
        </>
    )
}

export default FindUsPage