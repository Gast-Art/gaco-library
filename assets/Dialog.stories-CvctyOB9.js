import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-CR__hKHy.js";import{B as C}from"./Button-rEU5PI71.js";import{S as re}from"./Select-D8RI3X4S.js";import"./CreatableSelect-BgPUkHKs.js";import"./MultiSelect-CT__ZKup.js";import{d as _}from"./styled-components.browser.esm-DnH8uv-2.js";import{C as ae,a as y}from"./Card-7Cj9cTki.js";import{c as se}from"./createLucideIcon-BOMFEwrg.js";import{c as ie,g as b,P as x,e as h,f as N,S as ce,h as le,b as de,d as O}from"./index-bxkApRut.js";import{R as ue,h as pe,u as ge,F as fe,a as me,P as he}from"./DropdownMenu-dSMxwB9U.js";import"./Spinner-xLrCEoRn.js";import"./react-select.esm-DTuKP_Ce.js";import"./styles-RwF-f0z0.js";import"./index-D2e_E8nu.js";import"./index-CtmzRm2p.js";import"./circle-alert-C-cAHhHG.js";import"./light-SvT5IF7k.js";import"./LoadingOverlay-C_HCXSLF.js";import"./Typography-CsgGy_ye.js";import"./ButtonGroup-Bo3_J-q_.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],De=se("X",xe);var E="Dialog",[L,at]=ie(E),[ve,d]=L(E),G=e=>{const{__scopeDialog:n,children:r,open:s,defaultOpen:a,onOpenChange:o,modal:c=!0}=e,l=i.useRef(null),u=i.useRef(null),[p=!1,f]=de({prop:s,defaultProp:a,onChange:o});return t.jsx(ve,{scope:n,triggerRef:l,contentRef:u,contentId:O(),titleId:O(),descriptionId:O(),open:p,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(ne=>!ne),[f]),modal:c,children:r})};G.displayName=E;var q="DialogTrigger",z=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(q,r),o=b(n,a.triggerRef);return t.jsx(x.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":P(a.open),...s,ref:o,onClick:h(e.onClick,a.onOpenToggle)})});z.displayName=q;var T="DialogPortal",[Ce,H]=L(T,{forceMount:void 0}),V=e=>{const{__scopeDialog:n,forceMount:r,children:s,container:a}=e,o=d(T,n);return t.jsx(Ce,{scope:n,forceMount:r,children:i.Children.map(s,c=>t.jsx(N,{present:r||o.open,children:t.jsx(he,{asChild:!0,container:a,children:c})}))})};V.displayName=T;var j="DialogOverlay",X=i.forwardRef((e,n)=>{const r=H(j,e.__scopeDialog),{forceMount:s=r.forceMount,...a}=e,o=d(j,e.__scopeDialog);return o.modal?t.jsx(N,{present:s||o.open,children:t.jsx(je,{...a,ref:n})}):null});X.displayName=j;var je=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(j,r);return t.jsx(ue,{as:ce,allowPinchZoom:!0,shards:[a.contentRef],children:t.jsx(x.div,{"data-state":P(a.open),...s,ref:n,style:{pointerEvents:"auto",...s.style}})})}),g="DialogContent",K=i.forwardRef((e,n)=>{const r=H(g,e.__scopeDialog),{forceMount:s=r.forceMount,...a}=e,o=d(g,e.__scopeDialog);return t.jsx(N,{present:s||o.open,children:o.modal?t.jsx(Re,{...a,ref:n}):t.jsx(ye,{...a,ref:n})})});K.displayName=g;var Re=i.forwardRef((e,n)=>{const r=d(g,e.__scopeDialog),s=i.useRef(null),a=b(n,r.contentRef,s);return i.useEffect(()=>{const o=s.current;if(o)return pe(o)},[]),t.jsx(U,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(e.onCloseAutoFocus,o=>{var c;o.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:h(e.onPointerDownOutside,o=>{const c=o.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&o.preventDefault()}),onFocusOutside:h(e.onFocusOutside,o=>o.preventDefault())})}),ye=i.forwardRef((e,n)=>{const r=d(g,e.__scopeDialog),s=i.useRef(!1),a=i.useRef(!1);return t.jsx(U,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,o),o.defaultPrevented||(s.current||(l=r.triggerRef.current)==null||l.focus(),o.preventDefault()),s.current=!1,a.current=!1},onInteractOutside:o=>{var u,p;(u=e.onInteractOutside)==null||u.call(e,o),o.defaultPrevented||(s.current=!0,o.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const c=o.target;((p=r.triggerRef.current)==null?void 0:p.contains(c))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&a.current&&o.preventDefault()}})}),U=i.forwardRef((e,n)=>{const{__scopeDialog:r,trapFocus:s,onOpenAutoFocus:a,onCloseAutoFocus:o,...c}=e,l=d(g,r),u=i.useRef(null),p=b(n,u);return ge(),t.jsxs(t.Fragment,{children:[t.jsx(fe,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:a,onUnmountAutoFocus:o,children:t.jsx(me,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":P(l.open),...c,ref:p,onDismiss:()=>l.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(Oe,{titleId:l.titleId}),t.jsx(be,{contentRef:u,descriptionId:l.descriptionId})]})]})}),I="DialogTitle",Y=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(I,r);return t.jsx(x.h2,{id:a.titleId,...s,ref:n})});Y.displayName=I;var Z="DialogDescription",J=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(Z,r);return t.jsx(x.p,{id:a.descriptionId,...s,ref:n})});J.displayName=Z;var Q="DialogClose",ee=i.forwardRef((e,n)=>{const{__scopeDialog:r,...s}=e,a=d(Q,r);return t.jsx(x.button,{type:"button",...s,ref:n,onClick:h(e.onClick,()=>a.onOpenChange(!1))})});ee.displayName=Q;function P(e){return e?"open":"closed"}var te="DialogTitleWarning",[st,oe]=le(te,{contentName:g,titleName:I,docsSlug:"dialog"}),Oe=({titleId:e})=>{const n=oe(te),r=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},_e="DialogDescriptionWarning",be=({contentRef:e,descriptionId:n})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${oe(_e).contentName}}.`;return i.useEffect(()=>{var o;const a=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");n&&a&&(document.getElementById(n)||console.warn(s))},[s,e,n]),null},Ne=G,Ee=z,Te=V,Ie=X,Pe=K,Se=Y,Ae=J,we=ee;const Me=_(Ie)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`,Fe=_(Pe)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: ${({theme:e})=>e.zIndicies.dialog};
  width: 90%;
  max-width: 30rem;
