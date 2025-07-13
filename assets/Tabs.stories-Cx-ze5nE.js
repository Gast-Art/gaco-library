import{j as s}from"./jsx-runtime-DPtPVAOg.js";import{r as v}from"./index-CR__hKHy.js";import{c as M,u as J,a as Q,b as U,R as W,I as X,d as y,P as Y}from"./index-Ccna2XRG.js";import{c as Z,P as w}from"./index-D1GhS0qO.js";import{d as C,l as x}from"./styled-components.browser.esm-DnH8uv-2.js";import"./light-CHoHqcPY.js";import{m as ee}from"./media-BIK856jo.js";import"./index-D2e_E8nu.js";import"./index-CtmzRm2p.js";var S="Tabs",[se,Te]=Z(S,[M]),k=M(),[re,I]=se(S),D=v.forwardRef((e,r)=>{const{__scopeTabs:o,value:a,onValueChange:i,defaultValue:d,orientation:t="horizontal",dir:u,activationMode:T="automatic",...f}=e,l=J(u),[n,b]=Q({prop:a,onChange:i,defaultProp:d});return s.jsx(re,{scope:o,baseId:U(),value:n,onValueChange:b,orientation:t,dir:l,activationMode:T,children:s.jsx(w.div,{dir:l,"data-orientation":t,...f,ref:r})})});D.displayName=S;var F="TabsList",O=v.forwardRef((e,r)=>{const{__scopeTabs:o,loop:a=!0,...i}=e,d=I(F,o),t=k(o);return s.jsx(W,{asChild:!0,...t,orientation:d.orientation,dir:d.dir,loop:a,children:s.jsx(w.div,{role:"tablist","aria-orientation":d.orientation,...i,ref:r})})});O.displayName=F;var G="TabsTrigger",q=v.forwardRef((e,r)=>{const{__scopeTabs:o,value:a,disabled:i=!1,...d}=e,t=I(G,o),u=k(o),T=K(t.baseId,a),f=H(t.baseId,a),l=a===t.value;return s.jsx(X,{asChild:!0,...u,focusable:!i,active:l,children:s.jsx(w.button,{type:"button",role:"tab","aria-selected":l,"aria-controls":f,"data-state":l?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:T,...d,ref:r,onMouseDown:y(e.onMouseDown,n=>{!i&&n.button===0&&n.ctrlKey===!1?t.onValueChange(a):n.preventDefault()}),onKeyDown:y(e.onKeyDown,n=>{[" ","Enter"].includes(n.key)&&t.onValueChange(a)}),onFocus:y(e.onFocus,()=>{const n=t.activationMode!=="manual";!l&&!i&&n&&t.onValueChange(a)})})})});q.displayName=G;var B="TabsContent",g=v.forwardRef((e,r)=>{const{__scopeTabs:o,value:a,forceMount:i,children:d,...t}=e,u=I(B,o),T=K(u.baseId,a),f=H(u.baseId,a),l=a===u.value,n=v.useRef(l);return v.useEffect(()=>{const b=requestAnimationFrame(()=>n.current=!1);return()=>cancelAnimationFrame(b)},[]),s.jsx(Y,{present:i||l,children:({present:b})=>s.jsx(w.div,{"data-state":l?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":T,hidden:!b,id:f,tabIndex:0,...t,ref:r,style:{...e.style,animationDuration:n.current?"0s":void 0},children:b&&d})})});g.displayName=B;function K(e,r){return`${e}-trigger-${r}`}function H(e,r){return`${e}-content-${r}`}const $=C(D)`
  display: flex;
  flex-direction: column;
`,ae=C(O)`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  margin-bottom: 0.5rem;
  background-color: ${({theme:e})=>e.colors.grayLighter};
  border-radius: ${({theme:e})=>e.sizes.borderRadius};
  overflow-x: auto;

  ${({$inline:e})=>e?x`
          align-self: flex-start;
        `:x`
          display: flex;
          > * {
            flex: 1;
          }
        `}

  ${ee.md`
        margin-bottom: 1rem;
    `}
`,te={default:x`
    height: ${({theme:e})=>e.sizes.formControl};
    font-size: ${({theme:e})=>e.sizes.fonts.sm};
    padding: 0 1rem;
  `,lg:x`
    height: 2.5rem;
    font-size: ${({theme:e})=>e.sizes.fonts.md};
    padding: 0 2rem;
  `},oe=C(q)`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
  background-color: transparent;
  color: ${({theme:e})=>e.colors.text};

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  &[data-state='active'] {
    cursor: default;
    background-color: ${({theme:e})=>e.colors.contentBg};
    box-shadow: ${({theme:e})=>e.shadows.default};
    border-radius: ${({theme:e})=>e.sizes.borderRadius};
  }

  ${({size:e="default"})=>te[e]}
`,j=v.forwardRef(({inline:e,...r},o)=>s.jsx(ae,{ref:o,$inline:e,...r})),c=v.forwardRef(({children:e,...r},o)=>s.jsx(oe,{ref:o,...r,children:e}));j.__docgenInfo={description:"",methods:[],displayName:"TabsList",props:{inline:{required:!1,tsType:{name:"boolean"},description:""}},composes:["TabsListPropsRoot"]};c.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{"data-state":{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof triggerSizes",elements:[{name:"literal",value:"default"},{name:"literal",value:"lg"}]},description:""}},composes:["TabsTriggerPropsRoot"]};const fe={title:"Molecules/Tabs",render:()=>s.jsxs($,{defaultValue:"overview",children:[s.jsxs(j,{children:[s.jsx(c,{value:"overview",children:"Overview"}),s.jsx(c,{value:"sales",children:"Sales"}),s.jsx(c,{value:"products",children:"Products"}),s.jsx(c,{value:"artists",children:"Artists"})]}),s.jsx(g,{value:"overview",children:"This is the tabs content for overview"}),s.jsx(g,{value:"sales",children:"This is the tab content for sales"})]})},p={},m={render:()=>s.jsxs($,{defaultValue:"overview",children:[s.jsxs(j,{children:[s.jsx(c,{value:"overview",size:"lg",children:"Overview"}),s.jsx(c,{value:"sales",size:"lg",children:"Sales"})]}),s.jsx(g,{value:"overview",children:"Overview content"})]})},h={render:()=>s.jsxs($,{defaultValue:"overview",children:[s.jsxs(j,{inline:!0,children:[s.jsx(c,{value:"overview",children:"Overview"}),s.jsx(c,{value:"sales",children:"Sales"}),s.jsx(c,{value:"products",children:"Products"}),s.jsx(c,{value:"artists",children:"Artists"})]}),s.jsx(g,{value:"overview",children:"This is the tabs content for overview"}),s.jsx(g,{value:"sales",children:"This is the tab content for sales"})]})};var R,_,P;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(P=(_=p.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var z,A,L;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview" size="lg">
          Overview
        </TabsTrigger>
        <TabsTrigger value="sales" size="lg">
          Sales
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
    </Tabs>
}`,...(L=(A=m.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var E,N,V;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview">
      <TabsList inline>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="sales">Sales</TabsTrigger>
        <TabsTrigger value="products">Products</TabsTrigger>
        <TabsTrigger value="artists">Artists</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">This is the tabs content for overview</TabsContent>
      <TabsContent value="sales">This is the tab content for sales</TabsContent>
    </Tabs>
}`,...(V=(N=h.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const pe=["Default","Large","Inline"];export{p as Default,h as Inline,m as Large,pe as __namedExportsOrder,fe as default};
