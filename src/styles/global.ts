import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background: #DFE1EB;
    color: #4b4b5a;
  }


`;
