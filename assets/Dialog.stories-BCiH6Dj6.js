import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-CR__hKHy.js";import{d as R}from"./styled-components.browser.esm-BuGJ70dT.js";import{C as J,a as P}from"./Card-DBY7oVjy.js";import{c as Q}from"./createLucideIcon-BOMFEwrg.js";import{g as ee,P as f,c as te,e as _,b as h,d as j,S as oe,h as ne,u as re,a as y}from"./index-r34T6LtO.js";import{R as ae,h as se,u as ie,F as ce,D as le}from"./index-BzM1pMZn.js";import{M as de}from"./index-D2e_E8nu.js";import{B as F}from"./Button-iLiNrdsq.js";import"./light-Bu9FOo5e.js";import"./LoadingOverlay-By8rFo9W.js";import"./Spinner-ClvM1fzh.js";import"./Typography-CBbdXGUB.js";import"./index-CtmzRm2p.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ge=Q("X",ue);var pe="Portal",k=i.forwardRef((e,o)=>{var l;const{container:r,...s}=e,[a,n]=i.useState(!1);ee(()=>n(!0),[]);const c=r||a&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return c?de.createPortal(t.jsx(f.div,{...s,ref:o}),c):null});k.displayName=pe;var O="Dialog",[W,Xe]=te(O),[fe,u]=W(O),L=e=>{const{__scopeDialog:o,children:r,open:s,defaultOpen:a,onOpenChange:n,modal:c=!0}=e,l=i.useRef(null),d=i.useRef(null),[g=!1,C]=re({prop:s,defaultProp:a,onChange:n});return t.jsx(fe,{scope:o,triggerRef:l,contentRef:d,contentId:y(),titleId:y(),descriptionId:y(),open:g,onOpenChange:C,onOpenToggle:i.useCallback(()=>C(Z=>!Z),[C]),modal:c,children:r})};L.displayName=O;var $="DialogTrigger",B=i.forwardRef((e,o)=>{const{__scopeDialog:r,...s}=e,a=u($,r),n=_(o,a.triggerRef);return t.jsx(f.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":E(a.open),...s,ref:n,onClick:h(e.onClick,a.onOpenToggle)})});B.displayName=$;var N="DialogPortal",[me,G]=W(N,{forceMount:void 0}),q=e=>{const{__scopeDialog:o,forceMount:r,children:s,container:a}=e,n=u(N,o);return t.jsx(me,{scope:o,forceMount:r,children:i.Children.map(s,c=>t.jsx(j,{present:r||n.open,children:t.jsx(k,{asChild:!0,container:a,children:c})}))})};q.displayName=N;var D="DialogOverlay",z=i.forwardRef((e,o)=>{const r=G(D,e.__scopeDialog),{forceMount:s=r.forceMount,...a}=e,n=u(D,e.__scopeDialog);return n.modal?t.jsx(j,{present:s||n.open,children:t.jsx(he,{...a,ref:o})}):null});z.displayName=D;var he=i.forwardRef((e,o)=>{const{__scopeDialog:r,...s}=e,a=u(D,r);return t.jsx(ae,{as:oe,allowPinchZoom:!0,shards:[a.contentRef],children:t.jsx(f.div,{"data-state":E(a.open),...s,ref:o,style:{pointerEvents:"auto",...s.style}})})}),p="DialogContent",H=i.forwardRef((e,o)=>{const r=G(p,e.__scopeDialog),{forceMount:s=r.forceMount,...a}=e,n=u(p,e.__scopeDialog);return t.jsx(j,{present:s||n.open,children:n.modal?t.jsx(xe,{...a,ref:o}):t.jsx(De,{...a,ref:o})})});H.displayName=p;var xe=i.forwardRef((e,o)=>{const r=u(p,e.__scopeDialog),s=i.useRef(null),a=_(o,r.contentRef,s);return i.useEffect(()=>{const n=s.current;if(n)return se(n)},[]),t.jsx(V,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(e.onCloseAutoFocus,n=>{var c;n.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:h(e.onPointerDownOutside,n=>{const c=n.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&n.preventDefault()}),onFocusOutside:h(e.onFocusOutside,n=>n.preventDefault())})}),De=i.forwardRef((e,o)=>{const r=u(p,e.__scopeDialog),s=i.useRef(!1),a=i.useRef(!1);return t.jsx(V,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,n),n.defaultPrevented||(s.current||(l=r.triggerRef.current)==null||l.focus(),n.preventDefault()),s.current=!1,a.current=!1},onInteractOutside:n=>{var d,g;(d=e.onInteractOutside)==null||d.call(e,n),n.defaultPrevented||(s.current=!0,n.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const c=n.target;((g=r.triggerRef.current)==null?void 0:g.contains(c))&&n.preventDefault(),n.detail.originalEvent.type==="focusin"&&a.current&&n.preventDefault()}})}),V=i.forwardRef((e,o)=>{const{__scopeDialog:r,trapFocus:s,onOpenAutoFocus:a,onCloseAutoFocus:n,...c}=e,l=u(p,r),d=i.useRef(null),g=_(o,d);return ie(),t.jsxs(t.Fragment,{children:[t.jsx(ce,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:a,onUnmountAutoFocus:n,children:t.jsx(le,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":E(l.open),...c,ref:g,onDismiss:()=>l.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(Re,{titleId:l.titleId}),t.jsx(je,{contentRef:d,descriptionId:l.descriptionId})]})]})}),b="DialogTitle",ve=i.forwardRef((e,o)=>{const{__scopeDialog:r,...s}=e,a=u(b,r);return t.jsx(f.h2,{id:a.titleId,...s,ref:o})});ve.displayName=b;var X="DialogDescription",Ce=i.forwardRef((e,o)=>{const{__scopeDialog:r,...s}=e,a=u(X,r);return t.jsx(f.p,{id:a.descriptionId,...s,ref:o})});Ce.displayName=X;var K="DialogClose",ye=i.forwardRef((e,o)=>{const{__scopeDialog:r,...s}=e,a=u(K,r);return t.jsx(f.button,{type:"button",...s,ref:o,onClick:h(e.onClick,()=>a.onOpenChange(!1))})});ye.displayName=K;function E(e){return e?"open":"closed"}var U="DialogTitleWarning",[Ke,Y]=ne(U,{contentName:p,titleName:b,docsSlug:"dialog"}),Re=({titleId:e})=>{const o=Y(U),r=`\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},_e="DialogDescriptionWarning",je=({contentRef:e,descriptionId:o})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Y(_e).contentName}}.`;return i.useEffect(()=>{var n;const a=(n=e.current)==null?void 0:n.getAttribute("aria-describedby");o&&a&&(document.getElementById(o)||console.warn(s))},[s,e,o]),null},Oe=L,Ne=B,be=q,Ee=z,Pe=H;const Te=R(Ee)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`,Ie=R(Pe)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: ${({theme:e})=>e.zIndicies.dialog};
  width: 90%;
  max-width: 30rem;
`,Ae=R.button`
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
`,v=({trigger:e,open:o,onOpenChange:r,title:s,content:a,children:n})=>{const[c,l]=i.useState(o),d=g=>{l(g),r==null||r(g)};return t.jsxs(Oe,{open:typeof o!==void 0?o:c,onOpenChange:d,children:[e&&t.jsx(Ne,{asChild:!0,children:e}),t.jsxs(be,{children:[t.jsx(Te,{}),t.jsx(Ie,{children:t.jsxs(J,{children:[t.jsx(Ae,{onClick:()=>d(!1),children:t.jsx(ge,{})}),s&&t.jsx(P.Title,{children:s}),a&&t.jsx(P.Content,{children:a}),n]})})]})]})};v.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};const Ue={title:"Molecules/Dialog",component:v,render:e=>{const[o,r]=i.useState(!1);return t.jsx(v,{...e,open:o,onOpenChange:r,trigger:t.jsx(F,{children:"Open dialog"})})},decorators:[e=>t.jsx("div",{style:{width:"480px",height:"320px"},children:t.jsx(e,{})})]},m={args:{title:"Dialog Title",content:"This is a dialog description.",children:t.jsx("p",{children:"This is the content of the dialog."})}},x={render:e=>t.jsx(v,{...e,trigger:t.jsx(F,{children:"Open dialog"})}),args:{...m.args}};var T,I,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Dialog Title',
    content: 'This is a dialog description.',
    children: <p>This is the content of the dialog.</p>
  }
}`,...(A=(I=m.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var M,S,w;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    return <Dialog {...args} trigger={<Button>Open dialog</Button>} />;
  },
  args: {
    ...Default.args
  }
}`,...(w=(S=x.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const Ye=["Default","NoOutideState"];export{m as Default,x as NoOutideState,Ye as __namedExportsOrder,Ue as default};
