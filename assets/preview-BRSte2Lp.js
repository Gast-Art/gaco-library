import{d as p}from"./index-ogSvIofg.js";import{R as r}from"./index-B-SYruCi.js";import{f as g,o as O}from"./styled-components.browser.esm-BfDsmhIA.js";import{l as R,d as v}from"./light-DBn3_0ZE.js";const{useParameter:b,addons:P,useEffect:F,useMemo:S}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:x}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var M=Object.defineProperty,k=(e,t)=>{for(var o in t)M(e,o,{get:t[o],enumerable:!0})},a="themes",$=`storybook/${a}`,z="theme",E={},A={REGISTER_THEMES:`${$}/REGISTER_THEMES`},I={};k(I,{initializeThemeState:()=>_,pluckThemeFromContext:()=>T,useThemeParameters:()=>D});function T({globals:e}){return e[z]||""}function D(e){return x(p`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[a]??E:b(a,E)}function _(e,t){P.getChannel().emit(A.REGISTER_THEMES,{defaultTheme:t,themes:e})}var L=([e,t])=>t,y=({Provider:e,GlobalStyles:t,defaultTheme:o,themes:s={}})=>{let n=Object.keys(s),i=o||n[0];return _(n,i),(m,c)=>{let{themeOverride:l}=c.parameters[a]??{},h=T(c),f=S(()=>{let u=l||h||i,d=Object.entries(s);return d.length===1?L(d[0]):s[u]},[h,l]);return e?r.createElement(e,{theme:f},t&&r.createElement(t,null),m()):r.createElement(r.Fragment,null,t&&r.createElement(t,null),m())}};const C=g`
  body {
    font-family: 'Inter', sans-serif;
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
`,K={viewMode:"canvas",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},Y=[y({themes:{light:R,dark:v},defaultTheme:"light",Provider:O,GlobalStyles:C})];export{Y as decorators,K as parameters};
