import React from 'react';;
import styled from 'styled-components';;

const MainWrapper = styled.main;;
  max-width: 1200px;;
  margin: 0 auto;;
  padding: 2rem;;
;;

const Button = styled.button;
  background-color: #0072CE;;
  color: white;;
  border: none;;
  padding: 10px 20px;;
  margin: 10px;;
  border-radius: 5px;;
  cursor: pointer;;
  font-size: 16px;;

  &:hover {;
    background-color: #005ba1;;
  };
;;

export default function Main() {;
  const handleUploadQuote = () => {;
    alert('Upload Quote functionality will be implemented here');;
  };;

  const handleFindInstaller = () => {;
    alert('Find Installer functionality will be implemented here');;
  };;

  return (;
    <MainWrapper>;
      <h2>Welcome to Quotes'R'Us</h2>;
      <p>Navigate your way to fair prices with our quote comparison tools.</p>;
      <Button onClick={handleUploadQuote}>Upload Quote</Button>;
      <Button onClick={handleFindInstaller}>Find Installer</Button>;
    </MainWrapper>;
  );;
};
