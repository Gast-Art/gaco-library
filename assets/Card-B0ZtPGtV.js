import{j as d}from"./jsx-runtime-CLpGMVip.js";import{r as g}from"./index-CR__hKHy.js";import{l as s,d as i}from"./styled-components.browser.esm-DnH8uv-2.js";import"./light-SvT5IF7k.js";import{B as C}from"./ButtonGroup-Bo3_J-q_.js";import{L as w}from"./LoadingOverlay-BHCOhALT.js";import{b as v}from"./Typography-CsgGy_ye.js";const r={xs:"400px",sm:"600px",md:"900px",lg:"1280px",xl:"1440px",xxl:"1920px"},a={xs:(...e)=>s`
    @media (min-width: ${r.xs}) {
      ${s(...e)};
    }
  `,sm:(...e)=>s`
    @media (min-width: ${r.sm}) {
      ${s(...e)};
    }
  `,md:(...e)=>s`
    @media (min-width: ${r.md}) {
      ${s(...e)};
    }
  `,lg:(...e)=>s`
    @media (min-width: ${r.lg}) {
      ${s(...e)};
    }
  `,xl:(...e)=>s`
    @media (min-width: ${r.xl}) {
      ${s(...e)};
    }
  `,xxl:(...e)=>s`
    @media (min-width: ${r.xxl}) {
      ${s(...e)};
    }
  `};var h=(e=>(e.sm="sm",e.md="md",e.lg="lg",e))(h||{});const b=i.div`
  position: relative;
  background-color: ${({theme:e})=>e.colors.contentBg};
  box-shadow: ${({theme:e})=>e.shadows.card};
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  border-radius: ${({theme:e})=>e.sizes.borderRadius};

  ${({$size:e,theme:t})=>{switch(e){case"sm":return s`
          font-size: ${t.sizes.fonts.sm};
          padding: 0.5rem;
          h3 {
            font-size: ${t.sizes.fonts.sm};
          }
          ${a.md`
            padding: 0.75rem;
            h3 {
              font-size: ${t.sizes.fonts.md};
            }
          `}
        `;case"md":default:return s`
          padding: 0.75rem;
          font-size: ${t.sizes.fonts.md};
          h3 {
            font-size: ${t.sizes.fonts.md};
          }
          ${a.md`
            padding: 1rem;
            h3 {
              font-size: ${t.sizes.fonts.lg};
            }
          `}
        `;case"lg":return s`
          padding: 1.5rem;
          font-size: ${t.sizes.fonts.md};
          h3 {
            font-size: ${t.sizes.fonts.xl};
          }
          ${a.md`
            padding: 2rem;
            h3 {
             font-size: ${t.sizes.fonts.xxl};
            }
          `}
        `}}}
`,T=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,j=i.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${a.md`
    max-height: none;
`}
`,q=i(v)`
  margin-top: 0;
`,L=i.div``,R=i.div``,A=i(C)`
  justify-content: space-between;
  margin-top: 1rem;
`,o=Object.assign({},{Title:q,Content:j,LeftColumn:L,RightColumn:R,Actions:A}),S=({children:e,loading:t,error:m,info:l,size:$="md",...y})=>{let f,p,u,c,x;const z=g.Children.toArray(e).filter(n=>typeof n=="string"?!0:g.isValidElement(n)?n.type===o.Title?(f=n,!1):n.type===o.Content?(p=n,!1):n.type===o.LeftColumn?(c=n,!1):n.type===o.RightColumn?(x=n,!1):n.type===o.Actions?(u=n,!1):!0:!1);return d.jsxs(b,{$size:$,...y,children:[(t||m||l)&&d.jsx(w,{error:m,info:l,children:typeof t=="string"?t:void 0}),c,d.jsxs(T,{children:[f,p,u,z]}),x]})};S.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},info:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"CardSize"},description:"",defaultValue:{value:"CardSize.md",computed:!0}}},composes:["PropsWithChildren"]};export{S as C,o as a,h as b,b as c};
