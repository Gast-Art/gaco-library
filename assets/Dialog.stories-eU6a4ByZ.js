import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-CR__hKHy.js";import{d as _}from"./styled-components.browser.esm-BuGJ70dT.js";import{C as J,a as y}from"./Card-CR7aoNWd.js";import{c as Q}from"./createLucideIcon-BOMFEwrg.js";import{g as ee,P as m,c as te,e as j,b as x,d as N,S as oe,h as ne,u as re,a as R}from"./index-r34T6LtO.js";import{R as ae,h as se,u as ie,F as ce,D as le}from"./index-BzM1pMZn.js";import{M as de}from"./index-D2e_E8nu.js";import{B as F}from"./Button-iLiNrdsq.js";import"./light-Bu9FOo5e.js";import"./LoadingOverlay-By8rFo9W.js";import"./Spinner-ClvM1fzh.js";import"./Typography-CBbdXGUB.js";import"./ButtonGroup-Cs_83fjQ.js";import"./index-CtmzRm2p.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ge=Q("X",ue);var pe="Portal",k=i.forwardRef((e,n)=>{var l;const{container:r,...s}=e,[a,o]=i.useState(!1);ee(()=>o(!0),[]);const c=r||a&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return c?de.createPortal(t.jsx(m.div,{...s,ref:n}),c):null});k.displayName=pe;var O="Dialog",[W,Ke]=te(O),[fe,d]=W(O),L=e=>{const{__scopeDialog:n,children:r,open:s,defaultOpen:a,onOpenChange:o,modal:c=!0}=e,l=i.useRef(null),u=i.useRef(null),[g=!1,f]=re({prop:s,defaultProp:a,onChange:o});return t.jsx(fe,{scope:n,triggerRef:l,contentRef:u,contentId:R(),titleId:R(),descriptionId:R(),open:g,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(Z=>!Z),[f]),modal:c,children:r})};L.displayName=O;var $="DialogTrigger",B=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d($,r),o=j(n,a.triggerRef);return t.jsx(m.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":P(a.open),...s,ref:o,onClick:x(e.onClick,a.onOpenToggle)})});B.displayName=$;var b="DialogPortal",[me,G]=W(b,{forceMount:void 0}),q=e=>{const{__scopeDialog:n,forceMount:r,children:s,container:a}=e,o=d(b,n);return t.jsx(me,{scope:n,forceMount:r,children:i.Children.map(s,c=>t.jsx(N,{present:r||o.open,children:t.jsx(k,{asChild:!0,container:a,children:c})}))})};q.displayName=b;var v="DialogOverlay",z=i.forwardRef((e,n)=>{const r=G(v,e.__scopeDialog),{forceMount:s=r.forceMount,...a}=e,o=d(v,e.__scopeDialog);return o.modal?t.jsx(N,{present:s||o.open,children:t.jsx(he,{...a,ref:n})}):null});z.displayName=v;var he=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(v,r);return t.jsx(ae,{as:oe,allowPinchZoom:!0,shards:[a.contentRef],children:t.jsx(m.div,{"data-state":P(a.open),...s,ref:n,style:{pointerEvents:"auto",...s.style}})})}),p="DialogContent",H=i.forwardRef((e,n)=>{const r=G(p,e.__scopeDialog),{forceMount:s=r.forceMount,...a}=e,o=d(p,e.__scopeDialog);return t.jsx(N,{present:s||o.open,children:o.modal?t.jsx(xe,{...a,ref:n}):t.jsx(De,{...a,ref:n})})});H.displayName=p;var xe=i.forwardRef((e,n)=>{const r=d(p,e.__scopeDialog),s=i.useRef(null),a=j(n,r.contentRef,s);return i.useEffect(()=>{const o=s.current;if(o)return se(o)},[]),t.jsx(V,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:x(e.onCloseAutoFocus,o=>{var c;o.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:x(e.onPointerDownOutside,o=>{const c=o.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&o.preventDefault()}),onFocusOutside:x(e.onFocusOutside,o=>o.preventDefault())})}),De=i.forwardRef((e,n)=>{const r=d(p,e.__scopeDialog),s=i.useRef(!1),a=i.useRef(!1);return t.jsx(V,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,o),o.defaultPrevented||(s.current||(l=r.triggerRef.current)==null||l.focus(),o.preventDefault()),s.current=!1,a.current=!1},onInteractOutside:o=>{var u,g;(u=e.onInteractOutside)==null||u.call(e,o),o.defaultPrevented||(s.current=!0,o.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const c=o.target;((g=r.triggerRef.current)==null?void 0:g.contains(c))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&a.current&&o.preventDefault()}})}),V=i.forwardRef((e,n)=>{const{__scopeDialog:r,trapFocus:s,onOpenAutoFocus:a,onCloseAutoFocus:o,...c}=e,l=d(p,r),u=i.useRef(null),g=j(n,u);return ie(),t.jsxs(t.Fragment,{children:[t.jsx(ce,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:a,onUnmountAutoFocus:o,children:t.jsx(le,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":P(l.open),...c,ref:g,onDismiss:()=>l.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(Re,{titleId:l.titleId}),t.jsx(je,{contentRef:u,descriptionId:l.descriptionId})]})]})}),E="DialogTitle",ve=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(E,r);return t.jsx(m.h2,{id:a.titleId,...s,ref:n})});ve.displayName=E;var X="DialogDescription",Ce=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(X,r);return t.jsx(m.p,{id:a.descriptionId,...s,ref:n})});Ce.displayName=X;var K="DialogClose",ye=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(K,r);return t.jsx(m.button,{type:"button",...s,ref:n,onClick:x(e.onClick,()=>a.onOpenChange(!1))})});ye.displayName=K;function P(e){return e?"open":"closed"}var U="DialogTitleWarning",[Ue,Y]=ne(U,{contentName:p,titleName:E,docsSlug:"dialog"}),Re=({titleId:e})=>{const n=Y(U),r=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},_e="DialogDescriptionWarning",je=({contentRef:e,descriptionId:n})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Y(_e).contentName}}.`;return i.useEffect(()=>{var o;const a=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");n&&a&&(document.getElementById(n)||console.warn(s))},[s,e,n]),null},Ne=L,Oe=B,be=q,Ee=z,Pe=H;const Te=_(Ee)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`,Ie=_(Pe)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: ${({theme:e})=>e.zIndicies.dialog};
  width: 90%;
  max-width: 30rem;
