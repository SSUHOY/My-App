import { createGlobalStyle } from 'styled-components';
import { themes } from '../../../utils/theme-switcher/theme';

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

button,
._btn {
cursor: pointer;
}

a,
a:visited {
text-decoration: none;
font-family: 'StratosSkyeng', sans-serif;
cursor: pointer;
}

::-webkit-scrollbar {
  width: 4px; /* Ширина полосы прокрутки */
  cursor: pointer;
}

ul li {
  list-style: none;
}



@font-face {
  font-family: 'StratosSkyeng';
  src: local("StratosSkyeng"), 
  local("StratosSkyeng"), 
  url("/fonts/Stratos-Regular.woff2") format("woff2"),
  url("/fonts/Stratos-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  
} 

html,
body {
  margin: 0 auto;
  max-width: 1920px;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #FFFFFF;
  background-color: ${themes.dark};
  position: relative;
}

::-webkit-scrollbar {
  width: 4px; /* Ширина полосы прокрутки */
  cursor: pointer;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.underline {
  color: rgba(182, 114, 255, 1);
}

.show {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 32px;
  width: 248px;
  height: 305px;
  border-radius: 12px;
  gap: 24px;
}

.show-year {
  display: flex;
  font-size: 20px;
  padding: 32px;
  width: 260px;
  height: 124px;
  border-radius: 12px;
}

.show-genres {
  text-wrap: nowrap;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 32px;
  width: 280px;
  height: 198px;
  border-radius: 12px;
  gap: 24px;
}

`

export default GlobalStyling