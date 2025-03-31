import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-CR__hKHy.js";import{d as _}from"./styled-components.browser.esm-BuGJ70dT.js";import{C as te,a as y}from"./Card-CR7aoNWd.js";import{c as oe}from"./createLucideIcon-BOMFEwrg.js";import{g as ne,P as m,c as re,e as N,b as x,d as O,S as ae,h as se,u as ie,a as R}from"./index-r34T6LtO.js";import{R as ce,h as le,u as de,F as ue,D as ge}from"./index-BzM1pMZn.js";import{M as pe}from"./index-D2e_E8nu.js";import{B as v}from"./Button-iLiNrdsq.js";import"./light-Bu9FOo5e.js";import"./LoadingOverlay-By8rFo9W.js";import"./Spinner-ClvM1fzh.js";import"./Typography-CBbdXGUB.js";import"./ButtonGroup-Cs_83fjQ.js";import"./index-CtmzRm2p.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],me=oe("X",fe);var he="Portal",k=i.forwardRef((e,n)=>{var l;const{container:r,...s}=e,[a,o]=i.useState(!1);ne(()=>o(!0),[]);const c=r||a&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return c?pe.createPortal(t.jsx(m.div,{...s,ref:n}),c):null});k.displayName=he;var b="Dialog",[W,Ze]=re(b),[xe,d]=W(b),B=e=>{const{__scopeDialog:n,children:r,open:s,defaultOpen:a,onOpenChange:o,modal:c=!0}=e,l=i.useRef(null),u=i.useRef(null),[g=!1,f]=ie({prop:s,defaultProp:a,onChange:o});return t.jsx(xe,{scope:n,triggerRef:l,contentRef:u,contentId:R(),titleId:R(),descriptionId:R(),open:g,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(ee=>!ee),[f]),modal:c,children:r})};B.displayName=b;var L="DialogTrigger",$=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(L,r),o=N(n,a.triggerRef);return t.jsx(m.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":P(a.open),...s,ref:o,onClick:x(e.onClick,a.onOpenToggle)})});$.displayName=L;var E="DialogPortal",[De,G]=W(E,{forceMount:void 0}),q=e=>{const{__scopeDialog:n,forceMount:r,children:s,container:a}=e,o=d(E,n);return t.jsx(De,{scope:n,forceMount:r,children:i.Children.map(s,c=>t.jsx(O,{present:r||o.open,children:t.jsx(k,{asChild:!0,container:a,children:c})}))})};q.displayName=E;var C="DialogOverlay",z=i.forwardRef((e,n)=>{const r=G(C,e.__scopeDialog),{forceMount:s=r.forceMount,...a}=e,o=d(C,e.__scopeDialog);return o.modal?t.jsx(O,{present:s||o.open,children:t.jsx(ve,{...a,ref:n})}):null});z.displayName=C;var ve=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(C,r);return t.jsx(ce,{as:ae,allowPinchZoom:!0,shards:[a.contentRef],children:t.jsx(m.div,{"data-state":P(a.open),...s,ref:n,style:{pointerEvents:"auto",...s.style}})})}),p="DialogContent",H=i.forwardRef((e,n)=>{const r=G(p,e.__scopeDialog),{forceMount:s=r.forceMount,...a}=e,o=d(p,e.__scopeDialog);return t.jsx(O,{present:s||o.open,children:o.modal?t.jsx(Ce,{...a,ref:n}):t.jsx(je,{...a,ref:n})})});H.displayName=p;var Ce=i.forwardRef((e,n)=>{const r=d(p,e.__scopeDialog),s=i.useRef(null),a=N(n,r.contentRef,s);return i.useEffect(()=>{const o=s.current;if(o)return le(o)},[]),t.jsx(V,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:x(e.onCloseAutoFocus,o=>{var c;o.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:x(e.onPointerDownOutside,o=>{const c=o.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&o.preventDefault()}),onFocusOutside:x(e.onFocusOutside,o=>o.preventDefault())})}),je=i.forwardRef((e,n)=>{const r=d(p,e.__scopeDialog),s=i.useRef(!1),a=i.useRef(!1);return t.jsx(V,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,o),o.defaultPrevented||(s.current||(l=r.triggerRef.current)==null||l.focus(),o.preventDefault()),s.current=!1,a.current=!1},onInteractOutside:o=>{var u,g;(u=e.onInteractOutside)==null||u.call(e,o),o.defaultPrevented||(s.current=!0,o.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const c=o.target;((g=r.triggerRef.current)==null?void 0:g.contains(c))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&a.current&&o.preventDefault()}})}),V=i.forwardRef((e,n)=>{const{__scopeDialog:r,trapFocus:s,onOpenAutoFocus:a,onCloseAutoFocus:o,...c}=e,l=d(p,r),u=i.useRef(null),g=N(n,u);return de(),t.jsxs(t.Fragment,{children:[t.jsx(ue,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:a,onUnmountAutoFocus:o,children:t.jsx(ge,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":P(l.open),...c,ref:g,onDismiss:()=>l.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(ye,{titleId:l.titleId}),t.jsx(_e,{contentRef:u,descriptionId:l.descriptionId})]})]})}),T="DialogTitle",X=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(T,r);return t.jsx(m.h2,{id:a.titleId,...s,ref:n})});X.displayName=T;var K="DialogDescription",U=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(K,r);return t.jsx(m.p,{id:a.descriptionId,...s,ref:n})});U.displayName=K;var Y="DialogClose",Z=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(Y,r);return t.jsx(m.button,{type:"button",...s,ref:n,onClick:x(e.onClick,()=>a.onOpenChange(!1))})});Z.displayName=Y;function P(e){return e?"open":"closed"}var J="DialogTitleWarning",[Je,Q]=se(J,{contentName:p,titleName:T,docsSlug:"dialog"}),ye=({titleId:e})=>{const n=Q(J),r=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},Re="DialogDescriptionWarning",_e=({contentRef:e,descriptionId:n})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Q(Re).contentName}}.`;return i.useEffect(()=>{var o;const a=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");n&&a&&(document.getElementById(n)||console.warn(s))},[s,e,n]),null},Ne=B,Oe=$,be=q,Ee=z,Te=H,Pe=X,Ie=U,Ae=Z;const Me=_(Ee)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`,Se=_(Te)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: ${({theme:e})=>e.zIndicies.dialog};
  width: 90%;
  max-width: 30rem;
