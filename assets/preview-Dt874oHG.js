import{d as v}from"./index-ogSvIofg.js";import{R as r}from"./index-CR__hKHy.js";import{f as b,o as O}from"./styled-components.browser.esm-DnH8uv-2.js";import{l as E,d as T}from"./light-DNsJRV0f.js";const{useParameter:R,addons:P,useEffect:w,useMemo:k}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:S}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var x=Object.defineProperty,M=(e,t)=>{for(var o in t)x(e,o,{get:t[o],enumerable:!0})},a="themes",$=`storybook/${a}`,z="theme",u={},A={REGISTER_THEMES:`${$}/REGISTER_THEMES`},I={};M(I,{initializeThemeState:()=>_,pluckThemeFromContext:()=>f,useThemeParameters:()=>D});function f({globals:e}){return e[z]||""}function D(e){return S(v`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[a]??u:R(a,u)}function _(e,t){P.getChannel().emit(A.REGISTER_THEMES,{defaultTheme:t,themes:e})}var L=([e,t])=>t,y=({Provider:e,GlobalStyles:t,defaultTheme:o,themes:s={}})=>{let n=Object.keys(s),i=o||n[0];return _(n,i),(m,l)=>{let{themeOverride:c}=l.parameters[a]??{},h=f(l),g=k(()=>{let p=c||h||i,d=Object.entries(s);return d.length===1?L(d[0]):s[p]},[h,c]);return e?r.createElement(e,{theme:g},t&&r.createElement(t,null),m()):r.createElement(r.Fragment,null,t&&r.createElement(t,null),m())}};const C=b`
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
`,K={viewMode:"canvas",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{default:"light",values:[{name:"light",value:E.colors.bg},{name:"dark",value:T.colors.bg}]}},Y=[y({themes:{light:E,dark:T},defaultTheme:"light",Provider:O,GlobalStyles:C})];export{Y as decorators,K as parameters};
