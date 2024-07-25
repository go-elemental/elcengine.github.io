"use strict";(self.webpackChunkelcengine=self.webpackChunkelcengine||[]).push([[8936],{6155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(4848),s=n(8453);const r={sidebar_position:19},d="Delete",o={id:"queries/delete",title:"Delete",description:"The Delete method is used to delete a given document in the database.",source:"@site/docs/queries/delete.md",sourceDirName:"queries",slug:"/queries/delete",permalink:"/docs/queries/delete",draft:!1,unlisted:!1,editUrl:"https://github.com/elcengine/elcengine.github.io/tree/main/docs/docs/queries/delete.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"docSidebar",previous:{title:"Find By ID And Delete",permalink:"/docs/queries/find-by-id-and-delete"},next:{title:"Delete By ID",permalink:"/docs/queries/delete-by-id"}},c={},l=[{value:"Usage.",id:"usage",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"delete",children:"Delete"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Delete"})," method is used to delete a given document in the database."]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'witcherToDelete := WitcherModel.FindOne(Witcher{\n    Name: "Vesemir",\n    Age: 200,\n}).Exec().(*Witcher)\ndeletedWitcher := WitcherModel.Delete(*witcherToDelete).Exec().(Witcher)\n'})}),"\n",(0,i.jsx)(t.p,{children:'The example above deletes the witcher with the name "Vesemir" and age 200.'})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);