"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1227],{3250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(4848),r=n(8453);const i={title:"Prompts",sidebar_position:2,slug:"/components-prompts"},o="Prompts",a={id:"Components/components-prompts",title:"Prompts",description:"A prompt serves as the input to a language model, comprising multiple components that can be parameterized using prompt templates.",source:"@site/docs/Components/components-prompts.md",sourceDirName:"Components",slug:"/components-prompts",permalink:"/components-prompts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Prompts",sidebar_position:2,slug:"/components-prompts"},sidebar:"defaultSidebar",previous:{title:"Inputs & Outputs",permalink:"/components-io"},next:{title:"Data",permalink:"/components-data"}},l={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Langchain Hub Prompt Template",id:"langchain-hub-prompt-template",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Inputs",id:"inputs-1",level:4},{value:"Outputs",id:"outputs-1",level:4}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"prompts",children:"Prompts"}),"\n",(0,s.jsx)(t.p,{children:"A prompt serves as the input to a language model, comprising multiple components that can be parameterized using prompt templates."}),"\n",(0,s.jsx)(t.p,{children:"Prompt templates provide a systematic approach for generating prompts, allowing for reproducible customization through defined input variables."}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.h4,{id:"inputs",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Display Name"}),(0,s.jsx)(t.th,{children:"Info"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"template"}),(0,s.jsx)(t.td,{children:"Template"}),(0,s.jsx)(t.td,{children:"Create a prompt template with dynamic variables."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"outputs",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Display Name"}),(0,s.jsx)(t.th,{children:"Info"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prompt"}),(0,s.jsx)(t.td,{children:"Prompt Message"}),(0,s.jsxs)(t.td,{children:["The built prompt message returned by the ",(0,s.jsx)(t.code,{children:"build_prompt"})," method."]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"langchain-hub-prompt-template",children:"Langchain Hub Prompt Template"}),"\n",(0,s.jsxs)(t.p,{children:["This component fetches prompts from the ",(0,s.jsx)(t.a,{href:"https://docs.smith.langchain.com/old/category/prompt-hub",children:"Langchain Hub"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:['When a prompt is loaded, the component generates input fields for custom variables. For example, the default prompt "efriis/my-first-prompt" generates fields for ',(0,s.jsx)(t.code,{children:"profession"})," and ",(0,s.jsx)(t.code,{children:"question"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsx)(t.h4,{id:"inputs-1",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Display Name"}),(0,s.jsx)(t.th,{children:"Info"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"langchain_api_key"}),(0,s.jsx)(t.td,{children:"Your LangChain API Key"}),(0,s.jsx)(t.td,{children:"The LangChain API Key to use."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"langchain_hub_prompt"}),(0,s.jsx)(t.td,{children:"LangChain Hub Prompt"}),(0,s.jsx)(t.td,{children:"The LangChain Hub prompt to use."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"outputs-1",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Display Name"}),(0,s.jsx)(t.th,{children:"Info"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prompt"}),(0,s.jsx)(t.td,{children:"Build Prompt"}),(0,s.jsxs)(t.td,{children:["The built prompt message returned by the ",(0,s.jsx)(t.code,{children:"build_prompt"})," method."]})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);