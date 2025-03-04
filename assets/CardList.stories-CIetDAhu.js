import{j as r}from"./jsx-runtime-CLpGMVip.js";import{B as p}from"./Badge-B1wlehD1.js";import{B as c}from"./Button-CLcXjLYD.js";import{d as u}from"./styled-components.browser.esm-BT5p091k.js";import{b as f,C,a as o}from"./Card-BfPxtOZN.js";import"./index-CZMpeKRu.js";import"./Spinner-CTzpbX4O.js";import"./light-62K-jGsB.js";import"./Typography-wHrdrdFw.js";const h=e=>r.jsxs(C,{onClick:e.onClick,className:e.className,children:[e.title&&r.jsx(o.Title,{children:e.title}),e.content&&r.jsx(o.Content,{children:e.content}),e.rightColumn&&r.jsx(o.RightColumn,{children:e.rightColumn}),e.leftColumn&&r.jsx(o.LeftColumn,{children:e.leftColumn})]}),x=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  > ${f} {
    border-radius: 0;
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayLighter};

    &:first-of-type {
      border-top-left-radius: ${({theme:e})=>e.sizes.borderRadius};
      border-top-right-radius: ${({theme:e})=>e.sizes.borderRadius};
    }

    &:last-of-type {
      border-bottom-left-radius: ${({theme:e})=>e.sizes.borderRadius};
      border-bottom-right-radius: ${({theme:e})=>e.sizes.borderRadius};
      border: 0;
    }
  }
`,m=({children:e,cards:s,columns:t=1})=>r.jsxs(x,{children:[s==null?void 0:s.map(n=>r.jsx(h,{...n},n.id)),e]});m.__docgenInfo={description:"",methods:[],displayName:"CardList",props:{cards:{required:!1,tsType:{name:"Array",elements:[{name:"CardProps"}],raw:"CardProps[]"},description:""},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}},composes:["PropsWithChildren"]};const g=e=>{const s=[];for(let t=0;t<e;t++)s.push({id:t,title:`Card ${t}`,content:`This is card ${t}'s content. Lorum fucking ipsum. Dolores sit amet.`,rightColumn:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[r.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[r.jsx("p",{style:{fontSize:10},children:"Data 1/1/25"}),r.jsx(p,{variant:"success",children:"Success"})]}),r.jsx(c,{variant:"outline",children:"Action"})]})});return s},B={title:"Molecules/CardList",component:m,decorators:[e=>r.jsx("div",{style:{width:"480px"},children:r.jsx(e,{})})]},i={args:{cards:g(5)}};var a,d,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    cards: generateCards(5)
  }
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const S=["Default"];export{i as Default,S as __namedExportsOrder,B as default};
