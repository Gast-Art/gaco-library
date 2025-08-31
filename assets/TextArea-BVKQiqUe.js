import{j as t}from"./jsx-runtime-DPtPVAOg.js";import{r as p}from"./index-CR__hKHy.js";import{d as s}from"./styled-components.browser.esm-DnH8uv-2.js";import{C as m}from"./circle-alert-C-cAHhHG.js";const x=s.div`
  position: relative;
  padding-top: 0.75rem;
`,f=s.span`
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
`,b=s.div`
  position: relative;
  display: flex;
  align-items: center;
`,u=s.textarea`
  min-height: 4rem;
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.textInputBorder};
  background-color: transparent;
  padding: 0.25rem;
  width: 100%;
  font-size: ${({theme:e})=>e.sizes.fonts.md};
  font-family: ${({theme:e})=>e.fonts.body};
  resize: vertical;

  ${({$error:e,theme:r})=>e&&`padding-right: 2rem; border-bottom-color: ${r.colors.error};`}

  &:focus {
    ${({theme:e,$error:r})=>!r&&`border-bottom-color: ${e.colors.textInputBorderFocus};`}
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
`,g=s(m)`
  width: 0.875rem;
  height: 0.875rem;
  position: absolute;
  right: 0.5rem;
  color: ${({theme:e})=>e.colors.error};
  pointer-events: none;
`,a=p.forwardRef(({className:e,id:r,label:i,error:o,disabled:l,...d},c)=>t.jsxs(x,{className:e,children:[t.jsxs(b,{children:[t.jsx(u,{id:r,disabled:l,"aria-invalid":!!o,placeholder:" ","aria-describedby":o?`${r}-error`:void 0,$error:!!o,ref:c,...d}),i&&t.jsx(n,{htmlFor:r,children:i}),o&&t.jsx(g,{})]}),o&&t.jsx(f,{id:`${r}-error`,children:o})]}));a.displayName="TextArea";a.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""}},composes:["TextareaHTMLAttributes"]};export{a as T};
