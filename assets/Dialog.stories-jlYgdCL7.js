import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as s}from"./index-CR__hKHy.js";import{B as v}from"./Button-ns02yJlA.js";import{R as le,h as ce,u as de,F as pe,a as ue,P as ge,D as fe}from"./DropdownMenu-CQdmOdOB.js";import{S as me}from"./Select-BMR7f1FV.js";import"./CreatableSelect-CmrddJ4C.js";import"./MultiSelect-CCBeMds9.js";import{d as _}from"./styled-components.browser.esm-DnH8uv-2.js";import{C as he,a as R}from"./Card-z2tOqxSa.js";import{c as ve}from"./createLucideIcon-BOMFEwrg.js";import{c as xe,g as N,P as O,e as h,f as E,S as Oe,h as De,b as be,d as y}from"./index-bxkApRut.js";import"./Spinner-xLrCEoRn.js";import"./index-D2e_E8nu.js";import"./index-CtmzRm2p.js";import"./react-select.esm-CJYhAXX6.js";import"./styles-DjolQyXp.js";import"./circle-alert-C-cAHhHG.js";import"./light-C_YelSUh.js";import"./media-BIK856jo.js";import"./ButtonGroup-Bo3_J-q_.js";import"./LoadingOverlay-D1q4hoGD.js";import"./info-BBH6Osln.js";import"./Typography-BnbRQYey.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],je=ve("X",Ce);var T="Dialog",[H,ut]=xe(T),[Re,d]=H(T),V=e=>{const{__scopeDialog:o,children:r,open:i,defaultOpen:a,onOpenChange:n,modal:l=!0}=e,c=s.useRef(null),p=s.useRef(null),[u=!1,m]=be({prop:i,defaultProp:a,onChange:n});return t.jsx(Re,{scope:o,triggerRef:c,contentRef:p,contentId:y(),titleId:y(),descriptionId:y(),open:u,onOpenChange:m,onOpenToggle:s.useCallback(()=>m(se=>!se),[m]),modal:l,children:r})};V.displayName=T;var X="DialogTrigger",K=s.forwardRef((e,o)=>{const{__scopeDialog:r,...i}=e,a=d(X,r),n=N(o,a.triggerRef);return t.jsx(O.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":S(a.open),...i,ref:n,onClick:h(e.onClick,a.onOpenToggle)})});K.displayName=X;var I="DialogPortal",[ye,U]=H(I,{forceMount:void 0}),Y=e=>{const{__scopeDialog:o,forceMount:r,children:i,container:a}=e,n=d(I,o);return t.jsx(ye,{scope:o,forceMount:r,children:s.Children.map(i,l=>t.jsx(E,{present:r||n.open,children:t.jsx(ge,{asChild:!0,container:a,children:l})}))})};Y.displayName=I;var j="DialogOverlay",Z=s.forwardRef((e,o)=>{const r=U(j,e.__scopeDialog),{forceMount:i=r.forceMount,...a}=e,n=d(j,e.__scopeDialog);return n.modal?t.jsx(E,{present:i||n.open,children:t.jsx(_e,{...a,ref:o})}):null});Z.displayName=j;var _e=s.forwardRef((e,o)=>{const{__scopeDialog:r,...i}=e,a=d(j,r);return t.jsx(le,{as:Oe,allowPinchZoom:!0,shards:[a.contentRef],children:t.jsx(O.div,{"data-state":S(a.open),...i,ref:o,style:{pointerEvents:"auto",...i.style}})})}),f="DialogContent",J=s.forwardRef((e,o)=>{const r=U(f,e.__scopeDialog),{forceMount:i=r.forceMount,...a}=e,n=d(f,e.__scopeDialog);return t.jsx(E,{present:i||n.open,children:n.modal?t.jsx(Ne,{...a,ref:o}):t.jsx(Ee,{...a,ref:o})})});J.displayName=f;var Ne=s.forwardRef((e,o)=>{const r=d(f,e.__scopeDialog),i=s.useRef(null),a=N(o,r.contentRef,i);return s.useEffect(()=>{const n=i.current;if(n)return ce(n)},[]),t.jsx(Q,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(e.onCloseAutoFocus,n=>{var l;n.preventDefault(),(l=r.triggerRef.current)==null||l.focus()}),onPointerDownOutside:h(e.onPointerDownOutside,n=>{const l=n.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&n.preventDefault()}),onFocusOutside:h(e.onFocusOutside,n=>n.preventDefault())})}),Ee=s.forwardRef((e,o)=>{const r=d(f,e.__scopeDialog),i=s.useRef(!1),a=s.useRef(!1);return t.jsx(Q,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{var l,c;(l=e.onCloseAutoFocus)==null||l.call(e,n),n.defaultPrevented||(i.current||(c=r.triggerRef.current)==null||c.focus(),n.preventDefault()),i.current=!1,a.current=!1},onInteractOutside:n=>{var p,u;(p=e.onInteractOutside)==null||p.call(e,n),n.defaultPrevented||(i.current=!0,n.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const l=n.target;((u=r.triggerRef.current)==null?void 0:u.contains(l))&&n.preventDefault(),n.detail.originalEvent.type==="focusin"&&a.current&&n.preventDefault()}})}),Q=s.forwardRef((e,o)=>{const{__scopeDialog:r,trapFocus:i,onOpenAutoFocus:a,onCloseAutoFocus:n,...l}=e,c=d(f,r),p=s.useRef(null),u=N(o,p);return de(),t.jsxs(t.Fragment,{children:[t.jsx(pe,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:a,onUnmountAutoFocus:n,children:t.jsx(ue,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":S(c.open),...l,ref:u,onDismiss:()=>c.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(Te,{titleId:c.titleId}),t.jsx(Pe,{contentRef:p,descriptionId:c.descriptionId})]})]})}),P="DialogTitle",ee=s.forwardRef((e,o)=>{const{__scopeDialog:r,...i}=e,a=d(P,r);return t.jsx(O.h2,{id:a.titleId,...i,ref:o})});ee.displayName=P;var te="DialogDescription",oe=s.forwardRef((e,o)=>{const{__scopeDialog:r,...i}=e,a=d(te,r);return t.jsx(O.p,{id:a.descriptionId,...i,ref:o})});oe.displayName=te;var ne="DialogClose",re=s.forwardRef((e,o)=>{const{__scopeDialog:r,...i}=e,a=d(ne,r);return t.jsx(O.button,{type:"button",...i,ref:o,onClick:h(e.onClick,()=>a.onOpenChange(!1))})});re.displayName=ne;function S(e){return e?"open":"closed"}var ae="DialogTitleWarning",[gt,ie]=De(ae,{contentName:f,titleName:P,docsSlug:"dialog"}),Te=({titleId:e})=>{const o=ie(ae),r=`\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},Ie="DialogDescriptionWarning",Pe=({contentRef:e,descriptionId:o})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ie(Ie).contentName}}.`;return s.useEffect(()=>{var n;const a=(n=e.current)==null?void 0:n.getAttribute("aria-describedby");o&&a&&(document.getElementById(o)||console.warn(i))},[i,e,o]),null},Se=V,we=K,Ae=Y,Me=Z,Fe=J,We=ee,Be=oe,ke=re;const $e=_(Me)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`,Le=_(Fe)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: ${({theme:e})=>e.zIndicies.dialog};
  width: 90%;
  max-width: 30rem;
`,Ge=_.button`
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
`,x=({trigger:e,open:o,onOpenChange:r,title:i,content:a,actions:n,children:l})=>{const[c,p]=s.useState(o),u=m=>{p(m),r==null||r(m)};return t.jsxs(Se,{open:o!==void 0?o:c,onOpenChange:u,children:[e&&t.jsx(we,{asChild:!0,children:e}),t.jsx(Ae,{children:t.jsx($e,{children:t.jsx(Le,{children:t.jsxs(he,{children:[t.jsx(ke,{asChild:!0,children:t.jsx(Ge,{children:t.jsx(je,{})})}),i&&t.jsx(We,{asChild:!0,children:t.jsx(R.Title,{children:i})}),(a||l)&&t.jsx(Be,{asChild:!0,children:t.jsxs(t.Fragment,{children:[t.jsx(R.Content,{children:a}),l,n&&t.jsx(R.Actions,{children:n})]})})]})})})})]})};x.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};const ft={title:"Molecules/Dialog",component:x,render:e=>{const[o,r]=s.useState(!1);return t.jsx(x,{...e,open:o,onOpenChange:r,trigger:t.jsx(v,{children:"Open dialog"})})},decorators:[e=>t.jsx("div",{style:{width:"480px",height:"320px"},children:t.jsx(e,{})})]},g={args:{title:"Dialog Title",content:"This is dialog content.",children:t.jsx("p",{children:"This is the children of the dialog."}),actions:t.jsxs(t.Fragment,{children:[t.jsx(v,{children:"Confirm"}),t.jsx(v,{variant:"outline",children:"Cancel"})]})}},D={render:e=>t.jsx(x,{...e,trigger:t.jsx(v,{children:"Open dialog"})}),args:{...g.args}},b={render:e=>{const[o,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(fe,{trigger:t.jsx(v,{children:"Open dropdown"}),dialogOpen:o,items:[{content:"Open dialog",onSelect:()=>r(!0)}]}),t.jsx(x,{...e,open:o,onOpenChange:r})]})},args:{...g.args}},C={args:{...g.args,children:t.jsx(me,{options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"},{value:"option6",label:"Option 6"},{value:"option7",label:"Option 7"},{value:"option8",label:"Option 8"},{value:"option9",label:"Option 9"},{value:"option10",label:"Option 10"},{value:"option11",label:"Option 11"},{value:"option12",label:"Option 12"},{value:"option13",label:"Option 13"},{value:"option14",label:"Option 14"},{value:"option15",label:"Option 15"},{value:"option16",label:"Option 16"}],id:"select",onChange:()=>{}})}};var w,A,M;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(q=C.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const mt=["Default","NoOutideState","ControlledOutside","WithDropdown"];export{b as ControlledOutside,g as Default,D as NoOutideState,C as WithDropdown,mt as __namedExportsOrder,ft as default};
