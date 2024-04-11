"use strict";(self.webpackChunknanc_docs=self.webpackChunknanc_docs||[]).push([[2710],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4337:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_position:3},r="App Configuration",s={unversionedId:"app_configuring",id:"app_configuring",title:"App Configuration",description:"All you need to start using the Nanc Server driven UI in your application is to install the nui package, and use one of the two widgets it exports:",source:"@site/docs/app_configuring.md",sourceDirName:".",slug:"/app_configuring",permalink:"/docs/app_configuring",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/app_configuring.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CMS Configuration",permalink:"/docs/cms_configuration"},next:{title:"Modules",permalink:"/docs/category/modules"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Using",id:"using",level:2},{value:"Configuring",id:"configuring",level:2},{value:"Custom fonts",id:"custom-fonts",level:3},{value:"Custom icons",id:"custom-icons",level:3},{value:"Renderers",id:"renderers",level:3},{value:"Images",id:"images",level:3},{value:"Slivers",id:"slivers",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app-configuration"},"App Configuration"),(0,o.kt)("p",null,"All you need to start using the Nanc Server driven UI in your application is to install the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://pub.dev/packages/nui"},(0,o.kt)("inlineCode",{parentName:"a"},"nui")))," package, and use one of the two widgets it exports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NuiStackWidget")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NuiListWidget"))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"nui")," package, you should add next string to your ",(0,o.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  nui: any # or specific version\n")),(0,o.kt)("p",null,"Keep in mind that the major version of ",(0,o.kt)("inlineCode",{parentName:"p"},"nui")," should always match the major version of ",(0,o.kt)("inlineCode",{parentName:"p"},"nanc"),", which you want to support."),(0,o.kt)("p",null,"That is, all packages of version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.x.x")," will always be compatible with each other, just as packages of version ",(0,o.kt)("inlineCode",{parentName:"p"},"2.x.x"),", and so on."),(0,o.kt)("h2",{id:"using"},"Using"),(0,o.kt)("p",null,"Now, you can use one of two built-in widgets, which supports rendering of Nanc XML. Let's assume, that we want to create a default Flutter Counter App. There are how it would will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\nimport 'package:nui/nui.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Nui App',\n      theme: ThemeData(\n        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),\n      ),\n      home: const MyHomePage(title: 'Nui Demo App'),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({\n    required this.title,\n    super.key,\n  });\n\n  final String title;\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Theme.of(context).colorScheme.inversePrimary,\n        title: Text(widget.title),\n      ),\n      body: Center(\n        child: NuiStackWidget(\n          renderers: const [],\n          imageErrorBuilder: null,\n          imageFrameBuilder: null,\n          imageLoadingBuilder: null,\n          binary: null,\n          nodes: null,\n          xmlContent: '''\n<center>\n  <column mainAxisSize=\"min\">\n    <text size=\"18\" align=\"center\">\n      You have pushed the button\\nthis many times:\n    </text>\n    <text size=\"32\">\n      {{ page.counter }}\n    </text>\n  </column>\n</center>\n''',\n          pageData: {\n            'counter': _counter,\n          },\n        ),\n      ),\n      floatingActionButton: FloatingActionButton(\n        onPressed: _incrementCounter,\n        tooltip: 'Increment',\n        child: const Icon(Icons.add),\n      ),\n    );\n  }\n}\n")),(0,o.kt)("h2",{id:"configuring"},"Configuring"),(0,o.kt)("h3",{id:"custom-fonts"},"Custom fonts"),(0,o.kt)("p",null,"If you already use custom fonts in Nanc, you need to register them in the mobile app as well."),(0,o.kt)("p",null,"This procedure is quite simple:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to declare fonts in pubspec, according to the standard registration flow, which you can find, for example, in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/cookbook/design/fonts"},"official documentation"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"flutter:\n  uses-material-design: true\n  fonts:\n    - family: Blazeface\n      fonts:\n        - asset: assets/fonts/blazeface.ttf\n    - family: Helvetica\n      fonts:\n        - asset: assets/fonts/helvetica.ttf\n          weight: 400\n        - asset: assets/fonts/helvetica_light.ttf\n          weight: 300\n        - asset: assets/fonts/helvetica_bold.ttf\n          weight: 500\n    - family: Helvetica Neue\n      fonts:\n        - asset: assets/fonts/helvetica_neue_wide.ttf\n          weight: 400\n        - asset: assets/fonts/helvetica_neue_light.ttf\n          weight: 300\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to register the used fonts with the ",(0,o.kt)("inlineCode",{parentName:"li"},"FontsStorage")," class from the ",(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/nanc_fonts"},(0,o.kt)("inlineCode",{parentName:"a"},"nanc_fonts"))," ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"modules/nanc_fonts"},"package")),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:nanc_fonts/nanc_fonts.dart';\n\nvoid main() {\n  FontsStorage.registerCustomFonts(\n    [\n      const CustomFont(font: 'Blazeface'),\n      const CustomFont(font: 'Helvetica'),\n      const CustomFont(font: 'Helvetica Neue'),\n      const CustomFont(font: 'SomeAnotherFont', package: 'another_package'),\n    ],\n  );\n}\n")),(0,o.kt)("p",null,"You can do this, for example, when initializing an application. If you want to use fonts from another package, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"package")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomFont")," class to specify the name of this third-party package."),(0,o.kt)("h3",{id:"custom-icons"},"Custom icons"),(0,o.kt)("p",null,"If you want to use custom icons, you will also need to register them. Registration of icons in Nanc is described in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./cms_configuration"},"CMS configuration"))," section. To do the same in the application, you should use ",(0,o.kt)("inlineCode",{parentName:"p"},"IconsStorage")," class from ",(0,o.kt)("a",{parentName:"p",href:"modules/nanc_icons"},(0,o.kt)("inlineCode",{parentName:"a"},"nanc_icons"))," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://pub.dev/packages/nanc_icons"},"package")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:ionicons/ionicons.dart';\nimport 'package:nanc_icons/nanc_icons.dart';\n\n\nvoid main() {\n  /*\n  Originally, there are a map of strings, but String-value is an encoded character number from the icon font\n\n  const ioniconsMapping = {\n    \"accessibility-outline\": \"0xea01\",\n    \"accessibility-sharp\": \"0xea02\",\n    \"accessibility\": \"0xea03\",\n    ...\n  };\n   */\n  final Map<String, IconData> customIcons = ioniconsMapping.map(\n    (String key, String value) => MapEntry(\n      'ionic_${key.replaceAll('-', '_')}',\n      IoniconsData(\n        int.parse(value),\n      ),\n    ),\n  );\n\n  IconsStorage.registerCustomIcons({\n    'cup_collections': CupertinoIcons.collections,\n    ...customIcons,\n  });\n}\n")),(0,o.kt)("p",null,"Most off-the-shelf icon packages have some way to get an object of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Map<String, IconData>"),", such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"ionicons")," package offers - giving us access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ioniconsMapping")," variable, which, however, still needs to be refined to be usable for our purposes."),(0,o.kt)("p",null,"Also, it is highly recommended that you add some kind of global prefix to your icons packages. First of all, it will be easier to find only those icons that are included in a certain package, and secondly, it will reduce the risk of collision of names of icons from different packages, which can happen, considering that even in the standard Nanc package there are many thousands of icons."),(0,o.kt)("h3",{id:"renderers"},"Renderers"),(0,o.kt)("p",null,"You can add your own custom ",(0,o.kt)("inlineCode",{parentName:"p"},"renderers"),", the same extra-modules, which you can use in the Nanc configuration to extend support of new widgets, which will be rendered from your own new tags."),(0,o.kt)("h3",{id:"images"},"Images"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"imageErrorBuilder"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"imageFrameBuilder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"imageLoadingBuilder")," for customizing logic of rendering images. It's the same thing as ",(0,o.kt)("inlineCode",{parentName:"p"},"imageBuilderDelegate")," from the Nanc config, but not wrapped into the class - only functions."),(0,o.kt)("h3",{id:"slivers"},"Slivers"),(0,o.kt)("p",null,"If you want to implement your own tags for sliver widgets, and then use them in ",(0,o.kt)("inlineCode",{parentName:"p"},"NuiListWidget")," - you need to pass in this widget and a checker function that will check if a certain widget is a sliver. And your slivers, of course, should be such according to the result of this function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"// ...\nWidget build() {\n  return NuiListWidget(\n    // ...\n    sliverChecker: yourSliverCheckerHere,\n  );\n}\n")))}d.isMDXComponent=!0}}]);