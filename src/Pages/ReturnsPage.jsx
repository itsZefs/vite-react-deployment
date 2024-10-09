import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import ReturnsTitleSection from '../PageSections/ReturnsTitleSection/ReturnsTitleSection.jsx'
import ReturnsBodySection from '../PageSections/ReturnsBodySection/ReturnsBodySection.jsx'
import React, { useEffect } from 'react';

function ReturnsPage() {

    useEffect(() => {
        document.title = 'DCCPAI - Returns'; // Change this text as needed
    }, []);

    return (
        <>
        <NavBar />
        <ReturnsTitleSection />
        <ReturnsBodySection />
        <Footer /> 
        </>
    )
}

export default ReturnsPage