import{d as v}from"./index-ogSvIofg.js";import{R as a,c as T,g as x}from"./index-CXuOLBzL.js";import{s as k,f as w,o as O}from"./styled-components.browser.esm-C1W4bV5D.js";import{l as f,d as g}from"./light-CHoHqcPY.js";const{useParameter:R,addons:P,useEffect:W,useMemo:$}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:S}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var M=Object.defineProperty,N=(e,t)=>{for(var r in t)M(e,r,{get:t[r],enumerable:!0})},i="themes",A=`storybook/${i}`,D="theme",b={},C={REGISTER_THEMES:`${A}/REGISTER_THEMES`},I={};N(I,{initializeThemeState:()=>z,pluckThemeFromContext:()=>y,useThemeParameters:()=>G});function y({globals:e}){return e[D]||""}function G(e){return S(v`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[i]??b:R(i,b)}function z(e,t){P.getChannel().emit(C.REGISTER_THEMES,{defaultTheme:t,themes:e})}var L=([e,t])=>t,j=({Provider:e,GlobalStyles:t,defaultTheme:r,themes:n={}})=>{let s=Object.keys(n),l=r||s[0];return z(s,l),(m,d)=>{let{themeOverride:c}=d.parameters[i]??{},u=y(d),E=$(()=>{let _=c||u||l,p=Object.entries(n);return p.length===1?L(p[0]):n[_]},[u,c]);return e?a.createElement(e,{theme:E},t&&a.createElement(t,null),m()):a.createElement(a.Fragment,null,t&&a.createElement(t,null),m())}},o={};const F=T(k);var h;function H(){if(h)return o;h=1,Object.defineProperty(o,"__esModule",{value:!0}),o.default=o.Normalize=o.normalize=void 0;var e=F,t=(0,e.css)(['html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}']);o.normalize=t;var r=(0,e.createGlobalStyle)(t);o.Normalize=r,r.displayName="Normalize";var n=t;return o.default=n,o}var K=H();const B=x(K),Y=w`
 ${B}

  body {
    font-family: ${({theme:e})=>e.fonts.body};
    margin: 0;
    padding: 0;
    background-color: ${({theme:e})=>e.colors.background};
    line-height: 1.2;
  }

  a {
    color: ${({theme:e})=>e.colors.anchorColor};
    &:hover {
      color: ${({theme:e})=>e.colors.anchorColorHover};
    }
  }

  h1 {
    font-size: ${({theme:e})=>e.sizes.fonts.xxl};
    font-weight: bold;
  }

  h2 {
    font-size: ${({theme:e})=>e.sizes.fonts.xl};
    font-weight: bold;
  }

  h3 {
    font-size: ${({theme:e})=>e.sizes.fonts.lg};
    font-weight: bold;
  }

  * {
    box-sizing: border-box;
  }
`,X={viewMode:"canvas",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{default:"light",values:[{name:"light",value:f.colors.bg},{name:"dark",value:g.colors.bg}]}},Z=[j({themes:{light:f,dark:g},defaultTheme:"light",Provider:O,GlobalStyles:Y})];export{Z as decorators,X as parameters};
