(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1002:function(e,a,t){"use strict";var r=t(3),n=t(5),l=t(0),c=(t(7),t(6)),o=t(8),i=t(20),m=l.forwardRef(function(e,a){var t=e.absolute,o=void 0!==t&&t,i=e.classes,m=e.className,s=e.component,d=void 0===s?"hr":s,u=e.flexItem,E=void 0!==u&&u,b=e.light,v=void 0!==b&&b,h=e.orientation,f=void 0===h?"horizontal":h,p=e.role,g=void 0===p?"hr"!==d?"separator":void 0:p,y=e.variant,O=void 0===y?"fullWidth":y,j=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return l.createElement(d,Object(r.a)({className:Object(c.a)(i.root,m,"fullWidth"!==O&&i[O],o&&i.absolute,E&&i.flexItem,v&&i.light,"vertical"===f&&i.vertical),role:g,ref:a},j))});a.a=Object(o.a)(function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(i.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}},{name:"MuiDivider"})(m)},1003:function(e,a,t){"use strict";var r=t(3),n=t(5),l=t(0),c=(t(7),t(6)),o=t(196),i=t(8),m=l.forwardRef(function(e,a){var t=e.classes,i=e.className,m=e.raised,s=void 0!==m&&m,d=Object(n.a)(e,["classes","className","raised"]);return l.createElement(o.a,Object(r.a)({className:Object(c.a)(t.root,i),elevation:s?8:1,ref:a},d))});a.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(m)},1004:function(e,a,t){"use strict";var r=t(3),n=t(5),l=t(0),c=(t(7),t(6)),o=t(8),i=l.forwardRef(function(e,a){var t=e.classes,o=e.className,i=e.component,m=void 0===i?"div":i,s=Object(n.a)(e,["classes","className","component"]);return l.createElement(m,Object(r.a)({className:Object(c.a)(t.root,o),ref:a},s))});a.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},1005:function(e,a,t){"use strict";var r=t(3),n=t(60),l=t(5),c=t(0),o=(t(264),t(7),t(6)),i=t(8),m=t(112),s=t(20),d=t(76),u=Object(d.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),E=t(263);var b=Object(i.a)(function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(s.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}},{name:"PrivateBreadcrumbCollapsed"})(function(e){var a=e.classes,t=Object(l.a)(e,["classes"]);return c.createElement(E.a,Object(r.a)({component:"li",className:a.root,focusRipple:!0},t),c.createElement(u,{className:a.icon}))});var v=c.forwardRef(function(e,a){var t=e.children,i=e.classes,s=e.className,d=e.component,u=void 0===d?"nav":d,E=e.expandText,v=void 0===E?"Show path":E,h=e.itemsAfterCollapse,f=void 0===h?1:h,p=e.itemsBeforeCollapse,g=void 0===p?1:p,y=e.maxItems,O=void 0===y?8:y,j=e.separator,x=void 0===j?"/":j,z=Object(l.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),B=c.useState(!1),S=B[0],w=B[1],C=c.Children.toArray(t).filter(function(e){return c.isValidElement(e)}).map(function(e,a){return c.createElement("li",{className:i.li,key:"child-".concat(a)},e)});return c.createElement(m.a,Object(r.a)({ref:a,component:u,color:"textSecondary",className:Object(o.a)(i.root,s)},z),c.createElement("ol",{className:i.ol},function(e,a,t){return e.reduce(function(r,n,l){return l<e.length-1?r=r.concat(n,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(l),className:a},t)):r.push(n),r},[])}(S||O&&C.length<=O?C:function(e){return g+f>=e.length?e:[].concat(Object(n.a)(e.slice(0,g)),[c.createElement(b,{"aria-label":v,key:"ellipsis",onClick:function(e){w(!0);var a=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");a&&a.focus()}})],Object(n.a)(e.slice(e.length-f,e.length)))}(C),i.separator,x)))});a.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(v)},1017:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(139);a.a=Object(l.a)(n.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},1040:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(139);a.a=Object(l.a)(n.a.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},1041:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(139);a.a=Object(l.a)(n.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1092:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(139);a.a=Object(l.a)(n.a.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload")},1150:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(139);a.a=Object(l.a)(n.a.createElement("path",{d:"M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation")},1151:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(139);a.a=Object(l.a)(n.a.createElement("path",{d:"M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"}),"KeyboardVoice")},1152:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(139);a.a=Object(l.a)(n.a.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save")},1372:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(15),c=t(99),o=t(124),i=t.n(o),m=t(1003),s=t(475),d=t(995),u=t(499),E=t(1002),b=t(1005),v=t(1004),h=t(112),f=t(325),p=t(65),g=t(1017),y=t(1040),O=t(1150),j=t(1041),x=t(1092),z=t(1151),B=t(1152),S=t(948),w=n.a.forwardRef(function(e,a){return n.a.createElement(c.d,Object.assign({innerRef:a},e))}),C=Object(l.c)(m.a)(S.b),M=Object(l.c)(s.a)(S.b),N=Object(l.c)(d.a)(S.b),k=Object(l.c)(u.a)(S.b),L=Object(l.c)(E.a)(S.b),D=Object(l.c)(b.a)(S.b);function A(){return n.a.createElement(C,{mb:6},n.a.createElement(v.a,null,n.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"Contained Buttons"),n.a.createElement(h.a,{variant:"body2",gutterBottom:!0},"Contained buttons are high-emphasis, distinguished by their use of elevation and fill."),n.a.createElement(M,{mr:2,variant:"contained"},"Default"),n.a.createElement(M,{mr:2,variant:"contained",color:"primary"},"Primary"),n.a.createElement(M,{mr:2,variant:"contained",color:"secondary"},"Secondary"),n.a.createElement(M,{mr:2,variant:"contained",color:"secondary",disabled:!0},"Disabled"),n.a.createElement(M,{mr:2,variant:"contained",href:"#contained-buttons"},"Link")))}function R(){return n.a.createElement(C,{mb:6},n.a.createElement(v.a,null,n.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"Text Buttons"),n.a.createElement(h.a,{variant:"body2",gutterBottom:!0},"Text buttons are typically used for less-pronounced actions in your app."),n.a.createElement(M,{mr:2},"Default"),n.a.createElement(M,{mr:2,color:"primary"},"Primary"),n.a.createElement(M,{mr:2,color:"secondary"},"Secondary"),n.a.createElement(M,{mr:2,disabled:!0},"Disabled"),n.a.createElement(M,{mr:2,href:"#text-buttons"},"Link")))}function V(){return n.a.createElement(C,{mb:6},n.a.createElement(v.a,null,n.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"Outlined Buttons"),n.a.createElement(h.a,{variant:"body2",gutterBottom:!0},"Outlined buttons are medium-emphasis buttons which contain actions that are not that important."),n.a.createElement(M,{mr:2,variant:"outlined"},"Default"),n.a.createElement(M,{mr:2,variant:"outlined",color:"primary"},"Primary"),n.a.createElement(M,{mr:2,variant:"outlined",color:"secondary"},"Secondary"),n.a.createElement(M,{mr:2,variant:"outlined",disabled:!0},"Disabled"),n.a.createElement(M,{mr:2,variant:"outlined",href:"#outlined-buttons"},"Link")))}function H(){return n.a.createElement(C,{mb:6},n.a.createElement(v.a,null,n.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"Floating Action Buttons"),n.a.createElement(h.a,{variant:"body2",gutterBottom:!0},"A floating action button (FAB) performs the primary, or most common, action on a screen."),n.a.createElement(N,{mx:2,color:"primary","aria-label":"Add"},n.a.createElement(g.a,null)),n.a.createElement(N,{mx:2,color:"secondary","aria-label":"Edit"},n.a.createElement(y.a,null)),n.a.createElement(N,{mx:2,variant:"extended","aria-label":"Delete"},n.a.createElement(O.a,null),"Extended"),n.a.createElement(N,{mx:2,disabled:!0,"aria-label":"Delete"},n.a.createElement(j.a,null))))}function I(){return n.a.createElement(C,{mb:6},n.a.createElement(v.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"Button Sizes"),n.a.createElement(h.a,{variant:"body2",gutterBottom:!0},"Fancy larger or smaller buttons? Use the size property.")),n.a.createElement("div",null,n.a.createElement(M,{mr:2,size:"small"},"Small"),n.a.createElement(M,{mr:2,size:"medium"},"Medium"),n.a.createElement(M,{mr:2,size:"large"},"Large")),n.a.createElement("div",null,n.a.createElement(M,{mr:2,variant:"outlined",size:"small",color:"primary"},"Small"),n.a.createElement(M,{mr:2,variant:"outlined",size:"medium",color:"primary"},"Medium"),n.a.createElement(M,{mr:2,variant:"outlined",size:"large",color:"primary"},"Large")),n.a.createElement("div",null,n.a.createElement(M,{mr:2,variant:"contained",size:"small",color:"primary"},"Small"),n.a.createElement(M,{mr:2,variant:"contained",size:"medium",color:"primary"},"Medium"),n.a.createElement(M,{mr:2,variant:"contained",size:"large",color:"primary"},"Large")),n.a.createElement("div",null,n.a.createElement(N,{mx:2,size:"small",color:"secondary","aria-label":"Add"},n.a.createElement(g.a,null)),n.a.createElement(N,{mx:2,size:"medium",color:"secondary","aria-label":"Add"},n.a.createElement(g.a,null)),n.a.createElement(N,{mx:2,color:"secondary","aria-label":"Add"},n.a.createElement(g.a,null))),n.a.createElement("div",null,n.a.createElement(k,{mx:2,"aria-label":"Delete"},n.a.createElement(j.a,{fontSize:"small"})),n.a.createElement(k,{mx:2,"aria-label":"Delete"},n.a.createElement(j.a,null)),n.a.createElement(k,{mx:2,"aria-label":"Delete"},n.a.createElement(j.a,{fontSize:"large"})))))}function T(){return n.a.createElement(C,{mb:6},n.a.createElement(v.a,null,n.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"Icon Buttons"),n.a.createElement(h.a,{variant:"body2",gutterBottom:!0},"Sometimes you might want to have icons for certain button to enhance the UX."),n.a.createElement(M,{mr:2,variant:"contained",color:"primary"},"Add",n.a.createElement(g.a,null)),n.a.createElement(M,{mr:2,variant:"contained",color:"secondary"},"Edit",n.a.createElement(y.a,null)),n.a.createElement(M,{mr:2,variant:"contained",color:"default"},"Upload",n.a.createElement(x.a,null)),n.a.createElement(M,{mr:2,variant:"contained",disabled:!0,color:"secondary"},n.a.createElement(z.a,null),"Talk"),n.a.createElement(M,{mr:2,variant:"contained",size:"small"},n.a.createElement(B.a,null),"Save")))}a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{title:"Buttons"}),n.a.createElement(h.a,{variant:"h3",gutterBottom:!0,display:"inline"},"Buttons"),n.a.createElement(D,{"aria-label":"Breadcrumb",mt:2},n.a.createElement(f.a,{component:w,exact:!0,to:"/"},"Dashboard"),n.a.createElement(f.a,{component:w,exact:!0,to:"/"},"Components"),n.a.createElement(h.a,null,"Buttons")),n.a.createElement(L,{my:6}),n.a.createElement(p.a,{container:!0,spacing:6},n.a.createElement(p.a,{item:!0,xs:12,md:6},n.a.createElement(A,null),n.a.createElement(V,null),n.a.createElement(R,null),n.a.createElement(T,null)),n.a.createElement(p.a,{item:!0,xs:12,md:6},n.a.createElement(I,null),n.a.createElement(H,null))))}}}]);
//# sourceMappingURL=25.ad8b1ca3.chunk.js.map