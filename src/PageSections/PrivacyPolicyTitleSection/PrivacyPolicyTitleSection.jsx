import FlavorTextMiddle from '../../FlavorTextMiddle/FlavorTextMiddle';
import styles from '../PrivacyPolicyTitleSection/PrivacyPolicyTitleSection.module.css'

function PrivacyPolicyTitleSection() {
    return(
        <>
        <div className={styles.privacyPolicyTitleContainer}>
            <FlavorTextMiddle mainText="Privacy Policy" subText="Davao City Chocolate Processors Association Incorporated respects your privacy and is committed to protecting your personal data. This privacy policy will inform you how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you." />
        </div>
        </>
    );
}

export default PrivacyPolicyTitleSection