import React from 'react';
import styled from 'styled-components';
import WelcomeSlider from './WelcomeSlider';
import Map from './Map';
import Filters from './Filters';
import Legend from './Legend';
import Cards from './Cards';
import PriceChart from './PriceChart';

const MainWrapper = styled.main
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 100px;
;

const ChartContainer = styled.div
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
;

const UploadQuoteButton = styled.button
  position: fixed;
  bottom: 70px;
  right: 10px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;

  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
;

const FindInstallerButton = styled(UploadQuoteButton)
  left: 10px;
  right: auto;
;

function Main({ onUploadQuote, onFindInstaller }) {
  return (
    <MainWrapper>
      <WelcomeSlider />
      <Map />
      <Filters />
      <Legend />
      <ChartContainer>
        <PriceChart />
      </ChartContainer>
      <Cards />
      <UploadQuoteButton onClick={onUploadQuote}>Upload Quote</UploadQuoteButton>
      <FindInstallerButton onClick={onFindInstaller}>Find Installer</FindInstallerButton>
    </MainWrapper>
  );
}

export default Main;
