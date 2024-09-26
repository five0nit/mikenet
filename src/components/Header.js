import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header
  background: linear-gradient(135 deg, #0072 CE, #00 A6 EB);
  padding: 1 rem;
  box-shadow: 0 4 px 6 px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
;

const Title = styled.h1
  margin: 0;
  font-family: 'Fredoka One', cursive;
  font-size: 2.5 rem;
;

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Quotes'R'Us</Title>
    </HeaderWrapper>
  );
}
