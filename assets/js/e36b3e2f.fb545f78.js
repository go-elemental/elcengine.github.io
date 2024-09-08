"use strict";(self.webpackChunkelcengine=self.webpackChunkelcengine||[]).push([[4403],{1021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(4848),o=n(8453);const i={sidebar_position:2},c="Decrement",d={id:"querybuilder/update-operations/decrement",title:"Decrement",description:"The Dec method can be chained to a query to decrement the value of a field in the documents that match the query.",source:"@site/docs/querybuilder/update-operations/decrement.md",sourceDirName:"querybuilder/update-operations",slug:"/querybuilder/update-operations/decrement",permalink:"/docs/querybuilder/update-operations/decrement",draft:!1,unlisted:!1,editUrl:"https://github.com/elcengine/elcengine.github.io/tree/main/docs/docs/querybuilder/update-operations/decrement.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"Increment",permalink:"/docs/querybuilder/update-operations/increment"},next:{title:"Multiply",permalink:"/docs/querybuilder/update-operations/multiply"}},a={},s=[{value:"Usage",id:"usage",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"decrement",children:"Decrement"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Dec"})," method can be chained to a query to decrement the value of a field in the documents that match the query."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'result := WitcherModel.Where("name", "Vesemir").Dec("age", 1).Exec().(*mongo.UpdateResult)\n'})}),"\n",(0,r.jsx)(t.p,{children:"In the example above, we are decrementing the age of the witcher named Vesemir by 1."})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(6540);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);