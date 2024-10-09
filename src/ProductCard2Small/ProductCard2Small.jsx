import React from 'react';
import styles from './ProductCard2Small.module.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import TextButton from '../TextButton/TextButton';
import TextButtonSmall from '../TextButtonSmall/TextButtonSmall.jsx';

function ProductCard2Small(props) {

    const fallbackSrc = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


    return (
        <div className={styles.productCardContainer}>

            <div className={styles.topRow}>
                <div className={styles.productReview}>
                    ★★★★★ 200 Reviews
                </div>
                <div className={styles.productPrice}>
                    ₱250.00
                </div>
            </div>

            <div className={styles.middlePicture}>
                <img
                    src={fallbackSrc}
                    className={styles.productImage}
                />
            </div>

            <div className={styles.bottomRow}>
                <div className={styles.productName}>
                    Product Name
                </div>
                <div className={styles.addToCart}>
                    <TextButtonSmall buttonText="Add To List" buttonLink="ProductDetails"/>
                </div>
            </div>
        </div>
    );
}

ProductCard2Small.PropTypes = {
    buttonLink: PropTypes.string,
}

ProductCard2Small.defaultProps = {
    buttonLink: "",
}

export default ProductCard2Small;