`,Ae=_.button`
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
`,C=({trigger:e,open:n,onOpenChange:r,title:s,content:a,actions:o,children:c})=>{const[l,u]=i.useState(n),g=f=>{u(f),r==null||r(f)};return t.jsxs(Ne,{open:n!==void 0?n:l,onOpenChange:g,children:[e&&t.jsx(Oe,{asChild:!0,children:e}),t.jsxs(be,{children:[t.jsx(Te,{}),t.jsx(Ie,{children:t.jsxs(J,{children:[t.jsx(Ae,{onClick:()=>g(!1),children:t.jsx(ge,{})}),s&&t.jsx(y.Title,{children:s}),a&&t.jsx(y.Content,{children:a}),o&&t.jsx(y.Actions,{children:o}),c]})})]})]})};C.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};const Ye={title:"Molecules/Dialog",component:C,render:e=>{const[n,r]=i.useState(!1);return t.jsx(C,{...e,open:n,onOpenChange:r,trigger:t.jsx(F,{children:"Open dialog"})})},decorators:[e=>t.jsx("div",{style:{width:"480px",height:"320px"},children:t.jsx(e,{})})]},h={args:{title:"Dialog Title",content:"This is a dialog description.",children:t.jsx("p",{children:"This is the content of the dialog."})}},D={render:e=>t.jsx(C,{...e,trigger:t.jsx(F,{children:"Open dialog"})}),args:{...h.args}};var T,I,A;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Dialog Title',
    content: 'This is a dialog description.',
    children: <p>This is the content of the dialog.</p>
  }
}`,...(A=(I=h.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var M,S,w;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    return <Dialog {...args} trigger={<Button>Open dialog</Button>} />;
  },
  args: {
    ...Default.args
  }
}`,...(w=(S=D.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const Ze=["Default","NoOutideState"];export{h as Default,D as NoOutideState,Ze as __namedExportsOrder,Ye as default};
