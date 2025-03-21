import{j as s}from"./jsx-runtime-CLpGMVip.js";import{R as c}from"./index-CR__hKHy.js";import{d as u}from"./styled-components.browser.esm-BuGJ70dT.js";var _={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y=c.createContext&&c.createContext(_),q=["attr","size","title"];function B(e,r){if(e==null)return{};var t=F(e,r),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function F(e,r){if(e==null)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},b.apply(this,arguments)}function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?x(Object(t),!0).forEach(function(n){R(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function R(e,r,t){return r=M(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function M(e){var r=A(e,"string");return typeof r=="symbol"?r:r+""}function A(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function D(e){return e&&e.map((r,t)=>c.createElement(r.tag,h({key:t},r.attr),D(r.child)))}function G(e){return r=>c.createElement(K,b({attr:h({},e.attr)},r),D(e.child))}function K(e){var r=t=>{var{attr:n,size:o,title:i}=e,a=B(e,q),p=o||t.size||"1em",l;return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),c.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,a,{className:l,style:h(h({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),i&&c.createElement("title",null,i),e.children)};return y!==void 0?c.createElement(y.Consumer,null,t=>r(t)):r(_)}function V(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(e)}const H=u.div`
  position: relative;
  padding-top: 0.75rem;
`,J=u.span`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.sizes.fonts.xxs};
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`,v=u.label`
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
`,Q=u.div`
  position: relative;
  display: flex;
  align-items: center;
`,U=u.input`
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
`,X=u(V)`
  position: absolute;
  right: 0.75rem;
  color: ${({theme:e})=>e.colors.error};
  pointer-events: none;
`,L=({className:e,id:r,label:t,value:n,onChange:o,type:i="text",error:a,disabled:p,...l})=>s.jsxs(H,{className:e,children:[s.jsxs(Q,{children:[s.jsx(U,{id:r,type:i,value:n,onChange:W=>o(W.target.value),disabled:p,"aria-invalid":!!a,placeholder:" ","aria-describedby":a?`${r}-error`:void 0,$error:!!a,...l}),t&&s.jsx(v,{htmlFor:r,children:t}),a&&s.jsx(X,{})]}),a&&s.jsx(J,{id:`${r}-error`,children:a})]});L.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const ee={title:"Atoms/TextInput",component:L,decorators:[e=>s.jsx("div",{style:{width:"320px"},children:s.jsx(e,{})})]},m={},d={args:{label:"Label"}},f={args:{label:"Number",type:"number"}},g={args:{label:"Error",error:"Error message"}};var O,j,w;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var P,E,$;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...($=(E=d.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var I,z,C;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Number',
    type: 'number'
  }
}`,...(C=(z=f.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var N,T,S;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Error',
    error: 'Error message'
  }
}`,...(S=(T=g.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const re=["Default","WithLabel","TypeNumber","WithError"];export{m as Default,f as TypeNumber,g as WithError,d as WithLabel,re as __namedExportsOrder,ee as default};
