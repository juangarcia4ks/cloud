(self.webpackChunkcloud_website=self.webpackChunkcloud_website||[]).push([[918],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=i(n),p=l,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7684:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var a=n(7462),l=n(7294),r=n(6010),o=n(3438),s=n(8596),c=n(5281),i=n(9960),m=n(4996),d=n(5999);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function g(e){let{children:t,href:n,isLast:a}=e;const r="breadcrumbs__link";return a?l.createElement("span",{className:r,itemProp:"name"},t):n?l.createElement(i.Z,{className:r,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function h(e){let{children:t,active:n,index:o,addMicrodata:s}=e;return l.createElement("li",(0,a.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(o+1)}))}function f(){const e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",p.breadcrumbsItemLink),href:e},l.createElement(u,{className:p.breadcrumbHomeIcon})))}function b(){const e=(0,o.s1)(),t=(0,s.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(f,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(h,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(g,{href:t.href,isLast:a},t.label))})))):null}},7588:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>et});var a=n(7294),l=n(6010),r=n(1944),o=n(7524),s=n(5281),c=n(4966),i=n(3120),m=n(4364),d=n(5999);function u(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(d.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function p(e){let{lastUpdatedBy:t}=e;return a.createElement(d.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:s.k.common.lastUpdated},a.createElement(d.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(u,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(p,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var h=n(7462);const f="iconEdit_eYIM";function b(e){let{className:t,...n}=e;return a.createElement("svg",(0,h.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(f,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function v(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.k.common.editThisPage},a.createElement(b,null),a.createElement(d.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var E=n(9960);const y="tag_zVej",k="tagRegular_sFm0",N="tagWithCount_h2kH";function L(e){let{permalink:t,label:n,count:r}=e;return a.createElement(E.Z,{href:t,className:(0,l.Z)(y,r?N:k)},n,r&&a.createElement("span",null,r))}const Z="tags_jXut",C="tag_QGVx";function _(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(d.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(Z,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:C},a.createElement(L,{label:t,permalink:n}))}))))}const T="lastUpdated_vbeJ";function w(e){return a.createElement("div",{className:(0,l.Z)(s.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(_,e)))}function B(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,l.Z)(s.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(v,{editUrl:t})),a.createElement("div",{className:(0,l.Z)("col",T)},(n||r)&&a.createElement(g,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:r})))}function x(e){const{content:t}=e,{metadata:n}=t,{editUrl:r,lastUpdatedAt:o,formattedLastUpdatedAt:c,lastUpdatedBy:i,tags:m}=n,d=m.length>0,u=!!(r||o||i);return d||u?a.createElement("footer",{className:(0,l.Z)(s.k.docs.docFooter,"docusaurus-mt-lg")},d&&a.createElement(w,{tags:m}),u&&a.createElement(B,{editUrl:r,lastUpdatedAt:o,lastUpdatedBy:i,formattedLastUpdatedAt:c})):null}var O=n(6668);function j(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function A(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=A({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function H(e){const t=e.getBoundingClientRect();return t.top===t.bottom?H(e.parentNode):t}function S(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>H(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(H(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function I(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,O.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function P(e){const t=(0,a.useRef)(void 0),n=I();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=S(s,{anchorTopOffset:n.current}),i=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===i)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function U(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(U,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const M=a.memo(U);function V(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:s,...c}=e;const i=(0,O.L)(),m=null!=o?o:i.tableOfContents.minHeadingLevel,d=null!=s?s:i.tableOfContents.maxHeadingLevel,u=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>A({toc:j(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:m,maxHeadingLevel:d});return P((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:m,maxHeadingLevel:d}}),[l,r,m,d])),a.createElement(M,(0,h.Z)({toc:u,className:n,linkClassName:l},c))}const D="tableOfContents_bqdL";function R(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,l.Z)(D,"thin-scrollbar",t)},a.createElement(V,(0,h.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var z=n(6043);const W="tocCollapsibleButton_TO0P",F="tocCollapsibleButtonExpanded_MG3E";function q(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,h.Z)({type:"button"},n,{className:(0,l.Z)("clean-btn",W,!t&&F,n.className)}),a.createElement(d.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const G="tocCollapsible_ETCw",J="tocCollapsibleContent_vkbj",Y="tocCollapsibleExpanded_sAul";function $(e){let{toc:t,className:n,minHeadingLevel:r,maxHeadingLevel:o}=e;const{collapsed:s,toggleCollapsed:c}=(0,z.u)({initialState:!0});return a.createElement("div",{className:(0,l.Z)(G,!s&&Y,n)},a.createElement(q,{collapsed:s,onClick:c}),a.createElement(z.z,{lazy:!0,className:J,collapsed:s},a.createElement(V,{toc:t,minHeadingLevel:r,maxHeadingLevel:o})))}var X=n(2503),K=n(7684),Q=n(3905),ee=n(5742);var te=n(2389),ne=n(2949);function ae(){const{prism:e}=(0,O.L)(),{colorMode:t}=(0,ne.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var le=n(7594),re=n.n(le);const oe=/title=(?<quote>["'])(?<title>.*?)\1/,se=/\{(?<range>[\d,-]+)\}/,ce={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function ie(e,t){const n=e.map((e=>{const{start:n,end:a}=ce[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function me(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:l,metastring:r}=t;if(r&&se.test(r)){const e=r.match(se).groups.range;if(0===l.length)throw new Error("A highlight range has been given in code block's metastring (``` "+r+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=l[0].className,a=re()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return ie(["js","jsBlock"],t);case"jsx":case"tsx":return ie(["js","jsBlock","jsx"],t);case"html":return ie(["js","jsBlock","html"],t);case"python":case"py":case"bash":return ie(["bash"],t);case"markdown":case"md":return ie(["html","jsx","bash"],t);default:return ie(Object.keys(ce),t)}}(a,l),s=n.split("\n"),c=Object.fromEntries(l.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(l.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<s.length;){const e=s[p].match(o);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?c[i[t]].range+=p+",":m[t]?c[m[t]].start=p:d[t]&&(c[d[t]].range+=c[d[t]].start+"-"+(p-1)+","),s.splice(p,1)}n=s.join("\n");const u={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;re()(n).forEach((e=>{null!=u[e]||(u[e]=[]),u[e].push(t)}))})),{lineClassNames:u,code:n}}const de="codeBlockContainer_Ckt0";function ue(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,l]=e;const r=t[a];r&&"string"==typeof l&&(n[r]=l)})),n}(ae());return a.createElement(t,(0,h.Z)({},n,{style:r,className:(0,l.Z)(n.className,de,s.k.common.codeBlock)}))}const pe={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function ge(e){let{children:t,className:n}=e;return a.createElement(ue,{as:"pre",tabIndex:0,className:(0,l.Z)(pe.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:pe.codeBlockLines},t))}const he={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var fe={Prism:n(7410).Z,theme:he};function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ve.apply(this,arguments)}var Ee=/\r\n|\r|\n/,ye=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},ke=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Ne=function(e,t){var n=e.plain,a=Object.create(null),l=e.styles.reduce((function(e,n){var a=n.languages,l=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=ve({},e[t],l);e[t]=n})),e}),a);return l.root=n,l.plain=ve({},n,{backgroundColor:null}),l};function Le(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const Ze=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),be(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Ne(e.theme,e.language):void 0;return t.themeDict=n})),be(this,"getLineProps",(function(e){var n=e.key,a=e.className,l=e.style,r=ve({},Le(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?ve({},r.style,l):l),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),be(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,l=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===l&&!a)return r[n[0]];var o=a?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(s))}})),be(this,"getTokenProps",(function(e){var n=e.key,a=e.className,l=e.style,r=e.token,o=ve({},Le(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?ve({},o.style,l):l),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),be(this,"tokenize",(function(e,t,n,a){var l={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[n];return l({tokens:function(e){for(var t=[[]],n=[e],a=[0],l=[e.length],r=0,o=0,s=[],c=[s];o>-1;){for(;(r=a[o]++)<l[o];){var i=void 0,m=t[o],d=n[o][r];if("string"==typeof d?(m=o>0?m:["plain"],i=d):(m=ke(m,d.type),d.alias&&(m=ke(m,d.alias)),i=d.content),"string"==typeof i){var u=i.split(Ee),p=u.length;s.push({types:m,content:u[0]});for(var g=1;g<p;g++)ye(s),c.push(s=[]),s.push({types:m,content:u[g]})}else o++,t.push(m),n.push(i),a.push(0),l.push(i.length)}o--,t.pop(),n.pop(),a.pop(),l.pop()}return ye(s),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),Ce="codeLine_lJS_",_e="codeLineNumber_Tfdd",Te="codeLineContent_feaV";function we(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:o,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=o({line:t,className:(0,l.Z)(n,r&&Ce)}),i=t.map(((e,t)=>a.createElement("span",(0,h.Z)({key:t},s({token:e,key:t})))));return a.createElement("span",c,r?a.createElement(a.Fragment,null,a.createElement("span",{className:_e}),a.createElement("span",{className:Te},i)):a.createElement(a.Fragment,null,i,a.createElement("br",null)))}const Be={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function xe(e){let{code:t,className:n}=e;const[r,o]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),l&&l.focus()}(t),o(!0),s.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":r?(0,d.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,d.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,Be.copyButton,r&&Be.copyButtonCopied),onClick:c},a.createElement("span",{className:Be.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:Be.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:Be.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Oe="wordWrapButtonIcon_Bwma",je="wordWrapButtonEnabled_EoeP";function Ae(e){let{className:t,onClick:n,isEnabled:r}=e;const o=(0,d.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,r&&je),"aria-label":o,title:o},a.createElement("svg",{className:Oe,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function He(e){var t;let{children:n,className:r="",metastring:o,title:s,showLineNumbers:c,language:i}=e;const{prism:{defaultLanguage:m,magicComments:d}}=(0,O.L)(),u=null!=(t=null!=i?i:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(r))?t:m,p=ae(),g=function(){const[e,t]=(0,a.useState)(!1),[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(null),o=(0,a.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[r,e]),s=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");l(n)}),[r]);return(0,a.useEffect)((()=>{s()}),[e,s]),(0,a.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:o}}(),f=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(oe))?void 0:n.groups.title)?t:""}(o)||s,{lineClassNames:b,code:v}=me(n,{metastring:o,language:u,magicComments:d}),E=null!=c?c:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(o);return a.createElement(ue,{as:"div",className:(0,l.Z)(r,u&&!r.includes("language-"+u)&&"language-"+u)},f&&a.createElement("div",{className:pe.codeBlockTitle},f),a.createElement("div",{className:pe.codeBlockContent},a.createElement(Ze,(0,h.Z)({},fe,{theme:p,code:v,language:null!=u?u:"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,l.Z)(t,pe.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,l.Z)(pe.codeBlockLines,E&&pe.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(we,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:b[t],showLineNumbers:E})))))})),a.createElement("div",{className:pe.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&a.createElement(Ae,{className:pe.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),a.createElement(xe,{className:pe.codeButton,code:v}))))}function Se(e){let{children:t,...n}=e;const l=(0,te.Z)(),r=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),o="string"==typeof r?He:ge;return a.createElement(o,(0,h.Z)({key:String(l)},n),r)}const Ie="details_lb9f",Pe="isBrowser_bmU9",Ue="collapsibleContent_i85q";function Me(e){return!!e&&("SUMMARY"===e.tagName||Me(e.parentElement))}function Ve(e,t){return!!e&&(e===t||Ve(e.parentElement,t))}function De(e){let{summary:t,children:n,...r}=e;const o=(0,te.Z)(),s=(0,a.useRef)(null),{collapsed:c,setCollapsed:i}=(0,z.u)({initialState:!r.open}),[m,d]=(0,a.useState)(r.open);return a.createElement("details",(0,h.Z)({},r,{ref:s,open:m,"data-collapsed":c,className:(0,l.Z)(Ie,o&&Pe,r.className),onMouseDown:e=>{Me(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Me(t)&&Ve(t,s.current)&&(e.preventDefault(),c?(i(!1),d(!0)):i(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(z.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{i(e),d(!e)}},a.createElement("div",{className:Ue},n)))}const Re="details_b_Ee";function ze(e){let{...t}=e;return a.createElement(De,(0,h.Z)({},t,{className:(0,l.Z)("alert alert--info",Re,t.className)}))}function We(e){return a.createElement(X.Z,e)}const Fe="containsTaskList_mC6p";const qe="img_ev3q";const Ge={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(ee.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(Se,e)},a:function(e){return a.createElement(E.Z,e)},pre:function(e){var t;return a.createElement(Se,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(ze,(0,h.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,h.Z)({},e,{className:(t=e.className,(0,l.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Fe))}));var t},img:function(e){return a.createElement("img",(0,h.Z)({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,qe))}));var t},h1:e=>a.createElement(We,(0,h.Z)({as:"h1"},e)),h2:e=>a.createElement(We,(0,h.Z)({as:"h2"},e)),h3:e=>a.createElement(We,(0,h.Z)({as:"h3"},e)),h4:e=>a.createElement(We,(0,h.Z)({as:"h4"},e)),h5:e=>a.createElement(We,(0,h.Z)({as:"h5"},e)),h6:e=>a.createElement(We,(0,h.Z)({as:"h6"},e))};function Je(e){let{children:t}=e;return a.createElement(Q.Zo,{components:Ge},t)}const Ye="docItemContainer_Adtb",$e="docItemCol_GujU",Xe="tocMobile_aoJ5";function Ke(e){var t;const{content:n}=e,{metadata:l,frontMatter:o,assets:s}=n,{keywords:c}=o,{description:i,title:m}=l,d=null!=(t=s.image)?t:o.image;return a.createElement(r.d,{title:m,description:i,keywords:c,image:d})}function Qe(e){const{content:t}=e,{metadata:n,frontMatter:r}=t,{hide_title:d,hide_table_of_contents:u,toc_min_heading_level:p,toc_max_heading_level:g}=r,{title:h}=n,f=!d&&void 0===t.contentTitle,b=(0,o.i)(),v=!u&&t.toc&&t.toc.length>0,E=v&&("desktop"===b||"ssr"===b);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,l.Z)("col",!u&&$e)},a.createElement(i.Z,null),a.createElement("div",{className:Ye},a.createElement("article",null,a.createElement(K.Z,null),a.createElement(m.Z,null),v&&a.createElement($,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:g,className:(0,l.Z)(s.k.docs.docTocMobile,Xe)}),a.createElement("div",{className:(0,l.Z)(s.k.docs.docMarkdown,"markdown")},f&&a.createElement("header",null,a.createElement(X.Z,{as:"h1"},h)),a.createElement(Je,null,a.createElement(t,null))),a.createElement(x,e)),a.createElement(c.Z,{previous:n.previous,next:n.next}))),E&&a.createElement("div",{className:"col col--3"},a.createElement(R,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:g,className:s.k.docs.docTocDesktop})))}function et(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(r.FG,{className:t},a.createElement(Ke,e),a.createElement(Qe,e))}},4966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7462),l=n(7294),r=n(5999),o=n(6010),s=n(9960);function c(e){const{permalink:t,title:n,subLabel:a,isNext:r}=e;return l.createElement(s.Z,{className:(0,o.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&l.createElement("div",{className:"pagination-nav__sublabel"},a),l.createElement("div",{className:"pagination-nav__label"},n))}function i(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(c,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(7294),l=n(6010),r=n(5999),o=n(4477),s=n(5281);function c(e){let{className:t}=e;const n=(0,o.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3120:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(7294),l=n(6010),r=n(2263),o=n(9960),s=n(5999),c=n(143),i=n(373),m=n(5281),d=n(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function g(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:n,onClick:l},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,r.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,i.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:h}=(0,c.Jo)(s),f=null!=u?u:(b=h).docs.find((e=>e.id===b.mainDocId));var b;return a.createElement("div",{className:(0,l.Z)(t,m.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(p,{siteTitle:o,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(g,{versionLabel:h.label,to:f.path,onClick:()=>d(h.name)})))}function f(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(h,{className:t,versionMetadata:n}):null}},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),o=n(5999),s=n(6668);const c="anchorWithStickyNavbar_LWe7",i="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();return"h1"!==t&&n?l.createElement(t,(0,a.Z)({},m,{className:(0,r.Z)("anchor",d?i:c),id:n}),m.children,l.createElement("a",{className:"hash-link",href:"#"+n,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,a.Z)({},m,{id:void 0}))}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,l,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);