import PropTypes from 'prop-types';
import styles from './TextButtonSmall.module.css';
import { Link } from "react-router-dom";

function TextButtonSmall(props) {
    return(
        <>
        <Link to={`/${props.buttonLink}`} className="Link">
        <button className={styles.TextButton}>{props.buttonText}</button>
        </Link>
        </>
        
    );
}

TextButtonSmall.PropTypes = {
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
}

TextButtonSmall.defaultProps = {
    buttonText: "Placeholder Text",
    buttonLink: "",
}

export default TextButtonSmall