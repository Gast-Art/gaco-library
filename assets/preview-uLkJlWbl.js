import{d as v}from"./index-ogSvIofg.js";import{R as t}from"./index-CZMpeKRu.js";import{f as b,o as O}from"./styled-components.browser.esm-BT5p091k.js";import{l as u,d as E}from"./light-62K-jGsB.js";const{useParameter:R,addons:P,useEffect:w,useMemo:k}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:S}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var x=Object.defineProperty,M=(e,r)=>{for(var o in r)x(e,o,{get:r[o],enumerable:!0})},a="themes",L=`storybook/${a}`,$="theme",d={},y={REGISTER_THEMES:`${L}/REGISTER_THEMES`},z={};M(z,{initializeThemeState:()=>_,pluckThemeFromContext:()=>T,useThemeParameters:()=>A});function T({globals:e}){return e[$]||""}function A(e){return S(v`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[a]??d:R(a,d)}function _(e,r){P.getChannel().emit(y.REGISTER_THEMES,{defaultTheme:r,themes:e})}var I=([e,r])=>r,D=({Provider:e,GlobalStyles:r,defaultTheme:o,themes:s={}})=>{let n=Object.keys(s),i=o||n[0];return _(n,i),(m,l)=>{let{themeOverride:c}=l.parameters[a]??{},h=T(l),g=k(()=>{let p=c||h||i,f=Object.entries(s);return f.length===1?I(f[0]):s[p]},[h,c]);return e?t.createElement(e,{theme:g},r&&t.createElement(r,null),m()):t.createElement(t.Fragment,null,r&&t.createElement(r,null),m())}};const C=b`
  body {
    font-family: 'Figtree', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({theme:e})=>e.colors.background};
  }

  a {
    color: ${({theme:e})=>e.colors.anchorColor};
    &:hover {
      color: ${({theme:e})=>e.colors.anchorColorHover};
    }
  }

  h1 {
    font-size: ${({theme:e})=>e.sizes.fonts.xxl};
    font-family: 'Lora', serif;
    font-weight: bold;
  }

  h2 {
    font-size: ${({theme:e})=>e.sizes.fonts.xl};
    font-family: 'Lora', serif;
    font-weight: bold;
  }

  h3 {
    font-size: ${({theme:e})=>e.sizes.fonts.lg};
    font-family: 'Lora', serif;
    font-weight: bold;
  }

  * {
    box-sizing: border-box;
  }
`,K={viewMode:"canvas",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{default:"light",values:[{name:"light",value:u.colors.bg},{name:"dark",value:E.colors.bg}]}},Y=[D({themes:{light:u,dark:E},defaultTheme:"light",Provider:O,GlobalStyles:C})];export{Y as decorators,K as parameters};
