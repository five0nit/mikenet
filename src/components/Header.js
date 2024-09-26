import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, #0072CE, #00A6EB);
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Fredoka One', cursive;
  font-size: 2.5rem;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Quotes'R'Us</Title>
    </HeaderWrapper>
  );
}