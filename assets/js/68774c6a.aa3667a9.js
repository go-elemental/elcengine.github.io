"use strict";(self.webpackChunkelcengine=self.webpackChunkelcengine||[]).push([[47],{2010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(4848),d=t(8453);const s={sidebar_position:6},o="Find One And Update",a={id:"queries/find-one-and-update",title:"Find One And Update",description:"The FindOneAndUpdate method is used to find a single document in the database and update it.",source:"@site/docs/queries/find-one-and-update.md",sourceDirName:"queries",slug:"/queries/find-one-and-update",permalink:"/docs/queries/find-one-and-update",draft:!1,unlisted:!1,editUrl:"https://github.com/elcengine/elcengine.github.io/tree/main/docs/docs/queries/find-one-and-update.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docSidebar",previous:{title:"Find One",permalink:"/docs/queries/find-one"},next:{title:"Find By ID And Update",permalink:"/docs/queries/find-by-id-and-update"}},r={},c=[{value:"Usage.",id:"usage",level:2},{value:"Usage with Options",id:"usage-with-options",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"find-one-and-update",children:"Find One And Update"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"FindOneAndUpdate"})," method is used to find a single document in the database and update it."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'witcher := WitcherModel.FindOneAndUpdate(primitive.M{"name": "Vesemir"}, primitive.M{"age": 200}).Exec().(*Witcher)\n'})}),"\n",(0,i.jsx)(n.p,{children:'The example above finds a single witcher with the name "Vesemir" and updates their age to 200 and returns the document as it was before the update.'}),"\n",(0,i.jsx)(n.h2,{id:"usage-with-options",children:"Usage with Options"}),"\n",(0,i.jsxs)(n.p,{children:["You can pass options to the ",(0,i.jsx)(n.code,{children:"FindOneAndUpdate"})," method to specify how the update operation should be performed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'opts := options.FindOneAndUpdateOptions{}\nopts.SetReturnDocument(options.After)\nwitcher := WitcherModel.FindOneAndUpdate(primitive.M{"name": "Vesemir"}, primitive.M{"age": 200}, &opts).Exec().(*Witcher)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the example above, we are passing options to the ",(0,i.jsx)(n.code,{children:"FindOneAndUpdate"})," method to return the document after the update operation has been performed."]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const d={},s=i.createContext(d);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);