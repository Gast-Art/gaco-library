import{j as s}from"./jsx-runtime-CLpGMVip.js";import{R as l}from"./index-B-SYruCi.js";import{d as c}from"./styled-components.browser.esm-BfDsmhIA.js";var _={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y=l.createContext&&l.createContext(_),W=["attr","size","title"];function q(e,r){if(e==null)return{};var t=B(e,r),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function B(e,r){if(e==null)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},g.apply(this,arguments)}function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?x(Object(t),!0).forEach(function(n){F(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function F(e,r,t){return r=R(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function R(e){var r=M(e,"string");return typeof r=="symbol"?r:r+""}function M(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function D(e){return e&&e.map((r,t)=>l.createElement(r.tag,b({key:t},r.attr),D(r.child)))}function A(e){return r=>l.createElement(G,g({attr:b({},e.attr)},r),D(e.child))}function G(e){var r=t=>{var{attr:n,size:a,title:o}=e,h=q(e,W),u=a||t.size||"1em",i;return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),l.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,h,{className:i,style:b(b({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),e.children)};return y!==void 0?l.createElement(y.Consumer,null,t=>r(t)):r(_)}function K(e){return A({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(e)}const V=c.span`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.sizes.fonts.xxs};
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`,v=c.label`
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
`,H=c.div`
  position: relative;
  display: flex;
  align-items: center;
`,J=c.input`
  height: ${({theme:e})=>e.sizes.formControl};
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.textInputBorder};
  background-color: transparent;
  padding: 0.25rem;
  width: 100%;
  font-size: ${({theme:e})=>e.sizes.fonts.md};

  ${({$error:e,theme:r})=>e&&`padding-right: 2rem; border-bottom-color: ${r.colors.error};`}

  &:focus {
    ${({theme:e,$error:r})=>!r&&`border-bottom-color: ${e.colors.textInputBorderFocus};`}
    outline: none;
  }

  &:focus + ${v}, &:not(:placeholder-shown) + ${v} {
    top: -0.75rem;
    font-size: ${({theme:e})=>e.sizes.fonts.xs};
    color: ${({theme:e})=>e.colors.textInputLabel};
  }

  &:disabled {
    background-color: transparent;
    border-bottom-color: ${({theme:e})=>e.colors.textInputDisabledBackground};
    cursor: not-allowed;
  }
`,Q=c(K)`
  position: absolute;
  right: 0.75rem;
  color: ${({theme:e})=>e.colors.error};
  pointer-events: none;
`,U=c.div`
  position: relative;
`,L=({id:e,label:r,value:t,onChange:n,type:a="text",error:o,disabled:h,...u})=>s.jsxs(U,{children:[s.jsxs(H,{children:[s.jsx(J,{id:e,type:a,value:t,onChange:i=>n(i.target.value),disabled:h,"aria-invalid":!!o,placeholder:" ","aria-describedby":o?`${e}-error`:void 0,$error:!!o,...u}),r&&s.jsx(v,{htmlFor:e,children:r}),o&&s.jsx(Q,{})]}),o&&s.jsx(V,{id:`${e}-error`,children:o})]});L.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const k={title:"Atoms/TextInput",component:L,decorators:[e=>s.jsx("div",{style:{width:"320px"},children:s.jsx(e,{})})]},p={},m={args:{label:"Label"}},d={args:{label:"Number",type:"number"}},f={args:{label:"Error",error:"Error message"}};var O,j,w;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var P,E,$;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...($=(E=m.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var I,z,C;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Number',
    type: 'number'
  }
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var N,T,S;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Error',
    error: 'Error message'
  }
}`,...(S=(T=f.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const ee=["Default","WithLabel","TypeNumber","WithError"];export{p as Default,d as TypeNumber,f as WithError,m as WithLabel,ee as __namedExportsOrder,k as default};
