"use strict";(self.webpackChunkelcengine=self.webpackChunkelcengine||[]).push([[8744],{810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(4848),o=n(8453);const i={sidebar_position:21},r="Delete One",l={id:"queries/delete-one",title:"Delete One",description:"The DeleteOne method is used to delete a single document from a collection.",source:"@site/docs/queries/delete-one.md",sourceDirName:"queries",slug:"/queries/delete-one",permalink:"/docs/queries/delete-one",draft:!1,unlisted:!1,editUrl:"https://github.com/elcengine/elcengine.github.io/tree/main/docs/docs/queries/delete-one.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"docSidebar",previous:{title:"Delete By ID",permalink:"/docs/queries/delete-by-id"},next:{title:"Delete Many",permalink:"/docs/queries/delete-many"}},c={},d=[{value:"Usage.",id:"usage",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"delete-one",children:"Delete One"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"DeleteOne"})," method is used to delete a single document from a collection."]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'result := WitcherModel.DeleteOne(primitive.M{"name": "Vesemir"}).Exec().(*mongo.DeleteResult)\n'})}),"\n",(0,s.jsxs)(t.p,{children:['The example above deletes a single witcher with the name "Vesemir" and returns the underlying ',(0,s.jsx)(t.code,{children:"*mongo.DeleteResult"})," object."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);