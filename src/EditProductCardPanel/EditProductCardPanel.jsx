import React from 'react';
import styles from './EditProductCardPanel.module.css';
import TextButton from '../TextButton/TextButton';
import { Link } from "react-router-dom";


function EditProductCardPanel() {

    return (
        <>
        <div className={styles.panelContainer}>

            <div className={styles.topRow}>
                <div className={styles.editText}>Edit</div>
                <button className={styles.xButton}>&times;</button>
            </div>

            <div className={styles.productCardPanelGrid}>

            <div className={styles.leftSideTop}>
                <div className={styles.imagePreview}>
                    <h1>Image Preview Here</h1>
                </div>
            </div>
            
            <div className={styles.rightSide}> 
                <div className={styles.panelInputDiv} >
                    <input type="text" placeholder="Name" className={styles.panelInput}>
                    </input>
                </div>

                <div className={styles.panelInputDiv} >
                    <input type="text" placeholder="Description" className={styles.panelInput}>
                    </input>
                </div>

                <div className={styles.panelInputDiv} >
                    <select name="Category" className={styles.panelInput}>
                        <option>Select a Category</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>

                <div className={styles.panelInputDiv} >
                    <input type="text" placeholder="Price" className={styles.panelInput}>
                    </input>
                </div>
            </div>

            </div>

            <div className={styles.bottomInputsDiv}>

            <div className={`${styles.bottomInputs} ${styles.bottomInputButtons}`}>
                <h1>Upload Image</h1>
            </div>

            <div className={`${styles.bottomInputs} ${styles.bottomInputButtons}`}>
                <h1>Update Image</h1>
            </div>

            <div className={`${styles.bottomInputs} ${styles.bottomInputButtons} ${styles.bottomInputButtonsDelete}`}>
                <h1>Delete Image</h1>
            </div>
 
            <div className={styles.bottomInputs}>
                <h1>Display:</h1>
                <input type="radio" className={styles.displayRadial}></input>
            </div>

            <div className={styles.bottomInputs}>
                <h1>Available:</h1>
                <input type="radio" className={styles.displayRadial}></input>
            </div>

            <div className={styles.imageSubmission}>
                <h1>Upload Image</h1>
                <input type="submit" className={styles.submitButton}></input>
                <h1>No File Chosen</h1>
            </div>

            </div>

            <div className={styles.bottomButtons}>  
                <TextButton buttonText="Cancel" /> 
                <TextButton buttonText="Apply" /> 
            </div>

        </div>
        </>
    );
}


export default EditProductCardPanel;
