import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header
  background: linear-gradient(135deg, #0072CE, #00A6EB);
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  position: relative;
  z-index: 1000;
;

const HeaderContent = styled.div
  display: flex;
  flex-direction: column;
  align-items: center;
;

const TitleContainer = styled.div
  display: flex;
  align-items: center;
  justify-content: center;
;

const HeaderIcon = styled.i
  font-size: 2.5rem;
  margin-right: 0.5rem;
;

const Title = styled.h1
  margin: 0;
  font-family: 'Fredoka One', cursive;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
;

const Tagline = styled.p
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: 300;
  text-align: center;
;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <TitleContainer>
          <HeaderIcon className="fas fa-map-marked-alt" />
          <Title>Quotes'R'Us</Title>
        </TitleContainer>
        <Tagline>Navigate Your Way to Fair Prices</Tagline>
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;
