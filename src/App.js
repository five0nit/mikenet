import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import UploadQuoteModal from './components/UploadQuoteModal';
import FindInstallerModal from './components/FindInstallerModal';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [showUploadQuoteModal, setShowUploadQuoteModal] = useState(false);
  const [showFindInstallerModal, setShowFindInstallerModal] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = https://maps.googleapis.com/maps/api/js?key=AIzaSyB5wikCnBMZx8lLEOuR8r-bc50qTNi25fY&map_ids=44af2e947d49bfff&libraries=visualization;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main
        onUploadQuote={() => setShowUploadQuoteModal(true)}
        onFindInstaller={() => setShowFindInstallerModal(true)}
      />
      <Footer />
      <UploadQuoteModal
        show={showUploadQuoteModal}
        onClose={() => setShowUploadQuoteModal(false)}
      />
      <FindInstallerModal
        show={showFindInstallerModal}
        onClose={() => setShowFindInstallerModal(false)}
      />
    </>
  );
}

export default App;
