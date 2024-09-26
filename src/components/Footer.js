import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2023 Quotes'R'Us. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;
