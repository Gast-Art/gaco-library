import{j as e}from"./jsx-runtime-CLpGMVip.js";import{C as u,b as C,a as l}from"./Card-D-EcyTGC.js";import{g as j,B as c,X as x,Y as g,f,R as v,C as T,T as A,L as b}from"./generateCategoricalChart-BfGTlrHe.js";import"./index-CR__hKHy.js";import"./styled-components.browser.esm-BuGJ70dT.js";import"./light-DNsJRV0f.js";import"./LoadingOverlay-By8rFo9W.js";import"./Spinner-ClvM1fzh.js";import"./Typography-BRpeQ2wu.js";import"./tiny-invariant-CopsF_GD.js";var q=j({chartName:"BarChart",GraphicalChild:c,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:x},{axisType:"yAxis",AxisComp:g}],formatAxisMap:f});const B=({active:a,payload:s,label:i,tooltipValueFormatter:o=r=>r.toString()})=>a&&s&&s.length?e.jsxs(u,{size:C.sm,children:[e.jsx(l.Title,{children:i}),e.jsx(l.Content,{children:s.map((r,t)=>e.jsx("div",{children:`${r.name}: ${o(r.value)}`},`item-${t}`))})]}):null,y=({data:a,labels:s,height:i=400,showLegend:o,tooltipValueFormatter:r})=>e.jsx(v,{width:"100%",height:i,children:e.jsxs(q,{data:a,children:[e.jsx(T,{strokeDasharray:"3 3"}),e.jsx(x,{dataKey:"name"}),e.jsx(g,{}),e.jsx(A,{content:t=>e.jsx(B,{...t,tooltipValueFormatter:r})}),o&&e.jsx(b,{}),s.map(({dataKey:t,color:h})=>e.jsx(c,{dataKey:t,fill:h},t))]})});y.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}}],raw:"{ [key: string]: any }[]"},description:""},labels:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ dataKey: string; color: string }",signature:{properties:[{key:"dataKey",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!0}}]}}],raw:"{ dataKey: string; color: string }[]"},description:""},tooltipValueFormatter:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: any) => string",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"string"}}},description:""},showLegend:{required:!1,tsType:{name:"boolean"},description:""},height:{defaultValue:{value:"400",computed:!1},required:!1}},composes:["Omit"]};const D={title:"Atoms/BarChart",component:y,decorators:[a=>e.jsx(u,{children:e.jsx(a,{})})]},n={args:{tooltipValueFormatter:a=>`$${a}`,labels:[{dataKey:"sales",color:"red"}],data:[{name:"Jan",sales:4e3},{name:"Feb",sales:3e3},{name:"Mar",sales:2e3}]}};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const L=["Default"];export{n as Default,L as __namedExportsOrder,D as default};
