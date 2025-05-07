import{j as r}from"./jsx-runtime-CLpGMVip.js";import{d as s}from"./styled-components.browser.esm-DnH8uv-2.js";import{C as d}from"./circle-alert-C-cAHhHG.js";const c=s.div`
  position: relative;
  padding-top: 0.75rem;
`,m=s.span`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.sizes.fonts.xxs};
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`,n=s.label`
  position: absolute;
  top: 0.5rem;
  left: 0;
  right: 0.25rem;
  color: ${({theme:e})=>e.colors.textInputLabel};
  pointer-events: none;
  transition: all 0.2s ease;

  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,u=s.div`
  position: relative;
  display: flex;
  align-items: center;
`,f=s.input`
  height: ${({theme:e})=>e.sizes.formControl};
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.textInputBorder};
  background-color: transparent;
  padding: 0.25rem 0;
  width: 100%;
  font-size: ${({theme:e})=>e.sizes.fonts.md};

  ${({$error:e,theme:o})=>e&&`padding-right: 2rem; border-bottom-color: ${o.colors.error};`}

  &:focus {
    ${({theme:e,$error:o})=>!o&&`border-bottom-color: ${e.colors.textInputBorderFocus};`}
    outline: none;
  }

  &:focus + ${n}, &:not(:placeholder-shown) + ${n} {
    top: -0.75rem;
    left: 0;
    font-size: ${({theme:e})=>e.sizes.fonts.xs};
    color: ${({theme:e})=>e.colors.textInputLabel};
  }

  &:disabled {
    background-color: transparent;
    border-bottom-color: ${({theme:e})=>e.colors.textInputDisabledBackground};
    cursor: not-allowed;
  }
`,x=s(d)`
  position: absolute;
  right: 0.5rem;
  color: ${({theme:e})=>e.colors.error};
  width: 1rem;
  pointer-events: none;
`,b=({className:e,id:o,label:i,type:l="text",error:t,disabled:a,...p})=>r.jsxs(c,{className:e,children:[r.jsxs(u,{children:[r.jsx(f,{id:o,type:l,disabled:a,"aria-invalid":!!t,placeholder:" ","aria-describedby":t?`${o}-error`:void 0,$error:!!t,...p}),i&&r.jsx(n,{htmlFor:o,children:i}),t&&r.jsx(x,{})]}),t&&r.jsx(m,{id:`${o}-error`,children:t})]});b.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""}},composes:["InputHTMLAttributes"]};export{b as T};