`,We=_.button`
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
`,R=({trigger:e,open:n,onOpenChange:r,title:s,content:a,actions:o,children:c})=>{const[l,u]=i.useState(n),p=f=>{u(f),r==null||r(f)};return t.jsxs(Ne,{open:n!==void 0?n:l,onOpenChange:p,children:[e&&t.jsx(Ee,{asChild:!0,children:e}),t.jsxs(Te,{children:[t.jsx(Me,{}),t.jsx(Fe,{children:t.jsxs(ae,{children:[t.jsx(we,{asChild:!0,children:t.jsx(We,{children:t.jsx(De,{})})}),s&&t.jsx(Se,{asChild:!0,children:t.jsx(y.Title,{children:s})}),a&&t.jsx(Ae,{asChild:!0,children:t.jsxs(t.Fragment,{children:[t.jsx(y.Content,{children:a}),c,o&&t.jsx(y.Actions,{children:o})]})})]})})]})]})};R.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};const it={title:"Molecules/Dialog",component:R,render:e=>{const[n,r]=i.useState(!1);return t.jsx(R,{...e,open:n,onOpenChange:r,trigger:t.jsx(C,{children:"Open dialog"})})},decorators:[e=>t.jsx("div",{style:{width:"480px",height:"320px"},children:t.jsx(e,{})})]},m={args:{title:"Dialog Title",content:"This is dialog content.",children:t.jsx("p",{children:"This is the children of the dialog."}),actions:t.jsxs(t.Fragment,{children:[t.jsx(C,{children:"Confirm"}),t.jsx(C,{variant:"outline",children:"Cancel"})]})}},D={render:e=>t.jsx(R,{...e,trigger:t.jsx(C,{children:"Open dialog"})}),args:{...m.args}},v={args:{...m.args,children:t.jsx(re,{options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],id:"select",onChange:()=>{}})}};var S,A,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Dialog Title',
    content: 'This is dialog content.',
    children: <p>This is the children of the dialog.</p>,
    actions: <>
        <Button>Confirm</Button>
        <Button variant="outline">Cancel</Button>
      </>
  }
}`,...(w=(A=m.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var M,F,W;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    return <Dialog {...args} trigger={<Button>Open dialog</Button>} />;
  },
  args: {
    ...Default.args
  }
}`,...(W=(F=D.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var k,B,$;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <Select options={[{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }]} id="select" onChange={() => {}} />
  }
}`,...($=(B=v.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const ct=["Default","NoOutideState","WithDropdown"];export{m as Default,D as NoOutideState,v as WithDropdown,ct as __namedExportsOrder,it as default};
