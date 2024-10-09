import styles from '../LoginSection/LoginSection.module.css'
import TextButton from '../../TextButton/TextButton.jsx'

function LoginSection() {
    return (
        <>  
        <div className={styles.loginSectionDiv}>
        <div className={styles.loginContainer}>
                <h1>Login</h1>
                
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required 
                    />

                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                    />

            <div className={styles.TextButtonPlacement}>
            <TextButton buttonText="Login" className={styles.buttonContainer}></TextButton>
            </div>
            </div>
        </div>
            
        </>
    );
}


export default LoginSection;
