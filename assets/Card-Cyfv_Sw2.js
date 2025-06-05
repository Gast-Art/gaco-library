import{j as i}from"./jsx-runtime-CLpGMVip.js";import{r as g}from"./index-CR__hKHy.js";import{d as n,l as a}from"./styled-components.browser.esm-DnH8uv-2.js";import"./light-B6FA8EDq.js";import{m as o}from"./media-BIK856jo.js";import{B as x}from"./ButtonGroup-Bo3_J-q_.js";import{L as $}from"./LoadingOverlay-BgpaVta6.js";import{H as b}from"./Typography-S2Edzbnz.js";var v=(e=>(e.sm="sm",e.md="md",e.lg="lg",e))(v||{});const w=n.div`
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
`,T=n.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`,h=n.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${o.md`
    max-height: none;
`}
`,j=n(b)`
  margin-top: 0;
`,q=n.div``,L=n.div``,R=n(x)`
  justify-content: space-between;
  margin-top: 1rem;
`,r=Object.assign({},{Title:j,Content:h,LeftColumn:q,RightColumn:L,Actions:R}),A=({children:e,loading:s,error:d,info:l,size:y="md",...z})=>{let m,f,p,u,c;const C=g.Children.toArray(e).filter(t=>typeof t=="string"?!0:g.isValidElement(t)?t.type===r.Title?(m=t,!1):t.type===r.Content?(f=t,!1):t.type===r.LeftColumn?(u=t,!1):t.type===r.RightColumn?(c=t,!1):t.type===r.Actions?(p=t,!1):!0:!1);return i.jsxs(w,{$size:y,...z,children:[u,i.jsxs(T,{children:[m,f,p,C]}),c,(s||d||l)&&i.jsx($,{error:d,info:l,children:typeof s=="string"?s:void 0})]})};A.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},info:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},size:{required:!1,tsType:{name:"CardSize"},description:"",defaultValue:{value:"CardSize.md",computed:!0}}},composes:["PropsWithChildren"]};export{A as C,r as a,v as b,w as c};