`,we=_.button`
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
`,j=({trigger:e,open:n,onOpenChange:r,title:s,content:a,actions:o,children:c})=>{const[l,u]=i.useState(n),g=f=>{u(f),r==null||r(f)};return t.jsxs(Ne,{open:n!==void 0?n:l,onOpenChange:g,children:[e&&t.jsx(Oe,{asChild:!0,children:e}),t.jsxs(be,{children:[t.jsx(Me,{}),t.jsx(Se,{children:t.jsxs(te,{children:[t.jsx(Ae,{asChild:!0,children:t.jsx(we,{children:t.jsx(me,{})})}),s&&t.jsx(Pe,{asChild:!0,children:t.jsx(y.Title,{children:s})}),a&&t.jsx(Ie,{asChild:!0,children:t.jsxs(t.Fragment,{children:[t.jsx(y.Content,{children:a}),c,o&&t.jsx(y.Actions,{children:o})]})})]})})]})]})};j.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};const Qe={title:"Molecules/Dialog",component:j,render:e=>{const[n,r]=i.useState(!1);return t.jsx(j,{...e,open:n,onOpenChange:r,trigger:t.jsx(v,{children:"Open dialog"})})},decorators:[e=>t.jsx("div",{style:{width:"480px",height:"320px"},children:t.jsx(e,{})})]},h={args:{title:"Dialog Title",content:"This is dialog content.",children:t.jsx("p",{children:"This is the children of the dialog."}),actions:t.jsxs(t.Fragment,{children:[t.jsx(v,{children:"Confirm"}),t.jsx(v,{variant:"outline",children:"Cancel"})]})}},D={render:e=>t.jsx(j,{...e,trigger:t.jsx(v,{children:"Open dialog"})}),args:{...h.args}};var I,A,M;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Dialog Title',
    content: 'This is dialog content.',
    children: <p>This is the children of the dialog.</p>,
    actions: <>
        <Button>Confirm</Button>
        <Button variant="outline">Cancel</Button>
      </>
  }
}`,...(M=(A=h.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var S,w,F;D.parameters={...D.parameters,docs:{...(S=D.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    return <Dialog {...args} trigger={<Button>Open dialog</Button>} />;
  },
  args: {
    ...Default.args
  }
}`,...(F=(w=D.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const et=["Default","NoOutideState"];export{h as Default,D as NoOutideState,et as __namedExportsOrder,Qe as default};
