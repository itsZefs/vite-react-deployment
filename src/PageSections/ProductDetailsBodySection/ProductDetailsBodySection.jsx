import styles from './ProductDetailsBodySection.module.css';


function ProductDetailsBodySection() {
    return(
    <>
    <div className={styles.productDetailsBodyContainer}>
        <div className={styles.imageWithArrowsDiv}>

        <div className={styles.leftArrow}>
            <h1>{'<'}</h1>
        </div>
        <img 
            src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Banana with a pink background" 
            id="productImage1" 
            className={styles.productImage}
        />
        <div className={styles.rightArrow}>
            <h1>{'>'}</h1>
        </div>

        </div>
        

        <div className={styles.textContainer}>
            <h1>Product Name</h1>
            <p><b>Product Detail 1:</b> Lorem Ipsum</p>
            <p><b>Product Detail 2:</b> Lorem Ipsum</p>
            <p><b>Price:</b> $100</p>
            <p>Fine Print Text Lorem Ipsum</p>
            <button>Add To List</button>
        </div>

    </div>
    </>
    );
}

export default ProductDetailsBodySection