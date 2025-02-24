import{d as g}from"./index-ogSvIofg.js";import{R as t}from"./index-B-SYruCi.js";import{f as T,o as _}from"./styled-components.browser.esm-BfDsmhIA.js";const{useParameter:v,addons:I,useEffect:K,useMemo:R}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:O}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var B=Object.defineProperty,P=(e,r)=>{for(var o in r)B(e,o,{get:r[o],enumerable:!0})},a="themes",k=`storybook/${a}`,y="theme",p={},S={REGISTER_THEMES:`${k}/REGISTER_THEMES`},C={};P(C,{initializeThemeState:()=>b,pluckThemeFromContext:()=>h,useThemeParameters:()=>M});function h({globals:e}){return e[y]||""}function M(e){return O(g`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[a]??p:v(a,p)}function b(e,r){I.getChannel().emit(S.REGISTER_THEMES,{defaultTheme:r,themes:e})}var F=([e,r])=>r,H=({Provider:e,GlobalStyles:r,defaultTheme:o,themes:n={}})=>{let s=Object.keys(n),m=o||s[0];return b(s,m),(c,l)=>{let{themeOverride:i}=l.parameters[a]??{},d=h(l),x=R(()=>{let E=i||d||m,u=Object.entries(n);return u.length===1?F(u[0]):n[E]},[d,i]);return e?t.createElement(e,{theme:x},r&&t.createElement(r,null),c()):t.createElement(t.Fragment,null,r&&t.createElement(r,null),c())}};const A=T`
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

  * {
    box-sizing: border-box;
  }
`,f={sizes:{borderRadius:"0.5rem",formControl:"2rem",fonts:{xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",xxl:"1.5rem",xxxl:"2rem"}},shadows:{default:"0px 2px 4px rgba(0, 0, 0, 0.1)",card:"0px 4px 6px rgba(0, 0, 0, 0.1)"},colors:{error:"#ff0000",errorHover:"#ff6666",errorForeground:"#ffffff",success:"#00ff00",warning:"#ffcc00",anchorColor:"#0070f3",anchorColorHover:"#0366d6"}},D={...f,colors:{bg:"#000",text:"#fff",contentBg:"#ffffff",navBg:"#1f1f1f",navColor:"#ffffff",primary:"#0070f3",primaryForeground:"#ffffff",primaryHover:"#0056b3",textInputBorder:"#bbbbbb",textInputBorderFocus:"#666666",textInputLabel:"#666666",textInputDisabledBackground:"#f5f5f5",...f.colors}},L={...f,colors:{bg:"#fff",text:"#000",contentBg:"#ffffff",navBg:"#1f1f1f",navColor:"#ffffff",primary:"#0070f3",primaryForeground:"#ffffff",primaryHover:"#0056b3",textInputBorder:"#bbbbbb",textInputBorderFocus:"#666666",textInputLabel:"#666666",textInputDisabledBackground:"#f5f5f5",...f.colors}},w={viewMode:"canvas",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},z=[H({themes:{light:L,dark:D},defaultTheme:"light",Provider:_,GlobalStyles:A})];export{z as decorators,w as parameters};
