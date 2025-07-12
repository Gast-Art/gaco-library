import{j as e}from"./jsx-runtime-CLpGMVip.js";import{B as h}from"./Badge-HCZ8X8oc.js";import{B as x}from"./Button-larrAZSz.js";import{d as g}from"./styled-components.browser.esm-DnH8uv-2.js";import{c as b,C as j,a as t}from"./Card-BZJNavl1.js";import{L as y}from"./LoadingOverlay-DHqfL-vV.js";import"./index-CR__hKHy.js";import"./Spinner-xLrCEoRn.js";import"./light-CHoHqcPY.js";import"./media-BIK856jo.js";import"./ButtonGroup-Bo3_J-q_.js";import"./Typography-D15xktn9.js";import"./info-BBH6Osln.js";import"./createLucideIcon-BOMFEwrg.js";const L=r=>e.jsxs(j,{onClick:r.onClick,className:r.className,size:r.size,children:[r.title&&e.jsx(t.Title,{children:r.title}),r.content&&e.jsx(t.Content,{children:r.content}),r.rightColumn&&e.jsx(t.RightColumn,{children:r.rightColumn}),r.leftColumn&&e.jsx(t.LeftColumn,{children:r.leftColumn})]}),$=g(y)`
  border-radius: ${({theme:r})=>r.sizes.borderRadius};
`,v=g.div`
  position: relative;

  > ${b} {
    border-radius: 0;
    border-bottom: 1px solid ${({theme:r})=>r.colors.grayLighter};

    &:first-of-type {
      border-top-left-radius: ${({theme:r})=>r.sizes.borderRadius};
      border-top-right-radius: ${({theme:r})=>r.sizes.borderRadius};
    }

    &:last-of-type {
      border-bottom-left-radius: ${({theme:r})=>r.sizes.borderRadius};
      border-bottom-right-radius: ${({theme:r})=>r.sizes.borderRadius};
      border: 0;
    }
  }
`,f=({children:r,cards:o,loading:s})=>e.jsxs(v,{children:[o==null?void 0:o.map(a=>e.jsx(L,{...a},a.id)),r,s&&e.jsx($,{children:typeof s=="string"?s:""})]});f.__docgenInfo={description:"",methods:[],displayName:"CardList",props:{cards:{required:!1,tsType:{name:"Array",elements:[{name:"CardProps"}],raw:"CardProps[]"},description:""},loading:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},columns:{required:!1,tsType:{name:"number"},description:""}},composes:["PropsWithChildren"]};const C=r=>{const o=[];for(let s=0;s<r;s++)o.push({id:s,title:`Card ${s}`,content:`This is card ${s}'s content. Lorum fucking ipsum. Dolores sit amet.`,rightColumn:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx("p",{style:{fontSize:10},children:"Data 1/1/25"}),e.jsx(h,{variant:"success",children:"Success"})]}),e.jsx(x,{variant:"outline",children:"Action"})]})});return o},E={title:"Molecules/CardList",component:f,decorators:[r=>e.jsx("div",{style:{width:"480px"},children:e.jsx(r,{})})]},i={args:{cards:C(5)}},n={args:{cards:C(5),loading:"Loading cards..."}};var d,l,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    cards: generateCards(5)
  }
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    cards: generateCards(5),
    loading: 'Loading cards...'
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const I=["Default","Loading"];export{i as Default,n as Loading,I as __namedExportsOrder,E as default};
