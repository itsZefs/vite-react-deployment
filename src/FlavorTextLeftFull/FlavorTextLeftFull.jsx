import styles from '../FlavorTextLeftFull/FlavorTextLeftFull.module.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function FlavorTextLeftFull(props) {
    return (
        <div className={styles.whoWeAreTextContainer}>
            <div className={`${styles.whoWeAreMainText} ${styles.whoWeAreText}`}>{props.mainText}</div>
            <div className={`${styles.whoWeAreSubText} ${styles.whoWeAreText}`}>
                {props.children || props.subText}
            </div>
            {/* <div className={styles.buttonContainer}>
                <Link to="/pageUnderConstruction" className="Link">
                <TextButton className={`${styles.button} ${styles.shopButton}`} buttonText="About" />
                </Link>
            </div> */}
        </div>
    );
}

FlavorTextLeftFull.propTypes = {
    mainText: PropTypes.string,
    subText: PropTypes.string,
    children: PropTypes.node,  // Add this line to specify that children can be passed in
};

FlavorTextLeftFull.defaultProps = {
    mainText: "Main Text (Left)",
    subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac. Elementum facilisis leo vel fringilla est ullamcorper eget. Dignissim suspendisse in est ante in nibh mauris. Tincidunt eget nullam non nisi est. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac. Elementum facilisis leo vel fringilla est ullamcorper eget. Dignissim suspendisse in est ante in nibh mauris. Tincidunt eget nullam non nisi est. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac. Elementum facilisis leo vel fringilla est ullamcorper eget. Dignissim suspendisse in est ante in nibh mauris. Tincidunt eget nullam non nisi est.",
    children: "Default subText content here.",
};

export default FlavorTextLeftFull;
