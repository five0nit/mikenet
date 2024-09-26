import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto:wght@300;400;700&display=swap');

  :root {
    --primary-color: #0072CE;
    --secondary-color: #FF6B00;
    --background-color: #F5F5F5;
    --text-color: #333333;
    --card-background: #FFFFFF;
    --modal-background: #F0F0F0;
    --modal-header: #0072CE;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    line-height: 1.6;
    color: var(--text-color);
  }

  /* Add all the CSS from the provided HTML here */
  /* ... */
;
