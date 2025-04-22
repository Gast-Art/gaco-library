import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as s}from"./index-CR__hKHy.js";import{B as O}from"./Button-DPUe0Ftz.js";import{S as re}from"./Select-CGQYxBAe.js";import"./CreatableSelect-BVeHjgUh.js";import"./MultiSelect-C8EhCRMv.js";import{d as y}from"./styled-components.browser.esm-DnH8uv-2.js";import{C as ae,a as j}from"./Card-h5m2WLQf.js";import{c as ie}from"./createLucideIcon-BOMFEwrg.js";import{c as se,g as _,P as v,e as h,f as N,S as le,h as ce,b as de,d as R}from"./index-bxkApRut.js";import{R as ue,h as pe,u as ge,F as fe,a as me,P as he}from"./DropdownMenu-dSMxwB9U.js";import"./Spinner-xLrCEoRn.js";import"./react-select.esm-DTuKP_Ce.js";import"./styles-RwF-f0z0.js";import"./index-D2e_E8nu.js";import"./index-CtmzRm2p.js";import"./circle-alert-C-cAHhHG.js";import"./light-SvT5IF7k.js";import"./LoadingOverlay-BHCOhALT.js";import"./info-BBH6Osln.js";import"./Typography-CsgGy_ye.js";import"./ButtonGroup-Bo3_J-q_.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xe=ie("X",ve);var E="Dialog",[L,it]=se(E),[De,d]=L(E),G=e=>{const{__scopeDialog:n,children:r,open:i,defaultOpen:a,onOpenChange:o,modal:l=!0}=e,c=s.useRef(null),u=s.useRef(null),[p=!1,f]=de({prop:i,defaultProp:a,onChange:o});return t.jsx(De,{scope:n,triggerRef:c,contentRef:u,contentId:R(),titleId:R(),descriptionId:R(),open:p,onOpenChange:f,onOpenToggle:s.useCallback(()=>f(ne=>!ne),[f]),modal:l,children:r})};G.displayName=E;var q="DialogTrigger",z=s.forwardRef((e,n)=>{const{__scopeDialog:r,...i}=e,a=d(q,r),o=_(n,a.triggerRef);return t.jsx(v.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":P(a.open),...i,ref:o,onClick:h(e.onClick,a.onOpenToggle)})});z.displayName=q;var T="DialogPortal",[Oe,H]=L(T,{forceMount:void 0}),V=e=>{const{__scopeDialog:n,forceMount:r,children:i,container:a}=e,o=d(T,n);return t.jsx(Oe,{scope:n,forceMount:r,children:s.Children.map(i,l=>t.jsx(N,{present:r||o.open,children:t.jsx(he,{asChild:!0,container:a,children:l})}))})};V.displayName=T;var b="DialogOverlay",X=s.forwardRef((e,n)=>{const r=H(b,e.__scopeDialog),{forceMount:i=r.forceMount,...a}=e,o=d(b,e.__scopeDialog);return o.modal?t.jsx(N,{present:i||o.open,children:t.jsx(be,{...a,ref:n})}):null});X.displayName=b;var be=s.forwardRef((e,n)=>{const{__scopeDialog:r,...i}=e,a=d(b,r);return t.jsx(ue,{as:le,allowPinchZoom:!0,shards:[a.contentRef],children:t.jsx(v.div,{"data-state":P(a.open),...i,ref:n,style:{pointerEvents:"auto",...i.style}})})}),g="DialogContent",K=s.forwardRef((e,n)=>{const r=H(g,e.__scopeDialog),{forceMount:i=r.forceMount,...a}=e,o=d(g,e.__scopeDialog);return t.jsx(N,{present:i||o.open,children:o.modal?t.jsx(Ce,{...a,ref:n}):t.jsx(je,{...a,ref:n})})});K.displayName=g;var Ce=s.forwardRef((e,n)=>{const r=d(g,e.__scopeDialog),i=s.useRef(null),a=_(n,r.contentRef,i);return s.useEffect(()=>{const o=i.current;if(o)return pe(o)},[]),t.jsx(U,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(e.onCloseAutoFocus,o=>{var l;o.preventDefault(),(l=r.triggerRef.current)==null||l.focus()}),onPointerDownOutside:h(e.onPointerDownOutside,o=>{const l=o.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&o.preventDefault()}),onFocusOutside:h(e.onFocusOutside,o=>o.preventDefault())})}),je=s.forwardRef((e,n)=>{const r=d(g,e.__scopeDialog),i=s.useRef(!1),a=s.useRef(!1);return t.jsx(U,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var l,c;(l=e.onCloseAutoFocus)==null||l.call(e,o),o.defaultPrevented||(i.current||(c=r.triggerRef.current)==null||c.focus(),o.preventDefault()),i.current=!1,a.current=!1},onInteractOutside:o=>{var u,p;(u=e.onInteractOutside)==null||u.call(e,o),o.defaultPrevented||(i.current=!0,o.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const l=o.target;((p=r.triggerRef.current)==null?void 0:p.contains(l))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&a.current&&o.preventDefault()}})}),U=s.forwardRef((e,n)=>{const{__scopeDialog:r,trapFocus:i,onOpenAutoFocus:a,onCloseAutoFocus:o,...l}=e,c=d(g,r),u=s.useRef(null),p=_(n,u);return ge(),t.jsxs(t.Fragment,{children:[t.jsx(fe,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:a,onUnmountAutoFocus:o,children:t.jsx(me,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":P(c.open),...l,ref:p,onDismiss:()=>c.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(Re,{titleId:c.titleId}),t.jsx(_e,{contentRef:u,descriptionId:c.descriptionId})]})]})}),I="DialogTitle",Y=s.forwardRef((e,n)=>{const{__scopeDialog:r,...i}=e,a=d(I,r);return t.jsx(v.h2,{id:a.titleId,...i,ref:n})});Y.displayName=I;var Z="DialogDescription",J=s.forwardRef((e,n)=>{const{__scopeDialog:r,...i}=e,a=d(Z,r);return t.jsx(v.p,{id:a.descriptionId,...i,ref:n})});J.displayName=Z;var Q="DialogClose",ee=s.forwardRef((e,n)=>{const{__scopeDialog:r,...i}=e,a=d(Q,r);return t.jsx(v.button,{type:"button",...i,ref:n,onClick:h(e.onClick,()=>a.onOpenChange(!1))})});ee.displayName=Q;function P(e){return e?"open":"closed"}var te="DialogTitleWarning",[st,oe]=ce(te,{contentName:g,titleName:I,docsSlug:"dialog"}),Re=({titleId:e})=>{const n=oe(te),r=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},ye="DialogDescriptionWarning",_e=({contentRef:e,descriptionId:n})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${oe(ye).contentName}}.`;return s.useEffect(()=>{var o;const a=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");n&&a&&(document.getElementById(n)||console.warn(i))},[i,e,n]),null},Ne=G,Ee=z,Te=V,Ie=X,Pe=K,Se=Y,Ae=J,we=ee;const Me=y(Ie)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`,Fe=y(Pe)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: ${({theme:e})=>e.zIndicies.dialog};
  width: 90%;
  max-width: 30rem;
`,We=y.button`
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
`,C=({trigger:e,open:n,onOpenChange:r,title:i,content:a,actions:o,children:l})=>{const[c,u]=s.useState(n),p=f=>{u(f),r==null||r(f)};return t.jsxs(Ne,{open:n!==void 0?n:c,onOpenChange:p,children:[e&&t.jsx(Ee,{asChild:!0,children:e}),t.jsx(Te,{children:t.jsx(Me,{children:t.jsx(Fe,{children:t.jsxs(ae,{children:[t.jsx(we,{asChild:!0,children:t.jsx(We,{children:t.jsx(xe,{})})}),i&&t.jsx(Se,{asChild:!0,children:t.jsx(j.Title,{children:i})}),(a||l)&&t.jsx(Ae,{asChild:!0,children:t.jsxs(t.Fragment,{children:[t.jsx(j.Content,{children:a}),l,o&&t.jsx(j.Actions,{children:o})]})})]})})})})]})};C.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};const lt={title:"Molecules/Dialog",component:C,render:e=>{const[n,r]=s.useState(!1);return t.jsx(C,{...e,open:n,onOpenChange:r,trigger:t.jsx(O,{children:"Open dialog"})})},decorators:[e=>t.jsx("div",{style:{width:"480px",height:"320px"},children:t.jsx(e,{})})]},m={args:{title:"Dialog Title",content:"This is dialog content.",children:t.jsx("p",{children:"This is the children of the dialog."}),actions:t.jsxs(t.Fragment,{children:[t.jsx(O,{children:"Confirm"}),t.jsx(O,{variant:"outline",children:"Cancel"})]})}},x={render:e=>t.jsx(C,{...e,trigger:t.jsx(O,{children:"Open dialog"})}),args:{...m.args}},D={args:{...m.args,children:t.jsx(re,{options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"},{value:"option6",label:"Option 6"},{value:"option7",label:"Option 7"},{value:"option8",label:"Option 8"},{value:"option9",label:"Option 9"},{value:"option10",label:"Option 10"},{value:"option11",label:"Option 11"},{value:"option12",label:"Option 12"},{value:"option13",label:"Option 13"},{value:"option14",label:"Option 14"},{value:"option15",label:"Option 15"},{value:"option16",label:"Option 16"}],id:"select",onChange:()=>{}})}};var S,A,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Dialog Title',
    content: 'This is dialog content.',
    children: <p>This is the children of the dialog.</p>,
    actions: <>
        <Button>Confirm</Button>
        <Button variant="outline">Cancel</Button>
      </>
  }
}`,...(w=(A=m.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var M,F,W;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    return <Dialog {...args} trigger={<Button>Open dialog</Button>} />;
  },
  args: {
    ...Default.args
  }
}`,...(W=(F=x.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var k,B,$;D.parameters={...D.parameters,docs:{...(k=D.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...($=(B=D.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const ct=["Default","NoOutideState","WithDropdown"];export{m as Default,x as NoOutideState,D as WithDropdown,ct as __namedExportsOrder,lt as default};
