import{d as E}from"./index-ogSvIofg.js";import{R as t}from"./index-B-SYruCi.js";import{f as T,o as _}from"./styled-components.browser.esm-BfDsmhIA.js";const{useParameter:v,addons:I,useEffect:G,useMemo:R}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:O}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var B=Object.defineProperty,P=(e,r)=>{for(var o in r)B(e,o,{get:r[o],enumerable:!0})},f="themes",k=`storybook/${f}`,y="theme",h={},S={REGISTER_THEMES:`${k}/REGISTER_THEMES`},C={};P(C,{initializeThemeState:()=>b,pluckThemeFromContext:()=>p,useThemeParameters:()=>M});function p({globals:e}){return e[y]||""}function M(e){return O(E`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[f]??h:v(f,h)}function b(e,r){I.getChannel().emit(S.REGISTER_THEMES,{defaultTheme:r,themes:e})}var z=([e,r])=>r,F=({Provider:e,GlobalStyles:r,defaultTheme:o,themes:n={}})=>{let s=Object.keys(n),m=o||s[0];return b(s,m),(c,i)=>{let{themeOverride:l}=i.parameters[f]??{},d=p(i),x=R(()=>{let g=l||d||m,u=Object.entries(n);return u.length===1?z(u[0]):n[g]},[d,l]);return e?t.createElement(e,{theme:x},r&&t.createElement(r,null),c()):t.createElement(t.Fragment,null,r&&t.createElement(r,null),c())}};const H=T`
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
`,a={sizes:{borderRadius:"0.5rem",formControl:"2rem",fonts:{xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",xxl:"1.5rem",xxxl:"2rem"}},shadows:{default:"0px 2px 4px rgba(0, 0, 0, 0.1)",card:"0px 4px 6px rgba(0, 0, 0, 0.1)"},colors:{error:"#ff0000",errorHover:"#ff6666",errorForeground:"#ffffff",success:"#00ff00",warning:"#ffcc00",anchorColor:"#0070f3",anchorColorHover:"#0366d6"}},$={...a,colors:{bg:"#000",text:"#fff",contentBg:"#ffffff",navBg:"#1f1f1f",navColor:"#ffffff",primary:"#0070f3",primaryForeground:"#ffffff",primaryHover:"#0056b3",textInputBorder:"#bbbbbb",textInputBorderFocus:"#666666",textInputLabel:"#666666",textInputDisabledBackground:"#f5f5f5",...a.colors}},A={...a,colors:{bg:"#fff",text:"#000",contentBg:"#ffffff",navBg:"#1f1f1f",navColor:"#ffffff",primary:"#0070f3",primaryForeground:"#ffffff",primaryHover:"#0056b3",textInputBorder:"#bbbbbb",textInputBorderFocus:"#666666",textInputLabel:"#666666",textInputDisabledBackground:"#f5f5f5",...a.colors}},N={viewMode:"canvas",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},K=[F({themes:{light:A,dark:$},defaultTheme:"light",Provider:_,GlobalStyles:H})];export{K as decorators,N as parameters};
