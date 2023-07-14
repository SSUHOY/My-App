import { createGlobalStyle } from 'styled-components';

const GlobalStyling = createGlobalStyle `

*:before,
*:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

* {
    margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

@font-face {
  font-family: 'StratosSkyeng';
  src: local("StratosSkyeng"), local("StratosSkyeng"), url("/fonts/Stratos-Regular.woff2") format("woff2"), url("/fonts/Stratos-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
} 

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #FFFFFF;
  background-color: #313131;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
export default GlobalStyling