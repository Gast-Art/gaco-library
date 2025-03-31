import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-CR__hKHy.js";import{d as _}from"./styled-components.browser.esm-BuGJ70dT.js";import{C as ee,a as R}from"./Card-CR7aoNWd.js";import{c as te}from"./createLucideIcon-BOMFEwrg.js";import{c as oe,e as O,P as x,b as h,d as N,S as ne,g as re,u as se,a as y}from"./index-5-dd_2Vi.js";import{R as ae,h as ie,u as ce,F as le,D as de,P as ue}from"./index-COno6yNW.js";import{B as v}from"./Button-iLiNrdsq.js";import"./light-Bu9FOo5e.js";import"./LoadingOverlay-By8rFo9W.js";import"./Spinner-ClvM1fzh.js";import"./Typography-CBbdXGUB.js";import"./ButtonGroup-Cs_83fjQ.js";import"./index-D2e_E8nu.js";import"./index-CtmzRm2p.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],pe=te("X",ge);var b="Dialog",[k,Ke]=oe(b),[fe,d]=k(b),W=e=>{const{__scopeDialog:n,children:r,open:a,defaultOpen:s,onOpenChange:o,modal:c=!0}=e,l=i.useRef(null),u=i.useRef(null),[g=!1,f]=se({prop:a,defaultProp:s,onChange:o});return t.jsx(fe,{scope:n,triggerRef:l,contentRef:u,contentId:y(),titleId:y(),descriptionId:y(),open:g,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(Q=>!Q),[f]),modal:c,children:r})};W.displayName=b;var B="DialogTrigger",$=i.forwardRef((e,n)=>{const{__scopeDialog:r,...a}=e,s=d(B,r),o=O(n,s.triggerRef);return t.jsx(x.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":I(s.open),...a,ref:o,onClick:h(e.onClick,s.onOpenToggle)})});$.displayName=B;var E="DialogPortal",[me,L]=k(E,{forceMount:void 0}),G=e=>{const{__scopeDialog:n,forceMount:r,children:a,container:s}=e,o=d(E,n);return t.jsx(me,{scope:n,forceMount:r,children:i.Children.map(a,c=>t.jsx(N,{present:r||o.open,children:t.jsx(ue,{asChild:!0,container:s,children:c})}))})};G.displayName=E;var C="DialogOverlay",q=i.forwardRef((e,n)=>{const r=L(C,e.__scopeDialog),{forceMount:a=r.forceMount,...s}=e,o=d(C,e.__scopeDialog);return o.modal?t.jsx(N,{present:a||o.open,children:t.jsx(he,{...s,ref:n})}):null});q.displayName=C;var he=i.forwardRef((e,n)=>{const{__scopeDialog:r,...a}=e,s=d(C,r);return t.jsx(ae,{as:ne,allowPinchZoom:!0,shards:[s.contentRef],children:t.jsx(x.div,{"data-state":I(s.open),...a,ref:n,style:{pointerEvents:"auto",...a.style}})})}),p="DialogContent",z=i.forwardRef((e,n)=>{const r=L(p,e.__scopeDialog),{forceMount:a=r.forceMount,...s}=e,o=d(p,e.__scopeDialog);return t.jsx(N,{present:a||o.open,children:o.modal?t.jsx(xe,{...s,ref:n}):t.jsx(De,{...s,ref:n})})});z.displayName=p;var xe=i.forwardRef((e,n)=>{const r=d(p,e.__scopeDialog),a=i.useRef(null),s=O(n,r.contentRef,a);return i.useEffect(()=>{const o=a.current;if(o)return ie(o)},[]),t.jsx(H,{...e,ref:s,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(e.onCloseAutoFocus,o=>{var c;o.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:h(e.onPointerDownOutside,o=>{const c=o.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&o.preventDefault()}),onFocusOutside:h(e.onFocusOutside,o=>o.preventDefault())})}),De=i.forwardRef((e,n)=>{const r=d(p,e.__scopeDialog),a=i.useRef(!1),s=i.useRef(!1);return t.jsx(H,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,o),o.defaultPrevented||(a.current||(l=r.triggerRef.current)==null||l.focus(),o.preventDefault()),a.current=!1,s.current=!1},onInteractOutside:o=>{var u,g;(u=e.onInteractOutside)==null||u.call(e,o),o.defaultPrevented||(a.current=!0,o.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const c=o.target;((g=r.triggerRef.current)==null?void 0:g.contains(c))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&s.current&&o.preventDefault()}})}),H=i.forwardRef((e,n)=>{const{__scopeDialog:r,trapFocus:a,onOpenAutoFocus:s,onCloseAutoFocus:o,...c}=e,l=d(p,r),u=i.useRef(null),g=O(n,u);return ce(),t.jsxs(t.Fragment,{children:[t.jsx(le,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:s,onUnmountAutoFocus:o,children:t.jsx(de,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":I(l.open),...c,ref:g,onDismiss:()=>l.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(ve,{titleId:l.titleId}),t.jsx(je,{contentRef:u,descriptionId:l.descriptionId})]})]})}),T="DialogTitle",V=i.forwardRef((e,n)=>{const{__scopeDialog:r,...a}=e,s=d(T,r);return t.jsx(x.h2,{id:s.titleId,...a,ref:n})});V.displayName=T;var X="DialogDescription",K=i.forwardRef((e,n)=>{const{__scopeDialog:r,...a}=e,s=d(X,r);return t.jsx(x.p,{id:s.descriptionId,...a,ref:n})});K.displayName=X;var U="DialogClose",Y=i.forwardRef((e,n)=>{const{__scopeDialog:r,...a}=e,s=d(U,r);return t.jsx(x.button,{type:"button",...a,ref:n,onClick:h(e.onClick,()=>s.onOpenChange(!1))})});Y.displayName=U;function I(e){return e?"open":"closed"}var Z="DialogTitleWarning",[Ue,J]=re(Z,{contentName:p,titleName:T,docsSlug:"dialog"}),ve=({titleId:e})=>{const n=J(Z),r=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},Ce="DialogDescriptionWarning",je=({contentRef:e,descriptionId:n})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${J(Ce).contentName}}.`;return i.useEffect(()=>{var o;const s=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");n&&s&&(document.getElementById(n)||console.warn(a))},[a,e,n]),null},Re=W,ye=$,_e=G,Oe=q,Ne=z,be=V,Ee=K,Te=Y;const Ie=_(Oe)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`,Pe=_(Ne)`
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
`,j=({trigger:e,open:n,onOpenChange:r,title:a,content:s,actions:o,children:c})=>{const[l,u]=i.useState(n),g=f=>{u(f),r==null||r(f)};return t.jsxs(Re,{open:n!==void 0?n:l,onOpenChange:g,children:[e&&t.jsx(ye,{asChild:!0,children:e}),t.jsxs(_e,{children:[t.jsx(Ie,{}),t.jsx(Pe,{children:t.jsxs(ee,{children:[t.jsx(Te,{asChild:!0,children:t.jsx(Ae,{children:t.jsx(pe,{})})}),a&&t.jsx(be,{asChild:!0,children:t.jsx(R.Title,{children:a})}),s&&t.jsx(Ee,{asChild:!0,children:t.jsxs(t.Fragment,{children:[t.jsx(R.Content,{children:s}),c,o&&t.jsx(R.Actions,{children:o})]})})]})})]})]})};j.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};const Ye={title:"Molecules/Dialog",component:j,render:e=>{const[n,r]=i.useState(!1);return t.jsx(j,{...e,open:n,onOpenChange:r,trigger:t.jsx(v,{children:"Open dialog"})})},decorators:[e=>t.jsx("div",{style:{width:"480px",height:"320px"},children:t.jsx(e,{})})]},m={args:{title:"Dialog Title",content:"This is dialog content.",children:t.jsx("p",{children:"This is the children of the dialog."}),actions:t.jsxs(t.Fragment,{children:[t.jsx(v,{children:"Confirm"}),t.jsx(v,{variant:"outline",children:"Cancel"})]})}},D={render:e=>t.jsx(j,{...e,trigger:t.jsx(v,{children:"Open dialog"})}),args:{...m.args}};var P,A,M;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Dialog Title',
    content: 'This is dialog content.',
    children: <p>This is the children of the dialog.</p>,
    actions: <>
        <Button>Confirm</Button>
        <Button variant="outline">Cancel</Button>
      </>
  }
}`,...(M=(A=m.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var S,w,F;D.parameters={...D.parameters,docs:{...(S=D.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    return <Dialog {...args} trigger={<Button>Open dialog</Button>} />;
  },
  args: {
    ...Default.args
  }
}`,...(F=(w=D.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const Ze=["Default","NoOutideState"];export{m as Default,D as NoOutideState,Ze as __namedExportsOrder,Ye as default};
