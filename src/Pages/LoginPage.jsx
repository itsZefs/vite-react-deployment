import LoginSection from '../PageSections/LoginSection/LoginSection.jsx'
import React, { useEffect } from 'react';

function LoginPage() {

  useEffect(() => {
    document.title = 'DCCPAI - Login'; // Change this text as needed
}, []);

  return (
    <>
    <LoginSection />
    </>
  );
    
}

export default LoginPage
