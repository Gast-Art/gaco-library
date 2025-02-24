import{j as i}from"./jsx-runtime-CLpGMVip.js";import"./Button-CrgyIMAF.js";import"./ButtonGroup-DPmUNoPq.js";import{r as o}from"./index-B-SYruCi.js";import"./GlobalStyle-DVwHmu4s.js";import"./LoadingOverlay-CTt-AEPp.js";import"./Spinner-BjL8QhrX.js";import"./TextInput-ChWbvIr7.js";import"./styled-components.browser.esm-BfDsmhIA.js";const p={entries:[]},u=(e,t)=>{switch(t.type){case"addEntry":return{...e,entries:[...e.entries,t.entry]};default:return e}},y=()=>(e,t)=>u(e,t);let s;const d=()=>(s||(s=o.createContext([p,()=>{throw new Error("Collapsible timeline context isn't initialized.")}])),s),g=()=>o.useContext(d());function a({children:e}){const t=d();return i.jsx(t.Provider,{value:o.useReducer(y(),p),children:i.jsx("div",{children:e})})}a.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTimeline"};function n({timestamp:e,children:t}){const[,T]=g();return o.useEffect(()=>{T({type:"addEntry",entry:{timestamp:e}})},[e]),i.jsx("div",{children:t})}n.__docgenInfo={description:"",methods:[],displayName:"TimelineEntry"};const D={title:"Collapsible Timeline",component:a,parameters:{docs:{page:null}}};function r(){return i.jsxs(a,{children:[i.jsx(n,{timestamp:new Date().getTime()-1e3*60*60*24*14,children:"Two weeks ago"}),i.jsx(n,{timestamp:new Date().getTime()-1e3*60*60*24*7,children:"A week ago"}),i.jsx(n,{timestamp:new Date().getTime()-1e3*60*60*24*2,children:"Two days ago"}),i.jsx(n,{timestamp:new Date().getTime()-1e3*60*60*24,children:"One day ago"})]})}r.__docgenInfo={description:"",methods:[],displayName:"Basic"};var m,l,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`function Basic() {
  return <CollapsibleTimeline>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24 * 14}>Two weeks ago</TimelineEntry>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24 * 7}>A week ago</TimelineEntry>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24 * 2}>Two days ago</TimelineEntry>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24}>One day ago</TimelineEntry>
    </CollapsibleTimeline>;
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const k=["Basic"];export{r as Basic,k as __namedExportsOrder,D as default};
