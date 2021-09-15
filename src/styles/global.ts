import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #F9F9F9;
    --black: #333333;
    --light-blue: #CDFFFC;
    --blue: #A4EBF3;
    --light-pink: #F7DBF0;
    --dark-pink: #BEAEE2;
    --gray: #AAAAAA;

    --max-container-width: 1440px
  }

  body {
    background: var(--white) ;
    -webkit-font-smoothing: antialiased
  }

  body, input, button, p, span {
    font: 400 1.5rem 'Patrick Hand', sans-serif;
    color: var(--black);
  }

  a {
    cursor: pointer;
  }
`