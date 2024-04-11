"use strict";(self.webpackChunknanc_docs=self.webpackChunknanc_docs||[]).push([[8868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:6},i="Tag converter",s={unversionedId:"modules/tag_converter",id:"modules/tag_converter",title:"Tag converter",description:"Import",source:"@site/docs/modules/tag_converter.md",sourceDirName:"modules",slug:"/modules/tag_converter",permalink:"/docs/modules/tag_converter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/tag_converter.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Nanc tools",permalink:"/docs/modules/nanc_tools"},next:{title:"Api packages",permalink:"/docs/category/api-packages"}},c={},l=[{value:"Import",id:"import",level:2},{value:"Using",id:"using",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tag-converter"},"Tag converter"),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("p",null,"Install it from ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/tag_converter"},"pub.dev"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  tag_converter: any\n")),(0,o.kt)("h2",{id:"using"},"Using"),(0,o.kt)("p",null,"This package is designed to convert Nui-XML code to JSON and/or Protobuf format. This can be useful for reducing the size of the message being passed, faster rendering and possible unification. In addition, you can use, for example, the resulting JSON to generate similar interfaces using the backend immediately in JSON format, knowing its structure."),(0,o.kt)("p",null,"The most optimized form of Nui, in turn, is Protobuf, which provides much faster rendering speed in a mobile application. However, this does not mean that the standard way of rendering from XML is slow. No. It's just that Protobuf is much faster."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tag_converter")," depends only on Dart, which makes it easy to run on the server, embedding it in your call processing chains."),(0,o.kt)("p",null,"To learn all the features of ",(0,o.kt)("inlineCode",{parentName:"p"},"tag_converter")," install this package as a dependency in your project, and run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dart run tag_converter:convert --help # for help\n# or\ndart run tag_converter:convert --input ./path_to_some_file_with_nui_xml.html \\\n      --output ./path_to_output_folder \\\n      --name output_file_name \\\n      --proto \\\n      --json\n")),(0,o.kt)("p",null,"Or, just run the script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dart ./tag_converter/bin/convert.dart --help\n")))}d.isMDXComponent=!0}}]);