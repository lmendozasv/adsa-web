(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1002:function(e,t,a){"use strict";var n=a(3),r=a(5),l=a(0),o=(a(7),a(6)),c=a(8),i=a(20),s=l.forwardRef(function(e,t){var a=e.absolute,c=void 0!==a&&a,i=e.classes,s=e.className,m=e.component,d=void 0===m?"hr":m,u=e.flexItem,p=void 0!==u&&u,b=e.light,f=void 0!==b&&b,h=e.orientation,g=void 0===h?"horizontal":h,E=e.role,v=void 0===E?"hr"!==d?"separator":void 0:E,y=e.variant,j=void 0===y?"fullWidth":y,w=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return l.createElement(d,Object(n.a)({className:Object(o.a)(i.root,s,"fullWidth"!==j&&i[j],c&&i.absolute,p&&i.flexItem,f&&i.light,"vertical"===g&&i.vertical),role:v,ref:t},w))});t.a=Object(c.a)(function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(i.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}},{name:"MuiDivider"})(s)},1003:function(e,t,a){"use strict";var n=a(3),r=a(5),l=a(0),o=(a(7),a(6)),c=a(196),i=a(8),s=l.forwardRef(function(e,t){var a=e.classes,i=e.className,s=e.raised,m=void 0!==s&&s,d=Object(r.a)(e,["classes","className","raised"]);return l.createElement(c.a,Object(n.a)({className:Object(o.a)(a.root,i),elevation:m?8:1,ref:t},d))});t.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1004:function(e,t,a){"use strict";var n=a(3),r=a(5),l=a(0),o=(a(7),a(6)),c=a(8),i=l.forwardRef(function(e,t){var a=e.classes,c=e.className,i=e.component,s=void 0===i?"div":i,m=Object(r.a)(e,["classes","className","component"]);return l.createElement(s,Object(n.a)({className:Object(o.a)(a.root,c),ref:t},m))});t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},1005:function(e,t,a){"use strict";var n=a(3),r=a(60),l=a(5),o=a(0),c=(a(264),a(7),a(6)),i=a(8),s=a(112),m=a(20),d=a(76),u=Object(d.a)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=a(263);var b=Object(i.a)(function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}},{name:"PrivateBreadcrumbCollapsed"})(function(e){var t=e.classes,a=Object(l.a)(e,["classes"]);return o.createElement(p.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),o.createElement(u,{className:t.icon}))});var f=o.forwardRef(function(e,t){var a=e.children,i=e.classes,m=e.className,d=e.component,u=void 0===d?"nav":d,p=e.expandText,f=void 0===p?"Show path":p,h=e.itemsAfterCollapse,g=void 0===h?1:h,E=e.itemsBeforeCollapse,v=void 0===E?1:E,y=e.maxItems,j=void 0===y?8:y,w=e.separator,O=void 0===w?"/":w,x=Object(l.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=o.useState(!1),B=k[0],N=k[1],C=o.Children.toArray(a).filter(function(e){return o.isValidElement(e)}).map(function(e,t){return o.createElement("li",{className:i.li,key:"child-".concat(t)},e)});return o.createElement(s.a,Object(n.a)({ref:t,component:u,color:"textSecondary",className:Object(c.a)(i.root,m)},x),o.createElement("ol",{className:i.ol},function(e,t,a){return e.reduce(function(n,r,l){return l<e.length-1?n=n.concat(r,o.createElement("li",{"aria-hidden":!0,key:"separator-".concat(l),className:t},a)):n.push(r),n},[])}(B||j&&C.length<=j?C:function(e){return v+g>=e.length?e:[].concat(Object(r.a)(e.slice(0,v)),[o.createElement(b,{"aria-label":f,key:"ellipsis",onClick:function(e){N(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-g,e.length)))}(C),i.separator,O)))});t.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},2693:function(e,t,a){"use strict";a.r(t);var n,r=a(16),l=a(0),o=a.n(l),c=a(15),i=a(99),s=a(124),m=a.n(s),d=a(1003),u=a(1002),p=a(1005),b=a(112),f=a(1004),h=a(325),g=a(65),E=a(948),v=o.a.forwardRef(function(e,t){return o.a.createElement(i.d,Object.assign({innerRef:t},e))}),y=Object(c.c)(d.a)(E.b),j=Object(c.c)(u.a)(E.b),w=Object(c.c)(p.a)(E.b),O=Object(c.c)(b.a)(E.b),x=c.c.pre(n||(n=Object(r.a)(["\n  margin-bottom: 0;\n"])));function k(){return o.a.createElement(y,{mb:6},o.a.createElement(f.a,null,o.a.createElement(O,{variant:"h6",gutterBottom:!0},"Introduction"),o.a.createElement(O,{variant:"body1",gutterBottom:!0,my:4},"Hey, I hope you find this theme useful. Material App has been crafted on top of Material UI. The included docs don't replace the official ones, but provide a clear view of all new components and extended styles that this theme provides on top of Material UI."),o.a.createElement(O,{variant:"body2",gutterBottom:!0,my:4},"The docs includes information to understand how the theme is organized, how to compile and extend it to fit your needs, and how to make changes to the source code.")))}function B(){return o.a.createElement(y,{mb:6},o.a.createElement(f.a,null,o.a.createElement(O,{variant:"h6",gutterBottom:!0},"Contents"),o.a.createElement(O,{variant:"body2",gutterBottom:!0,my:4},"Inside the zip-file you'll find the following directories and files. Both compiled and minified distrubution files, as well as the source files are included in the package."),o.a.createElement(x,null,"theme/\n  \u251c\u2500\u2500 .gitignore\n  \u251c\u2500\u2500 package.json\n  \u251c\u2500\u2500 package-lock.json\n  \u251c\u2500\u2500 README.md\n  \u251c\u2500\u2500 build/\n  \u251c\u2500\u2500 public/\n  \u2502   \u251c\u2500\u2500 index.html\n  \u2502   \u2514\u2500\u2500 manifest.json\n  \u2514\u2500\u2500 src/\n      \u251c\u2500\u2500 components/\n      \u251c\u2500\u2500 layouts/\n      \u251c\u2500\u2500 pages/\n      \u251c\u2500\u2500 redux/\n      \u251c\u2500\u2500 routes/\n      \u251c\u2500\u2500 vendor/\n      \u251c\u2500\u2500 App.js\n      \u251c\u2500\u2500 index.js\n      \u2514\u2500\u2500 theme.js")))}function N(){return o.a.createElement(y,{mb:6},o.a.createElement(f.a,null,o.a.createElement(O,{variant:"h6",gutterBottom:!0},"Quick start"),o.a.createElement(O,{variant:"body2",gutterBottom:!0,my:4},"This project was bootstrapped with"," ",o.a.createElement(h.a,{href:"https://github.com/facebook/create-react-app",target:"_blank"},"Create React App"),". You'll need to install Node.js before using Mat erial App."),o.a.createElement(O,{variant:"body2",gutterBottom:!0,my:4},"Once"," ",o.a.createElement(h.a,{href:"https://nodejs.org/en/",target:"_blank"},"Node.js")," ","is installed, run ",o.a.createElement("code",null,"npm install")," to install the rest of Material App's dependencies. All dependencies will be downloaded to the ",o.a.createElement("code",null,"node_modules")," directory.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("code",null,"npm install")),o.a.createElement(O,{variant:"body2",gutterBottom:!0,my:4},"Now you're ready to modify the source files and generate new"," ",o.a.createElement("code",null,"build/"),"files. Material App is using webpack and webpack-serve to automatically detect file changes and start a local webserver at"," ",o.a.createElement("code",null,"http://localhost:3000"),".",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("code",null,"npm start"))))}function C(){return o.a.createElement(y,{mb:6},o.a.createElement(f.a,null,o.a.createElement(O,{variant:"h6",gutterBottom:!0},"Build tools"),o.a.createElement(O,{variant:"body2",gutterBottom:!0,my:4},"Start a local webserver at ",o.a.createElement("code",null,"http://localhost:3000")," and detect file changes:",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("code",null,"npm start")),o.a.createElement(O,{variant:"body2",gutterBottom:!0,my:4},"Compile, optimize, minify and uglify all source files to build/:",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("code",null,"npm run build"))))}t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{title:"Documentation"}),o.a.createElement(O,{variant:"h3",gutterBottom:!0,display:"inline"},"Documentation"),o.a.createElement(w,{"aria-label":"Breadcrumb",mt:2},o.a.createElement(h.a,{component:v,exact:!0,to:"/"},"Dashboard"),o.a.createElement(O,null,"Documentation")),o.a.createElement(j,{my:6}),o.a.createElement(g.a,{container:!0,spacing:6},o.a.createElement(g.a,{item:!0,xs:12,md:6},o.a.createElement(k,null),o.a.createElement(N,null)),o.a.createElement(g.a,{item:!0,xs:12,md:6},o.a.createElement(C,null),o.a.createElement(B,null))))}}}]);
//# sourceMappingURL=49.df457b94.chunk.js.map