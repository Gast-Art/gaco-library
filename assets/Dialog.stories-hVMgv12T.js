import{j as o}from"./jsx-runtime-DPtPVAOg.js";import{r as s}from"./index-CR__hKHy.js";import{B as v}from"./Button-D-arCGtF.js";import{R as le,h as ce,u as de,F as pe,a as ue,P as ge,D as fe}from"./DropdownMenu-7ceIgupj.js";import{S as me}from"./Select-CGXq-EO-.js";import"./CreatableSelect-DGf84YSW.js";import"./MultiSelect-fCDmlut7.js";import{d as y}from"./styled-components.browser.esm-DnH8uv-2.js";import{C as he,a as R}from"./Card-BnGRrTyE.js";import{c as ve}from"./createLucideIcon-BOMFEwrg.js";import{d as h,P as N,a as xe,b as _}from"./index-Ccna2XRG.js";import{c as Oe,b as E,P as O,S as De,d as be}from"./index-D1GhS0qO.js";import"./Spinner-BGsYflau.js";import"./index-D2e_E8nu.js";import"./index-CtmzRm2p.js";import"./react-select.esm-CFY3iZcI.js";import"./styles-D9iy3Ker.js";import"./circle-alert-C-cAHhHG.js";import"./light-DG7axscF.js";import"./media-BIK856jo.js";import"./ButtonGroup-Bo3_J-q_.js";import"./LoadingOverlay-BbpqPbfZ.js";import"./info-BBH6Osln.js";import"./Typography-CraxGhaZ.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],je=ve("X",Ce);var T="Dialog",[H,mo]=Oe(T),[ye,d]=H(T),V=e=>{const{__scopeDialog:t,children:r,open:i,defaultOpen:a,onOpenChange:n,modal:l=!0}=e,c=s.useRef(null),p=s.useRef(null),[u=!1,m]=xe({prop:i,defaultProp:a,onChange:n});return o.jsx(ye,{scope:t,triggerRef:c,contentRef:p,contentId:_(),titleId:_(),descriptionId:_(),open:u,onOpenChange:m,onOpenToggle:s.useCallback(()=>m(se=>!se),[m]),modal:l,children:r})};V.displayName=T;var X="DialogTrigger",K=s.forwardRef((e,t)=>{const{__scopeDialog:r,...i}=e,a=d(X,r),n=E(t,a.triggerRef);return o.jsx(O.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":S(a.open),...i,ref:n,onClick:h(e.onClick,a.onOpenToggle)})});K.displayName=X;var I="DialogPortal",[Re,U]=H(I,{forceMount:void 0}),Y=e=>{const{__scopeDialog:t,forceMount:r,children:i,container:a}=e,n=d(I,t);return o.jsx(Re,{scope:t,forceMount:r,children:s.Children.map(i,l=>o.jsx(N,{present:r||n.open,children:o.jsx(ge,{asChild:!0,container:a,children:l})}))})};Y.displayName=I;var j="DialogOverlay",Z=s.forwardRef((e,t)=>{const r=U(j,e.__scopeDialog),{forceMount:i=r.forceMount,...a}=e,n=d(j,e.__scopeDialog);return n.modal?o.jsx(N,{present:i||n.open,children:o.jsx(_e,{...a,ref:t})}):null});Z.displayName=j;var _e=s.forwardRef((e,t)=>{const{__scopeDialog:r,...i}=e,a=d(j,r);return o.jsx(le,{as:De,allowPinchZoom:!0,shards:[a.contentRef],children:o.jsx(O.div,{"data-state":S(a.open),...i,ref:t,style:{pointerEvents:"auto",...i.style}})})}),f="DialogContent",J=s.forwardRef((e,t)=>{const r=U(f,e.__scopeDialog),{forceMount:i=r.forceMount,...a}=e,n=d(f,e.__scopeDialog);return o.jsx(N,{present:i||n.open,children:n.modal?o.jsx(Ne,{...a,ref:t}):o.jsx(Ee,{...a,ref:t})})});J.displayName=f;var Ne=s.forwardRef((e,t)=>{const r=d(f,e.__scopeDialog),i=s.useRef(null),a=E(t,r.contentRef,i);return s.useEffect(()=>{const n=i.current;if(n)return ce(n)},[]),o.jsx(Q,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(e.onCloseAutoFocus,n=>{var l;n.preventDefault(),(l=r.triggerRef.current)==null||l.focus()}),onPointerDownOutside:h(e.onPointerDownOutside,n=>{const l=n.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&n.preventDefault()}),onFocusOutside:h(e.onFocusOutside,n=>n.preventDefault())})}),Ee=s.forwardRef((e,t)=>{const r=d(f,e.__scopeDialog),i=s.useRef(!1),a=s.useRef(!1);return o.jsx(Q,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{var l,c;(l=e.onCloseAutoFocus)==null||l.call(e,n),n.defaultPrevented||(i.current||(c=r.triggerRef.current)==null||c.focus(),n.preventDefault()),i.current=!1,a.current=!1},onInteractOutside:n=>{var p,u;(p=e.onInteractOutside)==null||p.call(e,n),n.defaultPrevented||(i.current=!0,n.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const l=n.target;((u=r.triggerRef.current)==null?void 0:u.contains(l))&&n.preventDefault(),n.detail.originalEvent.type==="focusin"&&a.current&&n.preventDefault()}})}),Q=s.forwardRef((e,t)=>{const{__scopeDialog:r,trapFocus:i,onOpenAutoFocus:a,onCloseAutoFocus:n,...l}=e,c=d(f,r),p=s.useRef(null),u=E(t,p);return de(),o.jsxs(o.Fragment,{children:[o.jsx(pe,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:a,onUnmountAutoFocus:n,children:o.jsx(ue,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":S(c.open),...l,ref:u,onDismiss:()=>c.onOpenChange(!1)})}),o.jsxs(o.Fragment,{children:[o.jsx(Te,{titleId:c.titleId}),o.jsx(Pe,{contentRef:p,descriptionId:c.descriptionId})]})]})}),P="DialogTitle",ee=s.forwardRef((e,t)=>{const{__scopeDialog:r,...i}=e,a=d(P,r);return o.jsx(O.h2,{id:a.titleId,...i,ref:t})});ee.displayName=P;var oe="DialogDescription",te=s.forwardRef((e,t)=>{const{__scopeDialog:r,...i}=e,a=d(oe,r);return o.jsx(O.p,{id:a.descriptionId,...i,ref:t})});te.displayName=oe;var ne="DialogClose",re=s.forwardRef((e,t)=>{const{__scopeDialog:r,...i}=e,a=d(ne,r);return o.jsx(O.button,{type:"button",...i,ref:t,onClick:h(e.onClick,()=>a.onOpenChange(!1))})});re.displayName=ne;function S(e){return e?"open":"closed"}var ae="DialogTitleWarning",[ho,ie]=be(ae,{contentName:f,titleName:P,docsSlug:"dialog"}),Te=({titleId:e})=>{const t=ie(ae),r=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},Ie="DialogDescriptionWarning",Pe=({contentRef:e,descriptionId:t})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ie(Ie).contentName}}.`;return s.useEffect(()=>{var n;const a=(n=e.current)==null?void 0:n.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(i))},[i,e,t]),null},Se=V,we=K,Ae=Y,Me=Z,Fe=J,We=ee,Be=te,ke=re;const $e=y(Ae)`
  z-index: ${({theme:e})=>e.zIndices.dialogOverlay};
`,Le=y(Me)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: ${({theme:e})=>e.zIndices.dialogOverlay};
`,Ge=y(Fe)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: ${({theme:e})=>e.zIndices.dialog};
  width: 90%;
  max-width: 30rem;
`,qe=y.button`
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
`,x=({trigger:e,open:t,onOpenChange:r,title:i,content:a,actions:n,children:l})=>{const[c,p]=s.useState(t),u=m=>{p(m),r==null||r(m)};return o.jsxs(Se,{open:t!==void 0?t:c,onOpenChange:u,children:[e&&o.jsx(we,{asChild:!0,children:e}),o.jsx($e,{children:o.jsx(Le,{children:o.jsx(Ge,{children:o.jsxs(he,{children:[o.jsx(ke,{asChild:!0,children:o.jsx(qe,{children:o.jsx(je,{})})}),i&&o.jsx(We,{asChild:!0,children:o.jsx(R.Title,{children:i})}),(a||l)&&o.jsx(Be,{asChild:!0,children:o.jsxs(o.Fragment,{children:[o.jsx(R.Content,{children:a}),l,n&&o.jsx(R.Actions,{children:n})]})})]})})})})]})};x.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};const vo={title:"Molecules/Dialog",component:x,render:e=>{const[t,r]=s.useState(!1);return o.jsx(x,{...e,open:t,onOpenChange:r,trigger:o.jsx(v,{children:"Open dialog"})})},decorators:[e=>o.jsx("div",{style:{width:"480px",height:"320px"},children:o.jsx(e,{})})]},g={args:{title:"Dialog Title",content:"This is dialog content.",children:o.jsx("p",{children:"This is the children of the dialog."}),actions:o.jsxs(o.Fragment,{children:[o.jsx(v,{children:"Confirm"}),o.jsx(v,{variant:"outline",children:"Cancel"})]})}},D={render:e=>o.jsx(x,{...e,trigger:o.jsx(v,{children:"Open dialog"})}),args:{...g.args}},b={render:e=>{const[t,r]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(fe,{trigger:o.jsx(v,{children:"Open dropdown"}),dialogOpen:t,items:[{content:"Open dialog",onSelect:()=>r(!0)}]}),o.jsx(x,{...e,open:t,onOpenChange:r})]})},args:{...g.args}},C={args:{...g.args,children:o.jsx(me,{options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"},{value:"option6",label:"Option 6"},{value:"option7",label:"Option 7"},{value:"option8",label:"Option 8"},{value:"option9",label:"Option 9"},{value:"option10",label:"Option 10"},{value:"option11",label:"Option 11"},{value:"option12",label:"Option 12"},{value:"option13",label:"Option 13"},{value:"option14",label:"Option 14"},{value:"option15",label:"Option 15"},{value:"option16",label:"Option 16"}],id:"select",onChange:()=>{}})}};var w,A,M;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Dialog Title',
    content: 'This is dialog content.',
    children: <p>This is the children of the dialog.</p>,
    actions: <>
        <Button>Confirm</Button>
        <Button variant="outline">Cancel</Button>
      </>
  }
}`,...(M=(A=g.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var F,W,B;D.parameters={...D.parameters,docs:{...(F=D.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    return <Dialog {...args} trigger={<Button>Open dialog</Button>} />;
  },
  args: {
    ...Default.args
  }
}`,...(B=(W=D.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var k,$,L;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <DropdownMenu trigger={<Button>Open dropdown</Button>} dialogOpen={open} items={[{
        content: 'Open dialog',
        onSelect: () => setOpen(true)
      }]} />
        <Dialog {...args} open={open} onOpenChange={setOpen} />
      </>;
  },
  args: {
    ...Default.args
  }
}`,...(L=($=b.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var G,q,z;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <Select options={[{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }, {
      value: 'option4',
      label: 'Option 4'
    }, {
      value: 'option5',
      label: 'Option 5'
    }, {
      value: 'option6',
      label: 'Option 6'
    }, {
      value: 'option7',
      label: 'Option 7'
    }, {
      value: 'option8',
      label: 'Option 8'
    }, {
      value: 'option9',
      label: 'Option 9'
    }, {
      value: 'option10',
      label: 'Option 10'
    }, {
      value: 'option11',
      label: 'Option 11'
    }, {
      value: 'option12',
      label: 'Option 12'
    }, {
      value: 'option13',
      label: 'Option 13'
    }, {
      value: 'option14',
      label: 'Option 14'
    }, {
      value: 'option15',
      label: 'Option 15'
    }, {
      value: 'option16',
      label: 'Option 16'
    }]} id="select" onChange={() => {}} />
  }
}`,...(z=(q=C.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const xo=["Default","NoOutideState","ControlledOutside","WithDropdown"];export{b as ControlledOutside,g as Default,D as NoOutideState,C as WithDropdown,xo as __namedExportsOrder,vo as default};
