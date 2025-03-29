import{j as o}from"./jsx-runtime-CLpGMVip.js";import{d as y}from"./styled-components.browser.esm-BuGJ70dT.js";import{C as X,a as N}from"./Card-DBY7oVjy.js";import{c as K}from"./createLucideIcon-BOMFEwrg.js";import{r as i}from"./index-CR__hKHy.js";import{g as U,P as f,c as Y,e as R,b as m,d as _,S as Z,h as J,u as Q,a as v}from"./index-r34T6LtO.js";import{R as ee,h as te,u as oe,F as ne,D as re}from"./index-BzM1pMZn.js";import{M as ae}from"./index-D2e_E8nu.js";import{B as se}from"./Button-iLiNrdsq.js";import"./light-Bu9FOo5e.js";import"./LoadingOverlay-By8rFo9W.js";import"./Spinner-ClvM1fzh.js";import"./Typography-CBbdXGUB.js";import"./index-CtmzRm2p.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ce=K("X",ie);var le="Portal",A=i.forwardRef((e,n)=>{var l;const{container:r,...s}=e,[a,t]=i.useState(!1);U(()=>t(!0),[]);const c=r||a&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return c?ae.createPortal(o.jsx(f.div,{...s,ref:n}),c):null});A.displayName=le;var j="Dialog",[M,Be]=Y(j),[de,d]=M(j),w=e=>{const{__scopeDialog:n,children:r,open:s,defaultOpen:a,onOpenChange:t,modal:c=!0}=e,l=i.useRef(null),u=i.useRef(null),[g=!1,D]=Q({prop:s,defaultProp:a,onChange:t});return o.jsx(de,{scope:n,triggerRef:l,contentRef:u,contentId:v(),titleId:v(),descriptionId:v(),open:g,onOpenChange:D,onOpenToggle:i.useCallback(()=>D(V=>!V),[D]),modal:c,children:r})};w.displayName=j;var S="DialogTrigger",F=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(S,r),t=R(n,a.triggerRef);return o.jsx(f.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":P(a.open),...s,ref:t,onClick:m(e.onClick,a.onOpenToggle)})});F.displayName=S;var b="DialogPortal",[ue,k]=M(b,{forceMount:void 0}),W=e=>{const{__scopeDialog:n,forceMount:r,children:s,container:a}=e,t=d(b,n);return o.jsx(ue,{scope:n,forceMount:r,children:i.Children.map(s,c=>o.jsx(_,{present:r||t.open,children:o.jsx(A,{asChild:!0,container:a,children:c})}))})};W.displayName=b;var x="DialogOverlay",L=i.forwardRef((e,n)=>{const r=k(x,e.__scopeDialog),{forceMount:s=r.forceMount,...a}=e,t=d(x,e.__scopeDialog);return t.modal?o.jsx(_,{present:s||t.open,children:o.jsx(pe,{...a,ref:n})}):null});L.displayName=x;var pe=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(x,r);return o.jsx(ee,{as:Z,allowPinchZoom:!0,shards:[a.contentRef],children:o.jsx(f.div,{"data-state":P(a.open),...s,ref:n,style:{pointerEvents:"auto",...s.style}})})}),p="DialogContent",$=i.forwardRef((e,n)=>{const r=k(p,e.__scopeDialog),{forceMount:s=r.forceMount,...a}=e,t=d(p,e.__scopeDialog);return o.jsx(_,{present:s||t.open,children:t.modal?o.jsx(ge,{...a,ref:n}):o.jsx(fe,{...a,ref:n})})});$.displayName=p;var ge=i.forwardRef((e,n)=>{const r=d(p,e.__scopeDialog),s=i.useRef(null),a=R(n,r.contentRef,s);return i.useEffect(()=>{const t=s.current;if(t)return te(t)},[]),o.jsx(G,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:m(e.onCloseAutoFocus,t=>{var c;t.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:m(e.onPointerDownOutside,t=>{const c=t.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&t.preventDefault()}),onFocusOutside:m(e.onFocusOutside,t=>t.preventDefault())})}),fe=i.forwardRef((e,n)=>{const r=d(p,e.__scopeDialog),s=i.useRef(!1),a=i.useRef(!1);return o.jsx(G,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,t),t.defaultPrevented||(s.current||(l=r.triggerRef.current)==null||l.focus(),t.preventDefault()),s.current=!1,a.current=!1},onInteractOutside:t=>{var u,g;(u=e.onInteractOutside)==null||u.call(e,t),t.defaultPrevented||(s.current=!0,t.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const c=t.target;((g=r.triggerRef.current)==null?void 0:g.contains(c))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&a.current&&t.preventDefault()}})}),G=i.forwardRef((e,n)=>{const{__scopeDialog:r,trapFocus:s,onOpenAutoFocus:a,onCloseAutoFocus:t,...c}=e,l=d(p,r),u=i.useRef(null),g=R(n,u);return oe(),o.jsxs(o.Fragment,{children:[o.jsx(ne,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:a,onUnmountAutoFocus:t,children:o.jsx(re,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":P(l.open),...c,ref:g,onDismiss:()=>l.onOpenChange(!1)})}),o.jsxs(o.Fragment,{children:[o.jsx(De,{titleId:l.titleId}),o.jsx(Ce,{contentRef:u,descriptionId:l.descriptionId})]})]})}),E="DialogTitle",me=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(E,r);return o.jsx(f.h2,{id:a.titleId,...s,ref:n})});me.displayName=E;var q="DialogDescription",he=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(q,r);return o.jsx(f.p,{id:a.descriptionId,...s,ref:n})});he.displayName=q;var B="DialogClose",xe=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(B,r);return o.jsx(f.button,{type:"button",...s,ref:n,onClick:m(e.onClick,()=>a.onOpenChange(!1))})});xe.displayName=B;function P(e){return e?"open":"closed"}var z="DialogTitleWarning",[ze,H]=J(z,{contentName:p,titleName:E,docsSlug:"dialog"}),De=({titleId:e})=>{const n=H(z),r=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},ve="DialogDescriptionWarning",Ce=({contentRef:e,descriptionId:n})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${H(ve).contentName}}.`;return i.useEffect(()=>{var t;const a=(t=e.current)==null?void 0:t.getAttribute("aria-describedby");n&&a&&(document.getElementById(n)||console.warn(s))},[s,e,n]),null},ye=w,Re=F,_e=W,je=L,be=$;const Ee=y(je)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`,Pe=y(be)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: ${({theme:e})=>e.zIndicies.dialog};
  width: 90%;
  max-width: 30rem;
`,Ne=y.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  transition: opacity 0.2s ease-in-out;
`,C=({trigger:e,open:n,onOpenChange:r,title:s,content:a,children:t})=>o.jsxs(ye,{open:n,onOpenChange:r,children:[e&&o.jsx(Re,{asChild:!0,children:e}),o.jsxs(_e,{children:[o.jsx(Ee,{}),o.jsx(Pe,{children:o.jsxs(X,{children:[o.jsx(Ne,{onClick:()=>r(!1),children:o.jsx(ce,{})}),s&&o.jsx(N.Title,{children:s}),a&&o.jsx(N.Content,{children:a}),t]})})]})]});C.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const He={title:"Molecules/Dialog",component:C,render:e=>{const[n,r]=i.useState(!1);return o.jsx(C,{...e,open:n,onOpenChange:r,trigger:o.jsx(se,{children:"Open dialog"})})},decorators:[e=>o.jsx("div",{style:{width:"480px",height:"320px"},children:o.jsx(e,{})})]},h={args:{title:"Dialog Title",content:"This is a dialog description.",children:o.jsx("p",{children:"This is the content of the dialog."})}};var T,O,I;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Dialog Title',
    content: 'This is a dialog description.',
    children: <p>This is the content of the dialog.</p>
  }
}`,...(I=(O=h.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const Ve=["Default"];export{h as Default,Ve as __namedExportsOrder,He as default};
