import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: #fff; 




  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }





//styles 


* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  display: flex;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  font-family: 'Rubik', sans-serif;

  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  z-index: -100;

  
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  width: 100%;
  height: 100%;
  
}



:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  height: 100%;
  
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}



h1 {
  font-size: 3.2em;
  line-height: 1.1;
  font-family: 'Sedgwick Ave Display', cursive;
}


::-webkit-scrollbar {
  width: 7px;
  scrollbar-width: 10px;
  background-color: transparent;
          /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {

  background: green;
  border-radius: 100px;      
  background-color: transparent;  /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: red;    /* color of the scroll thumb */
  border-radius: 20px;   
     /* roundness of the scroll thumb */
  /* creates padding around scroll thumb */
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #ffffff;
  }
}
font-family: 'Rubik', sans-serif;






`;

export default GlobalStyles;
