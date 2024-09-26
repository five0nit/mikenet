import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div
  display: \;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
;

const ModalContent = styled.div
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
;

function FindInstallerModal({ show, onClose }) {
  return (
    <ModalBackground show={show} onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2>Find Installer</h2>
        {/* Add form fields here */}
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalBackground>
  );
}

export default FindInstallerModal;
