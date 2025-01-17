import { createGlobalStyle } from 'styled-components';
import * as fonts from '../fonts'

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;

const GlobalStyles = createGlobalStyle`
  ${normalize};
  @font-face {
    font-family: "PxGrotesk-Screen";
    src: url("../../static/fonts/PxGrotesk-Screen.otf")   format("otf");
  } 
  @font-face {
    font-family: 'PxGrotesk-Screen';
    src: url(${fonts.PxGroteskScreen});
  }
  body {
    font-family: PxGrotesk-Screen, Courier, monospace;
  }
  h1, h2, h3 {
    margin: 0;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-weight: normal;
    padding: 10px 0;
  }
  
  h1, h2 {
    font-family: PxGrotesk-Screen, Courier, monospace;
    font-weight: 700;
    font-style: normal;
  }
  h1 {
    ${props => props.theme.font_size.xlarge};
    padding-bottom: 30px;
    padding-top:30px;
    text-align: center;
  }
  h2 {
    ${props => props.theme.font_size.large};
  }
  h3 {
    ${props => props.theme.font_size.large};
    text-align: center;
  }
  h4 {
    ${props => props.theme.font_size.large};
    text-align: left;
    margin-bottom: 60px;
  }
  p {
    ${props => props.theme.font_size.regular};
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    h1 {
      ${props => props.theme.font_size.large};
    }
    h2 {
      ${props => props.theme.font_size.xsmall};
      text-align: left;
      hyphens: auto;
    }
    h3 {
      ${props => props.theme.font_size.xsmall};
      text-align: center;
    }
    h4 {
      ${props => props.theme.font_size.xsmall};
      text-align: left;
    }
    p {
      ${props => props.theme.font_size.small};
    }
  }
  
  button {
    color: black;
    border-radius: 12px;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
    text-decoration: underline; 
  }
  a:link{
    color:${props => props.theme.colour.text.black};
  }
  a:visited{
    color:${props => props.theme.colour.text.black};
  }
  a:hover{
    color: #00FF00;
  }
  a:active{
    color:${props => props.theme.colour.text.black};
  }
  .underline {
      border-bottom-width: 0.5px;
      border-bottom-style: solid;
    }
  
`;

export default GlobalStyles;