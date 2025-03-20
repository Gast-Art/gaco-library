import{j as s}from"./jsx-runtime-CLpGMVip.js";import{r as v}from"./index-CZMpeKRu.js";import{c as J,a as M,u as Q,b as U,d as W,P as x,R as X,I as Y,e as j,f as Z}from"./index-BL7W489x.js";import{d as C,l as y}from"./styled-components.browser.esm-BT5p091k.js";import"./index-Dy_t9DXc.js";import"./index-D-TIQtLp.js";var S="Tabs",[ee,ue]=J(S,[M]),k=M(),[se,I]=ee(S),D=v.forwardRef((e,r)=>{const{__scopeTabs:n,value:a,onValueChange:i,defaultValue:d,orientation:t="horizontal",dir:u,activationMode:T="automatic",...f}=e,l=Q(u),[o,b]=U({prop:a,onChange:i,defaultProp:d});return s.jsx(se,{scope:n,baseId:W(),value:o,onValueChange:b,orientation:t,dir:l,activationMode:T,children:s.jsx(x.div,{dir:l,"data-orientation":t,...f,ref:r})})});D.displayName=S;var F="TabsList",O=v.forwardRef((e,r)=>{const{__scopeTabs:n,loop:a=!0,...i}=e,d=I(F,n),t=k(n);return s.jsx(X,{asChild:!0,...t,orientation:d.orientation,dir:d.dir,loop:a,children:s.jsx(x.div,{role:"tablist","aria-orientation":d.orientation,...i,ref:r})})});O.displayName=F;var G="TabsTrigger",q=v.forwardRef((e,r)=>{const{__scopeTabs:n,value:a,disabled:i=!1,...d}=e,t=I(G,n),u=k(n),T=K(t.baseId,a),f=H(t.baseId,a),l=a===t.value;return s.jsx(Y,{asChild:!0,...u,focusable:!i,active:l,children:s.jsx(x.button,{type:"button",role:"tab","aria-selected":l,"aria-controls":f,"data-state":l?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:T,...d,ref:r,onMouseDown:j(e.onMouseDown,o=>{!i&&o.button===0&&o.ctrlKey===!1?t.onValueChange(a):o.preventDefault()}),onKeyDown:j(e.onKeyDown,o=>{[" ","Enter"].includes(o.key)&&t.onValueChange(a)}),onFocus:j(e.onFocus,()=>{const o=t.activationMode!=="manual";!l&&!i&&o&&t.onValueChange(a)})})})});q.displayName=G;var B="TabsContent",g=v.forwardRef((e,r)=>{const{__scopeTabs:n,value:a,forceMount:i,children:d,...t}=e,u=I(B,n),T=K(u.baseId,a),f=H(u.baseId,a),l=a===u.value,o=v.useRef(l);return v.useEffect(()=>{const b=requestAnimationFrame(()=>o.current=!1);return()=>cancelAnimationFrame(b)},[]),s.jsx(Z,{present:i||l,children:({present:b})=>s.jsx(x.div,{"data-state":l?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":T,hidden:!b,id:f,tabIndex:0,...t,ref:r,style:{...e.style,animationDuration:o.current?"0s":void 0},children:b&&d})})});g.displayName=B;function K(e,r){return`${e}-trigger-${r}`}function H(e,r){return`${e}-content-${r}`}const R=C(D)`
  display: flex;
  flex-direction: column;
`,re=C(O)`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: ${({theme:e})=>e.colors.grayLighter};
  border-radius: ${({theme:e})=>e.sizes.borderRadius};
  overflow-x: auto;

  ${({inline:e})=>!e&&y`
      display: flex;
      > * {
        flex: 1;
      }
    `}
`,ae={default:y`
    height: ${({theme:e})=>e.sizes.formControl};
    font-size: ${({theme:e})=>e.sizes.fonts.sm};
    padding: 0 1rem;
  `,lg:y`
    height: 2.5rem;
    font-size: ${({theme:e})=>e.sizes.fonts.md};
    padding: 0 2rem;
  `},te=C(q)`
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

  ${({size:e="default"})=>ae[e]}
`,w=v.forwardRef((e,r)=>s.jsx(re,{ref:r,...e})),c=v.forwardRef(({children:e,...r},n)=>s.jsx(te,{ref:n,...r,children:e}));w.__docgenInfo={description:"",methods:[],displayName:"TabsList",props:{inline:{required:!1,tsType:{name:"boolean"},description:""}},composes:["TabsListPropsRoot"]};c.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{"data-state":{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof triggerSizes",elements:[{name:"literal",value:"default"},{name:"literal",value:"lg"}]},description:""}},composes:["TabsTriggerPropsRoot"]};const ve={title:"Molecules/Tabs",render:()=>s.jsxs(R,{defaultValue:"overview",children:[s.jsxs(w,{children:[s.jsx(c,{value:"overview",children:"Overview"}),s.jsx(c,{value:"sales",children:"Sales"}),s.jsx(c,{value:"products",children:"Products"}),s.jsx(c,{value:"artists",children:"Artists"})]}),s.jsx(g,{value:"overview",children:"This is the tabs content for overview"}),s.jsx(g,{value:"sales",children:"This is the tab content for sales"})]})},p={},m={render:()=>s.jsxs(R,{defaultValue:"overview",children:[s.jsxs(w,{children:[s.jsx(c,{value:"overview",size:"lg",children:"Overview"}),s.jsx(c,{value:"sales",size:"lg",children:"Sales"})]}),s.jsx(g,{value:"overview",children:"Overview content"})]})},h={render:()=>s.jsxs(R,{defaultValue:"overview",children:[s.jsxs(w,{inline:!0,children:[s.jsx(c,{value:"overview",children:"Overview"}),s.jsx(c,{value:"sales",children:"Sales"}),s.jsx(c,{value:"products",children:"Products"}),s.jsx(c,{value:"artists",children:"Artists"})]}),s.jsx(g,{value:"overview",children:"This is the tabs content for overview"}),s.jsx(g,{value:"sales",children:"This is the tab content for sales"})]})};var _,$,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(P=($=p.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var z,A,L;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=(N=h.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const be=["Default","Large","Inline"];export{p as Default,h as Inline,m as Large,be as __namedExportsOrder,ve as default};
