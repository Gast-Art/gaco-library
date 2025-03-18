import{j as s}from"./jsx-runtime-CLpGMVip.js";import{r as v}from"./index-CZMpeKRu.js";import{c as H,a as V,u as J,b as Q,d as U,P as x,R as W,I as X,e as y,f as Y}from"./index-BL7W489x.js";import{d as M,l as C}from"./styled-components.browser.esm-BT5p091k.js";import"./index-Dy_t9DXc.js";import"./index-D-TIQtLp.js";var S="Tabs",[Z,de]=H(S,[V]),D=V(),[ee,I]=Z(S),w=v.forwardRef((e,r)=>{const{__scopeTabs:n,value:a,onValueChange:i,defaultValue:d,orientation:t="horizontal",dir:u,activationMode:T="automatic",...p}=e,l=J(u),[o,b]=Q({prop:a,onChange:i,defaultProp:d});return s.jsx(ee,{scope:n,baseId:U(),value:o,onValueChange:b,orientation:t,dir:l,activationMode:T,children:s.jsx(x.div,{dir:l,"data-orientation":t,...p,ref:r})})});w.displayName=S;var F="TabsList",O=v.forwardRef((e,r)=>{const{__scopeTabs:n,loop:a=!0,...i}=e,d=I(F,n),t=D(n);return s.jsx(W,{asChild:!0,...t,orientation:d.orientation,dir:d.dir,loop:a,children:s.jsx(x.div,{role:"tablist","aria-orientation":d.orientation,...i,ref:r})})});O.displayName=F;var k="TabsTrigger",G=v.forwardRef((e,r)=>{const{__scopeTabs:n,value:a,disabled:i=!1,...d}=e,t=I(k,n),u=D(n),T=B(t.baseId,a),p=K(t.baseId,a),l=a===t.value;return s.jsx(X,{asChild:!0,...u,focusable:!i,active:l,children:s.jsx(x.button,{type:"button",role:"tab","aria-selected":l,"aria-controls":p,"data-state":l?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:T,...d,ref:r,onMouseDown:y(e.onMouseDown,o=>{!i&&o.button===0&&o.ctrlKey===!1?t.onValueChange(a):o.preventDefault()}),onKeyDown:y(e.onKeyDown,o=>{[" ","Enter"].includes(o.key)&&t.onValueChange(a)}),onFocus:y(e.onFocus,()=>{const o=t.activationMode!=="manual";!l&&!i&&o&&t.onValueChange(a)})})})});G.displayName=k;var q="TabsContent",g=v.forwardRef((e,r)=>{const{__scopeTabs:n,value:a,forceMount:i,children:d,...t}=e,u=I(q,n),T=B(u.baseId,a),p=K(u.baseId,a),l=a===u.value,o=v.useRef(l);return v.useEffect(()=>{const b=requestAnimationFrame(()=>o.current=!1);return()=>cancelAnimationFrame(b)},[]),s.jsx(Y,{present:i||l,children:({present:b})=>s.jsx(x.div,{"data-state":l?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":T,hidden:!b,id:p,tabIndex:0,...t,ref:r,style:{...e.style,animationDuration:o.current?"0s":void 0},children:b&&d})})});g.displayName=q;function B(e,r){return`${e}-trigger-${r}`}function K(e,r){return`${e}-content-${r}`}const se=M(O)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: ${({theme:e})=>e.colors.grayLighter};
  border-radius: ${({theme:e})=>e.sizes.borderRadius};
  overflow-x: auto;

  ${({inline:e})=>!e&&C`
      display: flex;
      > * {
        flex: 1;
      }
    `}
`,re={default:C`
    height: ${({theme:e})=>e.sizes.formControl};
    font-size: ${({theme:e})=>e.sizes.fonts.sm};
    padding: 0 1rem;
  `,lg:C`
    height: 2.5rem;
    font-size: ${({theme:e})=>e.sizes.fonts.md};
    padding: 0 2rem;
  `},ae=M(G)`
  flex-shrink: 0;
  width: 100%;
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

  ${({size:e="default"})=>re[e]}
`,j=v.forwardRef((e,r)=>s.jsx(se,{ref:r,...e})),c=v.forwardRef(({children:e,...r},n)=>s.jsx(ae,{ref:n,...r,children:e}));j.__docgenInfo={description:"",methods:[],displayName:"TabsList",props:{inline:{required:!1,tsType:{name:"boolean"},description:""}},composes:["TabsListPropsRoot"]};c.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{"data-state":{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof triggerSizes",elements:[{name:"literal",value:"default"},{name:"literal",value:"lg"}]},description:""}},composes:["TabsTriggerPropsRoot"]};const ue={title:"Molecules/Tabs",render:()=>s.jsxs(w,{defaultValue:"overview",children:[s.jsxs(j,{children:[s.jsx(c,{value:"overview",children:"Overview"}),s.jsx(c,{value:"sales",children:"Sales"}),s.jsx(c,{value:"products",children:"Products"}),s.jsx(c,{value:"artists",children:"Artists"})]}),s.jsx(g,{value:"overview",children:"This is the tabs content for overview"}),s.jsx(g,{value:"sales",children:"This is the tab content for sales"})]})},f={},m={render:()=>s.jsxs(w,{defaultValue:"overview",children:[s.jsxs(j,{children:[s.jsx(c,{value:"overview",size:"lg",children:"Overview"}),s.jsx(c,{value:"sales",size:"lg",children:"Sales"})]}),s.jsx(g,{value:"overview",children:"Overview content"})]})},h={render:()=>s.jsxs(w,{defaultValue:"overview",children:[s.jsxs(j,{inline:!0,children:[s.jsx(c,{value:"overview",children:"Overview"}),s.jsx(c,{value:"sales",children:"Sales"}),s.jsx(c,{value:"products",children:"Products"}),s.jsx(c,{value:"artists",children:"Artists"})]}),s.jsx(g,{value:"overview",children:"This is the tabs content for overview"}),s.jsx(g,{value:"sales",children:"This is the tab content for sales"})]})};var R,_,$;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...($=(_=f.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var P,z,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var L,E,N;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(E=h.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const ve=["Default","Large","Inline"];export{f as Default,h as Inline,m as Large,ve as __namedExportsOrder,ue as default};
