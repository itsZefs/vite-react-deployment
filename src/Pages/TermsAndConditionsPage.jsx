import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import TermsAndConditionsTitleSection from '../PageSections/TermsAndConditionsTitleSection/TermsAndConditionsTitleSection.jsx'
import TermsAndConditionsBodySection from '../PageSections/TermsAndConditionsBodySection/TermsAndConditionsBodySection.jsx'
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';

function TermsAndConditionsPage() {

    useEffect(() => {
        document.title = 'DCCPAi - Terms & Conditions'; // Change this text as needed
    }, []);

    return (
        <>
        <NavBar />  
        <TermsAndConditionsTitleSection />
        <TermsAndConditionsBodySection />
        <Footer /> 
        <ShoppingCart/>
        </>
    )
}

export default TermsAndConditionsPage