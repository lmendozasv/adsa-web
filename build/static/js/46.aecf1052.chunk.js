(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1002:function(e,t,a){"use strict";var n=a(3),r=a(5),c=a(0),l=(a(7),a(6)),i=a(8),o=a(20),s=c.forwardRef(function(e,t){var a=e.absolute,i=void 0!==a&&a,o=e.classes,s=e.className,d=e.component,m=void 0===d?"hr":d,u=e.flexItem,h=void 0!==u&&u,p=e.light,b=void 0!==p&&p,g=e.orientation,f=void 0===g?"horizontal":g,v=e.role,E=void 0===v?"hr"!==m?"separator":void 0:v,k=e.variant,y=void 0===k?"fullWidth":k,O=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return c.createElement(m,Object(n.a)({className:Object(l.a)(o.root,s,"fullWidth"!==y&&o[y],i&&o.absolute,h&&o.flexItem,b&&o.light,"vertical"===f&&o.vertical),role:E,ref:t},O))});t.a=Object(i.a)(function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(o.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}},{name:"MuiDivider"})(s)},1005:function(e,t,a){"use strict";var n=a(3),r=a(60),c=a(5),l=a(0),i=(a(264),a(7),a(6)),o=a(8),s=a(112),d=a(20),m=a(76),u=Object(m.a)(l.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=a(263);var p=Object(o.a)(function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}},{name:"PrivateBreadcrumbCollapsed"})(function(e){var t=e.classes,a=Object(c.a)(e,["classes"]);return l.createElement(h.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),l.createElement(u,{className:t.icon}))});var b=l.forwardRef(function(e,t){var a=e.children,o=e.classes,d=e.className,m=e.component,u=void 0===m?"nav":m,h=e.expandText,b=void 0===h?"Show path":h,g=e.itemsAfterCollapse,f=void 0===g?1:g,v=e.itemsBeforeCollapse,E=void 0===v?1:v,k=e.maxItems,y=void 0===k?8:k,O=e.separator,w=void 0===O?"/":O,x=Object(c.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),j=l.useState(!1),C=j[0],S=j[1],$=l.Children.toArray(a).filter(function(e){return l.isValidElement(e)}).map(function(e,t){return l.createElement("li",{className:o.li,key:"child-".concat(t)},e)});return l.createElement(s.a,Object(n.a)({ref:t,component:u,color:"textSecondary",className:Object(i.a)(o.root,d)},x),l.createElement("ol",{className:o.ol},function(e,t,a){return e.reduce(function(n,r,c){return c<e.length-1?n=n.concat(r,l.createElement("li",{"aria-hidden":!0,key:"separator-".concat(c),className:t},a)):n.push(r),n},[])}(C||y&&$.length<=y?$:function(e){return E+f>=e.length?e:[].concat(Object(r.a)(e.slice(0,E)),[l.createElement(p,{"aria-label":b,key:"ellipsis",onClick:function(e){S(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-f,e.length)))}($),o.separator,w)))});t.a=Object(o.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b)},1020:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(139);t.a=Object(c.a)(r.a.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList")},1041:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(139);t.a=Object(c.a)(r.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1072:function(e,t,a){"use strict";var n=a(3),r=a(5),c=a(0),l=(a(7),a(6)),i=a(8),o=a(20),s=a(13),d=a(329),m=c.forwardRef(function(e,t){var a=e.classes,i=e.className,o=e.color,m=void 0===o?"secondary":o,u=e.edge,h=void 0!==u&&u,p=e.size,b=void 0===p?"medium":p,g=Object(r.a)(e,["classes","className","color","edge","size"]),f=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(l.a)(a.root,i,{start:a.edgeStart,end:a.edgeEnd}[h],"small"===b&&a["size".concat(Object(s.a)(b))])},c.createElement(d.a,Object(n.a)({type:"checkbox",icon:f,checkedIcon:f,classes:{root:Object(l.a)(a.switchBase,a["color".concat(Object(s.a)(m))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},g)),c.createElement("span",{className:a.track}))});t.a=Object(i.a)(function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle"},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(o.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(o.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}},{name:"MuiSwitch"})(m)},2692:function(e,t,a){"use strict";a.r(t);var n,r=a(100),c=a(16),l=a(0),i=a.n(l),o=a(15),s=a(99),d=a(124),m=a.n(d),u=a(1002),h=a(1005),p=a(196),b=a(1056),g=a(1053),f=a(1054),v=a(479),E=a(2711),k=a(993),y=a(112),O=a(2710),w=a(499),x=a(2674),j=a(1055),C=a(1057),S=a(2712),$=a(477),z=a(1072),N=a(325),P=a(65),R=a(1041),I=a(1020),B=a(948),M=i.a.forwardRef(function(e,t){return i.a.createElement(s.d,Object.assign({innerRef:t},e))}),A=Object(o.c)(u.a)(B.b),D=Object(o.c)(h.a)(B.b),T=Object(o.c)(p.a)(B.b),L=o.c.div(n||(n=Object(c.a)(["\n  flex: 1 1 100%;\n"])));function F(e,t,a,n,r){return{name:e,calories:t,fat:a,carbs:n,protein:r}}var H=[F("Cupcake",305,3.7,67,4.3),F("Donut",452,25,51,4.9),F("Eclair",262,16,24,6),F("Frozen yoghurt",159,6,24,4),F("Gingerbread",356,16,49,3.9),F("Honeycomb",408,3.2,87,6.5),F("Ice cream sandwich",237,9,37,4.3),F("Jelly Bean",375,0,94,0),F("KitKat",518,26,65,7),F("Lollipop",392,.2,98,0),F("Marshmallow",318,0,81,2),F("Nougat",360,19,9,37),F("Oreo",437,18,63,4)];function V(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var q=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}];function J(e){var t=e.onSelectAllClick,a=e.order,n=e.orderBy,r=e.numSelected,c=e.rowCount,l=e.onRequestSort;return i.a.createElement(b.a,null,i.a.createElement(g.a,null,i.a.createElement(f.a,{padding:"checkbox"},i.a.createElement(v.a,{indeterminate:r>0&&r<c,checked:c>0&&r===c,onChange:t,inputProps:{"aria-label":"select all desserts"}})),q.map(function(e){return i.a.createElement(f.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&a},i.a.createElement(E.a,{active:n===e.id,direction:n===e.id?a:"asc",onClick:(t=e.id,function(e){l(e,t)})},e.label));var t})))}var W=function(e){var t=e.numSelected;return i.a.createElement(k.a,null,i.a.createElement("div",null,t>0?i.a.createElement(y.a,{color:"inherit",variant:"subtitle1"},t," selected"):i.a.createElement(y.a,{variant:"h6",id:"tableTitle"},"Nutrition")),i.a.createElement(L,null),i.a.createElement("div",null,t>0?i.a.createElement(O.a,{title:"Delete"},i.a.createElement(w.a,{"aria-label":"Delete"},i.a.createElement(R.a,null))):i.a.createElement(O.a,{title:"Filter list"},i.a.createElement(w.a,{"aria-label":"Filter list"},i.a.createElement(I.a,null)))))};function K(){var e=i.a.useState("asc"),t=Object(r.a)(e,2),a=t[0],n=t[1],c=i.a.useState("calories"),l=Object(r.a)(c,2),o=l[0],s=l[1],d=i.a.useState([]),m=Object(r.a)(d,2),u=m[0],h=m[1],p=i.a.useState(0),b=Object(r.a)(p,2),E=b[0],k=b[1],y=i.a.useState(!1),O=Object(r.a)(y,2),w=O[0],N=O[1],P=i.a.useState(10),R=Object(r.a)(P,2),I=R[0],B=R[1],M=I-Math.min(I,H.length-E*I);return i.a.createElement("div",null,i.a.createElement(T,null,i.a.createElement(W,{numSelected:u.length}),i.a.createElement(x.a,null,i.a.createElement(j.a,{"aria-labelledby":"tableTitle",size:w?"small":"medium","aria-label":"enhanced table"},i.a.createElement(J,{numSelected:u.length,order:a,orderBy:o,onSelectAllClick:function(e){if(e.target.checked){var t=H.map(function(e){return e.name});h(t)}else h([])},onRequestSort:function(e,t){n(o===t&&"asc"===a?"desc":"asc"),s(t)},rowCount:H.length}),i.a.createElement(C.a,null,function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})}(H,function(e,t){return"desc"===e?function(e,a){return V(e,a,t)}:function(e,a){return-V(e,a,t)}}(a,o)).slice(E*I,E*I+I).map(function(e,t){var a,n=(a=e.name,-1!==u.indexOf(a)),r="enhanced-table-checkbox-".concat(t);return i.a.createElement(g.a,{hover:!0,onClick:function(t){return function(e,t){var a=u.indexOf(t),n=[];-1===a?n=n.concat(u,t):0===a?n=n.concat(u.slice(1)):a===u.length-1?n=n.concat(u.slice(0,-1)):a>0&&(n=n.concat(u.slice(0,a),u.slice(a+1))),h(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.name,selected:n},i.a.createElement(f.a,{padding:"checkbox"},i.a.createElement(v.a,{checked:n,inputProps:{"aria-labelledby":r}})),i.a.createElement(f.a,{component:"th",id:r,scope:"row",padding:"none"},e.name),i.a.createElement(f.a,{align:"right"},e.calories),i.a.createElement(f.a,{align:"right"},e.fat),i.a.createElement(f.a,{align:"right"},e.carbs),i.a.createElement(f.a,{align:"right"},e.protein))}),M>0&&i.a.createElement(g.a,{style:{height:(w?33:53)*M}},i.a.createElement(f.a,{colSpan:6}))))),i.a.createElement(S.a,{rowsPerPageOptions:[5,10,25],component:"div",count:H.length,rowsPerPage:I,page:E,onChangePage:function(e,t){k(t)},onChangeRowsPerPage:function(e){B(parseInt(e.target.value,10)),k(0)}})),i.a.createElement($.a,{control:i.a.createElement(z.a,{checked:w,onChange:function(e){N(e.target.checked)}}),label:"Dense padding"}))}t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:"Advanced Table"}),i.a.createElement(y.a,{variant:"h3",gutterBottom:!0,display:"inline"},"Advanced Table"),i.a.createElement(D,{"aria-label":"Breadcrumb",mt:2},i.a.createElement(N.a,{component:M,exact:!0,to:"/"},"Dashboard"),i.a.createElement(N.a,{component:M,exact:!0,to:"/"},"Tables"),i.a.createElement(y.a,null,"Advanced Table")),i.a.createElement(A,{my:6}),i.a.createElement(P.a,{container:!0,spacing:6},i.a.createElement(P.a,{item:!0,xs:12},i.a.createElement(K,null))))}}}]);
//# sourceMappingURL=46.aecf1052.chunk.js.map