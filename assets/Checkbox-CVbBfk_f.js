import{j as r}from"./jsx-runtime-DPtPVAOg.js";import{d as i}from"./styled-components.browser.esm-DnH8uv-2.js";const s=i.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`,n=i.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,p=i.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: ${({$checked:e,theme:o})=>e?o.colors.primary:"#fff"};
  border: 1px solid ${({theme:e})=>e.colors.primary};
  border-radius: 2px;
  transition: all 150ms;
  margin-right: 0.5rem;
  position: relative;

  &:after {
    content: '';
    display: ${({$checked:e})=>e?"block":"none"};
    position: absolute;
    left: 5px;
    top: 1px;
    width: 0.25rem;
    height: 0.5rem;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`,a=({label:e,checked:o,...t})=>r.jsxs(s,{children:[r.jsx(n,{checked:o,...t}),r.jsx(p,{$checked:!!o}),e&&r.jsx("span",{children:e})]});a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""}}};export{a as C};
