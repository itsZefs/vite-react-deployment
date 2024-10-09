import styles from './StoreBodySection.module.css';
import ProductCard from '../../ProductCard/ProductCard.jsx'
import ProductCard2 from '../../ProductCard2/ProductCard2.jsx'
import ProductCard2Small from '../../ProductCard2Small/ProductCard2Small.jsx'
import PropTypes from 'prop-types';

function ShopBodySection() {
    return(
    <>
    <div className={styles.storeBodyContainer}>
        <div className={styles.storeBodyLeft}>
        <h1>Categories</h1>
        <h2>All Products</h2>
        <h2>Cacao</h2>
        <ul>
            <li>Product Type 1</li>
            <li>Product Type 2</li>
            <li>Product Type 2</li>
            <li>Product Type 3</li>
        </ul>

        <h2>Non Cacao</h2>
        <ul>
            <li>Product Type 1</li>
            <li>Product Type 2</li>
        </ul>

        </div>
        
        <div className={styles.storeBodyRight}>
        <div className={styles.storeBodyGrid}>
            {/* <ProductCard buttonLink='ProductDetails'/>
            <ProductCard buttonLink='ProductDetails'/>
            <ProductCard buttonLink='ProductDetails'/>
            <ProductCard buttonLink='ProductDetails'/>
            <ProductCard buttonLink='ProductDetails'/>
            <ProductCard buttonLink='ProductDetails'/>
            <ProductCard buttonLink='ProductDetails'/>
            <ProductCard buttonLink='ProductDetails'/>
            <ProductCard buttonLink='ProductDetails'/> */}
            <ProductCard2Small />
            <ProductCard2Small />
            <ProductCard2Small />
            <ProductCard2Small />
            <ProductCard2Small />
            <ProductCard2Small />
            <ProductCard2Small />
            <ProductCard2Small />
            <ProductCard2Small />
            
        </div>
        <div className={styles.pageList}>
                <div>1</div> {/*find a way to make it show the highlighted page */}
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </div>

    </div>
    </>
    );
}

// ShopBodySection.PropTypes = {
//     buttonLeadsTo: PropTypes.string,
// }

// ShopBodySection.defaultProps = {
//     buttonLeadsTo: "",
// }

export default ShopBodySection