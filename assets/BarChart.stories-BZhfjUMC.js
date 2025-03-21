import{j as e}from"./jsx-runtime-CLpGMVip.js";import{C as y,b as h,a as l}from"./Card-D-EcyTGC.js";import{g as C,B as u,X as c,Y as x,f as j,R as f,C as v,T,L as A}from"./generateCategoricalChart-BfGTlrHe.js";import"./index-CR__hKHy.js";import"./styled-components.browser.esm-BuGJ70dT.js";import"./light-DNsJRV0f.js";import"./LoadingOverlay-By8rFo9W.js";import"./Spinner-ClvM1fzh.js";import"./Typography-BRpeQ2wu.js";import"./tiny-invariant-CopsF_GD.js";var b=C({chartName:"BarChart",GraphicalChild:u,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:c},{axisType:"yAxis",AxisComp:x}],formatAxisMap:j});const w=({active:r,payload:t,label:n,tooltipValueFormatter:i=a=>a.toString()})=>r&&t&&t.length?e.jsxs(y,{size:h.sm,children:[e.jsx(l.Title,{children:n}),e.jsx(l.Content,{children:t.map((a,o)=>e.jsx("div",{children:`${a.name}: ${i(a.value)}`},`item-${o}`))})]}):null,g=({data:r,labels:t,showLegend:n,tooltipValueFormatter:i})=>e.jsx(f,{width:"100%",height:"100%",children:e.jsxs(b,{data:r,width:500,height:300,children:[e.jsx(v,{strokeDasharray:"3 3"}),e.jsx(c,{dataKey:"name"}),e.jsx(x,{}),e.jsx(T,{content:a=>e.jsx(w,{...a,tooltipValueFormatter:i})}),n&&e.jsx(A,{}),t.map(({dataKey:a,color:o})=>e.jsx(u,{dataKey:a,fill:o},a))]})});g.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}}],raw:"{ [key: string]: any }[]"},description:""},labels:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ dataKey: string; color: string }",signature:{properties:[{key:"dataKey",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!0}}]}}],raw:"{ dataKey: string; color: string }[]"},description:""},tooltipValueFormatter:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: any) => string",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"string"}}},description:""},showLegend:{required:!1,tsType:{name:"boolean"},description:""}}};const D={title:"Atoms/BarChart",component:g,decorators:[r=>e.jsx("div",{style:{padding:"2rem",backgroundColor:"#fff",height:"480px",width:"480px"},children:e.jsx(r,{})})]},s={args:{tooltipValueFormatter:r=>`$${r}`,labels:[{dataKey:"sales",color:"red"}],data:[{name:"Jan",sales:4e3},{name:"Feb",sales:3e3},{name:"Mar",sales:2e3}]}};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tooltipValueFormatter: (value: any) => \`$\${value}\`,
    labels: [{
      dataKey: 'sales',
      color: 'red'
    }],
    data: [{
      name: 'Jan',
      sales: 4000
    }, {
      name: 'Feb',
      sales: 3000
    }, {
      name: 'Mar',
      sales: 2000
    }]
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,D as default};
