import{j as l}from"./jsx-runtime-CLpGMVip.js";import{R as s}from"./index-B-SYruCi.js";import{d as c}from"./styled-components.browser.esm-DDmRYb9g.js";var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=s.createContext&&s.createContext(v),y=["attr","size","title"];function x(e,t){if(e==null)return{};var r=O(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function O(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(n){j(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function j(e,t,r){return t=w(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){var t=P(e,"string");return typeof t=="symbol"?t:t+""}function P(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function h(e){return e&&e.map((t,r)=>s.createElement(t.tag,m({key:r},t.attr),h(t.child)))}function $(e){return t=>s.createElement(z,p({attr:m({},e.attr)},t),h(e.child))}function z(e){var t=r=>{var{attr:n,size:i,title:o}=e,d=x(e,y),u=i||r.size||"1em",a;return r.className&&(a=r.className),e.className&&(a=(a?a+" ":"")+e.className),s.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,d,{className:a,style:m(m({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&s.createElement("title",null,o),e.children)};return g!==void 0?s.createElement(g.Consumer,null,r=>t(r)):t(v)}function I(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(e)}const C=c.span`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.sizes.fonts.xxs};
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`,f=c.label`
  position: absolute;
  top: 0.5rem;
  left: 0.25rem;
  color: ${({theme:e})=>e.colors.textInputLabel};
  pointer-events: none;
  transition: all 0.2s ease;
`,E=c.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`,T=c.input`
  height: ${({theme:e})=>e.sizes.formControl};
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.textInputBorder};
  background-color: transparent;
  padding: 0.25rem;
  width: 100%;
  font-size: ${({theme:e})=>e.sizes.fonts.md};

  ${({$error:e,theme:t})=>e&&`padding-right: 2rem; border-bottom-color: ${t.colors.error};`}

  &:focus {
    ${({theme:e,$error:t})=>!t&&`border-bottom-color: ${e.colors.textInputBorderFocus};`}
    outline: none;
  }

  &:focus + ${f}, &:not(:placeholder-shown) + ${f} {
    top: -0.75rem;
    font-size: ${({theme:e})=>e.sizes.fonts.xs};
    color: ${({theme:e})=>e.colors.textInputLabel};
  }

  &:disabled {
    background-color: transparent;
    border-bottom-color: ${({theme:e})=>e.colors.textInputDisabledBackground};
    cursor: not-allowed;
  }
`,_=c(I)`
  position: absolute;
  right: 0.75rem;
  color: ${({theme:e})=>e.colors.error};
  pointer-events: none;
`,N=c.div`
  margin-bottom: 1.5rem;
  position: relative;
`,S=({id:e,label:t,value:r,onChange:n,type:i="text",error:o,disabled:d,...u})=>l.jsxs(N,{children:[l.jsxs(E,{children:[l.jsx(T,{id:e,type:i,value:r,onChange:a=>n(a.target.value),disabled:d,"aria-invalid":!!o,placeholder:" ","aria-describedby":o?`${e}-error`:void 0,$error:!!o,...u}),l.jsx(f,{htmlFor:e,children:t}),o&&l.jsx(_,{})]}),o&&l.jsx(C,{id:`${e}-error`,children:o})]});S.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};export{S as T};
