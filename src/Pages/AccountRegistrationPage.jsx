import AccountRegistrationSection from '../PageSections/AccountRegistrationSection/AccountRegistrationSection.jsx'
import React, { useEffect } from 'react';

function AccountRegistrationPage() {

  useEffect(() => {
    document.title = 'DCCPAI - Account Registration'; // Change this text as needed
  }, []); 

  return (
    <>
      <AccountRegistrationSection />
    </>
  );
    
}

export default AccountRegistrationPage
