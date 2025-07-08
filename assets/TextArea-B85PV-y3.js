import{j as t}from"./jsx-runtime-CLpGMVip.js";import{d as s}from"./styled-components.browser.esm-C1W4bV5D.js";import{C as d}from"./circle-alert-i5ESE61K.js";const c=s.div`
  position: relative;
  padding-top: 0.75rem;
`,p=s.span`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.sizes.fonts.xxs};
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`,n=s.label`
  position: absolute;
  top: 0.5rem;
  left: 0.25rem;
  right: 0.25rem;
  color: ${({theme:e})=>e.colors.textInputLabel};
  pointer-events: none;
  transition: all 0.2s ease;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,m=s.div`
  position: relative;
  display: flex;
  align-items: center;
`,x=s.textarea`
  min-height: 4rem;
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.textInputBorder};
  background-color: transparent;
  padding: 0.25rem;
  width: 100%;
  font-size: ${({theme:e})=>e.sizes.fonts.md};
  font-family: ${({theme:e})=>e.fonts.body};
  resize: vertical;

  ${({$error:e,theme:o})=>e&&`padding-right: 2rem; border-bottom-color: ${o.colors.error};`}

  &:focus {
    ${({theme:e,$error:o})=>!o&&`border-bottom-color: ${e.colors.textInputBorderFocus};`}
    outline: none;
  }

  &:focus + ${n}, &:not(:placeholder-shown) + ${n} {
    top: -0.75rem;
    font-size: ${({theme:e})=>e.sizes.fonts.xs};
    color: ${({theme:e})=>e.colors.textInputLabel};
  }

  &:disabled {
    background-color: transparent;
    border-bottom-color: ${({theme:e})=>e.colors.textInputDisabledBackground};
    cursor: not-allowed;
  }
`,f=s(d)`
  position: absolute;
  right: 0.5rem;
  color: ${({theme:e})=>e.colors.error};
  pointer-events: none;
`,b=({className:e,id:o,label:i,error:r,disabled:a,...l})=>t.jsxs(c,{className:e,children:[t.jsxs(m,{children:[t.jsx(x,{id:o,disabled:a,"aria-invalid":!!r,placeholder:" ","aria-describedby":r?`${o}-error`:void 0,$error:!!r,...l}),i&&t.jsx(n,{htmlFor:o,children:i}),r&&t.jsx(f,{})]}),r&&t.jsx(p,{id:`${o}-error`,children:r})]});b.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""}},composes:["TextareaHTMLAttributes"]};export{b as T};
