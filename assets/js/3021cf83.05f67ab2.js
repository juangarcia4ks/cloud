"use strict";(self.webpackChunkconfig_env_file_docs=self.webpackChunkconfig_env_file_docs||[]).push([[538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>N,frontMatter:()=>v,metadata:()=>g,toc:()=>w});var n=r(7462),a=r(7294),l=r(3905),o=r(6010),u=r(2389),s=r(7392),i=r(7094),c=r(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,r;const{lazy:l,block:u,defaultValue:m,values:h,groupId:b,className:y}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)?t:v[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,i.U)(),[N,O]=(0,a.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=b){const e=w[b];null!=e&&e!==N&&f.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,r=j.indexOf(t),n=f[r].value;n!==N&&(x(t),O(n),null!=b&&T(b,String(n)))},C=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;r=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var a;const t=j.indexOf(e.currentTarget)-1;r=null!=(a=j[t])?a:j[j.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},y)},f.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:C,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,u.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}const b="tabItem_Ymn6";function y(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(b,n),hidden:r},t)}const v={sidebar_position:1},f="Getting Started",g={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Let's discover how to start with the fullstack cloud project",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/cloud/docs/getting-started",draft:!1,editUrl:"https://github.com/iswilljr/cloud/tree/master/cloud-docs/docs/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Cloud - Setup",permalink:"/cloud/docs/cloud-setup"}},k={},w=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Generate the cloud",id:"generate-the-cloud",level:2},{value:"Start your site",id:"start-your-site",level:2}],T={toc:w};function N(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},T,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"Let's discover how to start with the fullstack cloud project"),(0,l.kt)("p",null,"Get started by creating the ",(0,l.kt)("strong",{parentName:"p"},"cloud"),"."),(0,l.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 14 or above:")),(0,l.kt)("h2",{id:"generate-the-cloud"},"Generate the cloud"),(0,l.kt)("p",null,"Generate the cloud site using the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/create-home-cloud"},"create home cloud")," tool."),(0,l.kt)("p",null,"You can simply start by running the next command:"),(0,l.kt)(h,{mdxType:"Tabs"},(0,l.kt)(y,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm init home-cloud@latest\n"))),(0,l.kt)(y,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create home-cloud\n")))),(0,l.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,l.kt)("p",null,"The command also installs all necessary dependencies you need to run the cloud."),(0,l.kt)("h2",{id:"start-your-site"},"Start your site"),(0,l.kt)("p",null,"Run the server:"),(0,l.kt)(h,{mdxType:"Tabs"},(0,l.kt)(y,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd server\nnpm start:build\n"))),(0,l.kt)(y,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd server\nyarn start:build\n")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"cd")," command changes the directory you're working with. In order to work with your newly created Cloud site, you'll need to navigate the terminal there."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"npm start")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn start")," command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/."))}N.isMDXComponent=!0}}]);