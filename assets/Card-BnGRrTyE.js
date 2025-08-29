import{j as i}from"./jsx-runtime-DPtPVAOg.js";import{r as y}from"./index-CR__hKHy.js";import{d as t,l as a}from"./styled-components.browser.esm-DnH8uv-2.js";import"./light-DG7axscF.js";import{m as o}from"./media-BIK856jo.js";import{B as $}from"./ButtonGroup-Bo3_J-q_.js";import{L as v}from"./LoadingOverlay-BbpqPbfZ.js";import{H as b}from"./Typography-CraxGhaZ.js";var w=(e=>(e.sm="sm",e.md="md",e.lg="lg",e))(w||{});const h=t.div`
  position: relative;
  background-color: ${({theme:e})=>e.colors.contentBg};
  box-shadow: ${({theme:e})=>e.shadows.card};
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  border-radius: ${({theme:e})=>e.sizes.borderRadius};

  ${({$size:e,theme:s})=>{switch(e){case"sm":return a`
          font-size: ${s.sizes.fonts.sm};
          padding: 0.5rem;
          h3 {
            font-size: ${s.sizes.fonts.sm};
          }
          ${o.md`
            padding: 0.75rem;
            h3 {
              font-size: ${s.sizes.fonts.md};
            }
          `}
        `;case"md":default:return a`
          padding: 0.75rem;
          font-size: ${s.sizes.fonts.md};
          h3 {
            font-size: ${s.sizes.fonts.md};
          }
          ${o.md`
            padding: 1rem;
            h3 {
              font-size: ${s.sizes.fonts.lg};
            }
          `}
        `;case"lg":return a`
          padding: 1.5rem;
          font-size: ${s.sizes.fonts.md};
          h3 {
            font-size: ${s.sizes.fonts.xl};
          }
          ${o.md`
            padding: 2rem;
            h3 {
             font-size: ${s.sizes.fonts.xxl};
            }
          `}
        `}}}
`,T=t.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`,q=t.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${o.md`
    max-height: none;
`}
`,j=t(b)`
  margin-top: 0;

  svg {
    display: none;
    height: 1rem;
    width: 1rem;
    color: ${({theme:e})=>e.colors.textMuted};
    vertical-align: middle;
    margin-left: 0.5rem;
  }

  ${o.md`
    svg {
      display: inline;
    }
  `}
`,L=t.div``,R=t.div``,A=t($)`
  justify-content: space-between;
  margin-top: 1rem;
`,r=Object.assign({},{Title:j,Content:q,LeftColumn:L,RightColumn:R,Actions:A}),S=({children:e,loading:s,error:l,info:d,success:m,size:z="md",...C})=>{let f,p,u,g,c;const x=y.Children.toArray(e).filter(n=>typeof n=="string"?!0:y.isValidElement(n)?n.type===r.Title?(f=n,!1):n.type===r.Content?(p=n,!1):n.type===r.LeftColumn?(g=n,!1):n.type===r.RightColumn?(c=n,!1):n.type===r.Actions?(u=n,!1):!0:!1);return i.jsxs(h,{$size:z,...C,children:[g,i.jsxs(T,{children:[f,p,u,x]}),c,(s||l||d||m)&&i.jsx(v,{error:l,info:d,success:m,children:typeof s=="string"?s:void 0})]})};S.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},success:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},info:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},size:{required:!1,tsType:{name:"CardSize"},description:"",defaultValue:{value:"CardSize.md",computed:!0}}},composes:["PropsWithChildren"]};export{S as C,r as a,w as b,h as c};
