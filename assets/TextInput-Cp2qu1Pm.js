import{j as c}from"./jsx-runtime-CLpGMVip.js";import{d as u}from"./styled-components.browser.esm-DDmRYb9g.js";import{R as l}from"./index-B-SYruCi.js";var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=l.createContext&&l.createContext(b),h=["attr","size","title"];function O(e,t){if(e==null)return{};var r=j(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function j(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(n){x(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function x(e,t,r){return t=w(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){var t=P(e,"string");return typeof t=="symbol"?t:t+""}function P(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function v(e){return e&&e.map((t,r)=>l.createElement(t.tag,p({key:r},t.attr),v(t.child)))}function z(e){return t=>l.createElement(E,m({attr:p({},e.attr)},t),v(e.child))}function E(e){var t=r=>{var{attr:n,size:i,title:a}=e,o=O(e,h),d=i||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),l.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,o,{className:s,style:p(p({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&l.createElement("title",null,a),e.children)};return f!==void 0?l.createElement(f.Consumer,null,r=>t(r)):t(b)}function C(e){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(e)}const I=u.span`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.sizes.fonts.sm};
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
`,T=u.label`
  font-size: ${({theme:e})=>e.sizes.fonts.sm};
  font-weight: bold;
  margin-bottom: 0.25rem;
  display: block;
`,$=u.div`
  position: relative;
  display: flex;
  align-items: center;
`,_=u.input`
  height: 2rem;
  border: 1px solid ${({theme:e})=>e.colors.textInputBorder};
  border-radius: ${({theme:e})=>e.sizes.borderRadius};
  padding: 0.5rem 1rem;
  width: 100%;

  ${({$error:e})=>e&&"padding-right: 2rem;"}

  &:focus {
    border-color: ${({theme:e})=>e.colors.primary};
    outline: none;
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.textInputDisabledBackground};
    cursor: not-allowed;
  }
`,N=u(C)`
  position: absolute;
  right: 0.75rem;
  color: ${({theme:e})=>e.colors.error};
  pointer-events: none;
`,S=u.div`
  margin-bottom: 1.5rem;
`,q=({id:e,label:t,value:r,onChange:n,placeholder:i,type:a="text",error:o,disabled:d,...s})=>c.jsxs(S,{children:[c.jsx(T,{htmlFor:e,children:t}),c.jsxs($,{children:[c.jsx(_,{id:e,type:a,placeholder:i,value:r,onChange:y=>n(y.target.value),disabled:d,"aria-invalid":!!o,"aria-describedby":o?`${e}-error`:void 0,$error:!!o,...s}),o&&c.jsx(N,{})]}),o&&c.jsx(I,{id:`${e}-error`,children:o})]});q.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};export{q as T};
