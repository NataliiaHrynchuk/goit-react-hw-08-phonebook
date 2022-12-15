"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[753],{753:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var r=n(4270),o=n(9434),i=n(885),a=n(2791),l=n(277),s=n(4942),c=n(3366),u=n(7462),d=n(8182),p=n(4419),f=n(2065),v=n(5513),m=n(9853),h=n(286),g=n(5878),x=n(1217);function y(e){return(0,x.Z)("MuiAlert",e)}var Z=(0,g.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),b=n(2009);function C(e){return(0,x.Z)("MuiIconButton",e)}var j=(0,g.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),k=n(3329),w=["edge","children","className","color","disabled","disableFocusRipple","size"],z=(0,l.ZP)(b.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat((0,m.Z)(n.color))],n.edge&&t["edge".concat((0,m.Z)(n.edge))],t["size".concat((0,m.Z)(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,u.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,f.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t,n=e.theme,r=e.ownerState,o=null==(t=(n.vars||n).palette)?void 0:t[r.color];return(0,u.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,u.Z)({color:null==o?void 0:o.main},!r.disableRipple&&{"&:hover":(0,u.Z)({},o&&{backgroundColor:n.vars?"rgba(".concat(o.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,f.Fq)(o.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===r.size&&{padding:5,fontSize:n.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:n.typography.pxToRem(28)},(0,s.Z)({},"&.".concat(j.disabled),{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}))})),S=a.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiIconButton"}),r=n.edge,o=void 0!==r&&r,i=n.children,a=n.className,l=n.color,s=void 0===l?"default":l,f=n.disabled,h=void 0!==f&&f,g=n.disableFocusRipple,x=void 0!==g&&g,y=n.size,Z=void 0===y?"medium":y,b=(0,c.Z)(n,w),j=(0,u.Z)({},n,{edge:o,color:s,disabled:h,disableFocusRipple:x,size:Z}),S=function(e){var t=e.classes,n=e.disabled,r=e.color,o=e.edge,i=e.size,a={root:["root",n&&"disabled","default"!==r&&"color".concat((0,m.Z)(r)),o&&"edge".concat((0,m.Z)(o)),"size".concat((0,m.Z)(i))]};return(0,p.Z)(a,C,t)}(j);return(0,k.jsx)(z,(0,u.Z)({className:(0,d.Z)(S.root,a),centerRipple:!0,focusRipple:!x,disabled:h,ref:t,ownerState:j},b,{children:i}))})),E=n(1245),A=(0,E.Z)((0,k.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),R=(0,E.Z)((0,k.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),I=(0,E.Z)((0,k.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),M=(0,E.Z)((0,k.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),L=(0,E.Z)((0,k.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),P=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],T=(0,l.ZP)(h.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,m.Z)(n.color||n.severity))]]}})((function(e){var t=e.theme,n=e.ownerState,r="light"===t.palette.mode?f._j:f.$n,o="light"===t.palette.mode?f.$n:f._j,i=n.color||n.severity;return(0,u.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},i&&"standard"===n.variant&&(0,s.Z)({color:t.vars?t.vars.palette.Alert["".concat(i,"Color")]:r(t.palette[i].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(i,"StandardBg")]:o(t.palette[i].light,.9)},"& .".concat(Z.icon),t.vars?{color:t.vars.palette.Alert["".concat(i,"IconColor")]}:{color:"dark"===t.palette.mode?t.palette[i].main:t.palette[i].light}),i&&"outlined"===n.variant&&(0,s.Z)({color:t.vars?t.vars.palette.Alert["".concat(i,"Color")]:r(t.palette[i].light,.6),border:"1px solid ".concat((t.vars||t).palette[i].light)},"& .".concat(Z.icon),t.vars?{color:t.vars.palette.Alert["".concat(i,"IconColor")]}:{color:"dark"===t.palette.mode?t.palette[i].main:t.palette[i].light}),i&&"filled"===n.variant&&(0,u.Z)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(i,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(i,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[i].dark:t.palette[i].main,color:t.palette.getContrastText("dark"===t.palette.mode?t.palette[i].dark:t.palette[i].main)}))})),F=(0,l.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),N=(0,l.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),O=(0,l.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),B={success:(0,k.jsx)(A,{fontSize:"inherit"}),warning:(0,k.jsx)(R,{fontSize:"inherit"}),error:(0,k.jsx)(I,{fontSize:"inherit"}),info:(0,k.jsx)(M,{fontSize:"inherit"})},W=a.forwardRef((function(e,t){var n,r,o,i,a,l,s=(0,v.Z)({props:e,name:"MuiAlert"}),f=s.action,h=s.children,g=s.className,x=s.closeText,Z=void 0===x?"Close":x,b=s.color,C=s.components,j=void 0===C?{}:C,w=s.componentsProps,z=void 0===w?{}:w,E=s.icon,A=s.iconMapping,R=void 0===A?B:A,I=s.onClose,M=s.role,W=void 0===M?"alert":M,_=s.severity,q=void 0===_?"success":_,D=s.slotProps,H=void 0===D?{}:D,V=s.slots,$=void 0===V?{}:V,K=s.variant,X=void 0===K?"standard":K,Y=(0,c.Z)(s,P),G=(0,u.Z)({},s,{color:b,severity:q,variant:X}),J=function(e){var t=e.variant,n=e.color,r=e.severity,o=e.classes,i={root:["root","".concat(t).concat((0,m.Z)(n||r)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return(0,p.Z)(i,y,o)}(G),U=null!=(n=null!=(r=$.closeButton)?r:j.CloseButton)?n:S,Q=null!=(o=null!=(i=$.closeIcon)?i:j.CloseIcon)?o:L,ee=null!=(a=H.closeButton)?a:z.closeButton,te=null!=(l=H.closeIcon)?l:z.closeIcon;return(0,k.jsxs)(T,(0,u.Z)({role:W,elevation:0,ownerState:G,className:(0,d.Z)(J.root,g),ref:t},Y,{children:[!1!==E?(0,k.jsx)(F,{ownerState:G,className:J.icon,children:E||R[q]||B[q]}):null,(0,k.jsx)(N,{ownerState:G,className:J.message,children:h}),null!=f?(0,k.jsx)(O,{ownerState:G,className:J.action,children:f}):null,null==f&&I?(0,k.jsx)(O,{ownerState:G,className:J.action,children:(0,k.jsx)(U,(0,u.Z)({size:"small","aria-label":Z,title:Z,color:"inherit",onClick:I},ee,{children:(0,k.jsx)(Q,(0,u.Z)({fontSize:"small"},te))}))}):null]}))})),_=n(6752),q=n(2977),D=n(7933),H=n(4142),V=n(6780),$=n(8195),K=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function X(e,t,n){var r,o=function(e,t,n){var r,o=t.getBoundingClientRect(),i=n&&n.getBoundingClientRect(),a=(0,$.Z)(t);if(t.fakeTransform)r=t.fakeTransform;else{var l=a.getComputedStyle(t);r=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}var s=0,c=0;if(r&&"none"!==r&&"string"===typeof r){var u=r.split("(")[1].split(")")[0].split(",");s=parseInt(u[4],10),c=parseInt(u[5],10)}return"left"===e?"translateX(".concat(i?i.right+s-o.left:a.innerWidth+s-o.left,"px)"):"right"===e?"translateX(-".concat(i?o.right-i.left-s:o.left+o.width-s,"px)"):"up"===e?"translateY(".concat(i?i.bottom+c-o.top:a.innerHeight+c-o.top,"px)"):"translateY(-".concat(i?o.top-i.top+o.height-c:o.top+o.height-c,"px)")}(e,t,"function"===typeof(r=n)?r():r);o&&(t.style.webkitTransform=o,t.style.transform=o)}var Y=a.forwardRef((function(e,t){var n=(0,H.Z)(),r={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},o={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},i=e.addEndListener,l=e.appear,s=void 0===l||l,d=e.children,p=e.container,f=e.direction,v=void 0===f?"down":f,m=e.easing,h=void 0===m?r:m,g=e.in,x=e.onEnter,y=e.onEntered,Z=e.onEntering,b=e.onExit,C=e.onExited,j=e.onExiting,w=e.style,z=e.timeout,S=void 0===z?o:z,E=e.TransitionComponent,A=void 0===E?_.ZP:E,R=(0,c.Z)(e,K),I=a.useRef(null),M=(0,D.Z)(d.ref,I,t),L=function(e){return function(t){e&&(void 0===t?e(I.current):e(I.current,t))}},P=L((function(e,t){X(v,e,p),(0,V.n)(e),x&&x(e,t)})),T=L((function(e,t){var r=(0,V.C)({timeout:S,style:w,easing:h},{mode:"enter"});e.style.webkitTransition=n.transitions.create("-webkit-transform",(0,u.Z)({},r)),e.style.transition=n.transitions.create("transform",(0,u.Z)({},r)),e.style.webkitTransform="none",e.style.transform="none",Z&&Z(e,t)})),F=L(y),N=L(j),O=L((function(e){var t=(0,V.C)({timeout:S,style:w,easing:h},{mode:"exit"});e.style.webkitTransition=n.transitions.create("-webkit-transform",t),e.style.transition=n.transitions.create("transform",t),X(v,e,p),b&&b(e)})),B=L((function(e){e.style.webkitTransition="",e.style.transition="",C&&C(e)})),W=a.useCallback((function(){I.current&&X(v,I.current,p)}),[v,p]);return a.useEffect((function(){if(!g&&"down"!==v&&"right"!==v){var e=(0,q.Z)((function(){I.current&&X(v,I.current,p)})),t=(0,$.Z)(I.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}}),[v,g,p]),a.useEffect((function(){g||W()}),[g,W]),(0,k.jsx)(A,(0,u.Z)({nodeRef:I,onEnter:P,onEntered:F,onEntering:T,onExit:O,onExited:B,onExiting:N,addEndListener:function(e){i&&i(I.current,e)},appear:s,in:g,timeout:S},R,{children:function(e,t){return a.cloneElement(d,(0,u.Z)({ref:M,style:(0,u.Z)({visibility:"exited"!==e||g?void 0:"hidden"},w,d.props.style)},t))}}))})),G=n(4565),J=n(8055),U=n(5953),Q=n(5843),ee=n(7205),te=(0,E.Z)((0,k.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ne=n(6052),re=function(e){return e.filter},oe="NOT_FOUND";var ie=function(e,t){return e===t};function ae(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,o=void 0===r?ie:r,i=n.maxSize,a=void 0===i?1:i,l=n.resultEqualityCheck,s=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(o),c=1===a?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:oe},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(s):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var o=n[r];return r>0&&(n.splice(r,1),n.unshift(o)),o.value}return oe}return{get:r,put:function(t,o){r(t)===oe&&(n.unshift({key:t,value:o}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(a,s);function u(){var t=c.get(arguments);if(t===oe){if(t=e.apply(null,arguments),l){var n=c.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}c.put(arguments,t)}return t}return u.clearCache=function(){return c.clear()},u}function le(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function se(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i,a=0,l={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(l=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var c=l,u=c.memoizeOptions,d=void 0===u?n:u,p=Array.isArray(d)?d:[d],f=le(r),v=e.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(p)),m=e((function(){for(var e=[],t=f.length,n=0;n<t;n++)e.push(f[n].apply(null,arguments));return i=v.apply(null,e)}));return Object.assign(m,{resultFunc:s,memoizedResultFunc:v,dependencies:f,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return o}var ce=se(ae),ue=function(e){return e.contacts.items},de=function(e){return e.contacts.isloading},pe=ce([ue,re],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),fe=(0,l.ZP)(W)({backgroundColor:"#ad1457"});function ve(){var e=(0,o.I0)(),t=(0,a.useState)(""),n=(0,i.Z)(t,2),r=n[0],l=n[1],s=(0,a.useState)(""),c=(0,i.Z)(s,2),u=c[0],d=c[1],p=(0,a.useState)(!1),f=(0,i.Z)(p,2),v=f[0],m=f[1],g=(0,a.useState)(!1),x=(0,i.Z)(g,2),y=x[0],Z=x[1],b=(0,o.v9)(ue),C=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":l(r.trim());break;case"number":d(r.trim());break;default:return}};return(0,k.jsxs)(h.Z,{sx:{position:"relative",minWidth:400,minHeight:200,margin:"20px auto 0 auto",p:2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#ebe6f3"},children:[(0,k.jsx)(Y,{direction:"down",in:v,sx:{minWidth:400,position:"absolute",top:0},children:(0,k.jsxs)(fe,{variant:"filled",severity:"error",action:(0,k.jsx)(S,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){m(!1)},children:(0,k.jsx)(te,{fontSize:"inherit"})}),children:[r," is already in contacts."]})}),(0,k.jsx)(Y,{direction:"down",in:y,sx:{minWidth:400,position:"absolute",top:0},children:(0,k.jsxs)(fe,{variant:"filled",severity:"error",action:(0,k.jsx)(S,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){Z(!1)},children:(0,k.jsx)(te,{fontSize:"inherit"})}),children:[u," is already in contacts."]})}),(0,k.jsx)(G.Z,{variant:"h6",sx:{mb:2},children:"Enter a new contact"}),(0,k.jsx)(J.Z,{component:"form",onSubmit:function(t){t.preventDefault();var n={name:r,number:u},o=r.toLowerCase(),i=b.find((function(e){return e.name.toLowerCase()===o})),a=b.find((function(e){return e.number===u}));i?m(!0):a?Z(!0):(e((0,ne.uK)(n)),l(" "),d(" "))},children:(0,k.jsxs)(U.ZP,{container:!0,direction:"column",gap:1,justifyContent:"center",alignItems:"center",children:[(0,k.jsx)(G.Z,{component:"label",htmlFor:"id-name",children:"Name "}),(0,k.jsx)(Q.Z,{type:"text",name:"name",id:"id-name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,size:"small",sx:{backgroundColor:"#fff"},onChange:C}),(0,k.jsx)(G.Z,{component:"label",htmlFor:"id-number",children:"Number "}),(0,k.jsx)(Q.Z,{type:"tel",name:"number",id:"id-numder",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:u,onChange:C,size:"small",sx:{backgroundColor:"#fff"}}),(0,k.jsx)(ee.Z,{type:"submit",children:"Add contact"})]})})]})}var me=n(6401),he=n(6015),ge=function(){var e=(0,o.I0)(),t=(0,o.v9)(re);return(0,k.jsxs)(he.Z,{sx:{display:"flex",flexDirection:"column",width:"300px",alignItems:"center",gap:"10px"},children:[(0,k.jsx)("label",{htmlFor:"id-filter",children:"Find contact by name"}),(0,k.jsx)(Q.Z,{type:"text",name:"filter",id:"id-filter",size:"small",value:t,onChange:function(t){e((0,me.T)(t.currentTarget.value))}})]})},xe=function(){var e=(0,o.I0)(),t=(0,o.v9)(pe);return(0,k.jsx)(U.ZP,{component:"ul",container:!0,display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",children:t.map((function(t){var n=t.id,r=t.name,o=t.number;return(0,k.jsxs)(U.ZP,{container:!0,spasing:3,as:"li",display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-around",sx:{width:"400px",padding:"6px",backgroundColor:"#ebe6f3",borderRadius:"4px"},children:[(0,k.jsx)(U.ZP,{item:!0,xs:3,children:(0,k.jsxs)(G.Z,{variant:"body1",children:[r,":"]})}),(0,k.jsx)(U.ZP,{item:!0,xs:3,children:(0,k.jsx)(G.Z,{variant:"body2",children:o})}),(0,k.jsx)(U.ZP,{item:!0,xs:2,children:(0,k.jsx)(ee.Z,{variant:"contained",size:"small",type:"button",w:"60px",onClick:function(){return e((0,ne.GK)(n))},children:"Delete"})})]},n)}))})};function ye(){var e=(0,o.I0)(),t=(0,o.v9)(de),n=(0,o.v9)(ue);return(0,a.useEffect)((function(){e((0,ne.yF)())}),[e]),(0,k.jsxs)(he.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[(0,k.jsx)(r.q,{children:(0,k.jsx)(G.Z,{marginTop:"100px",variant:"h1",children:"Phonebook"})}),(0,k.jsx)(ve,{}),(0,k.jsx)("div",{children:t&&"Request in progress"}),(0,k.jsx)(G.Z,{component:"h2",variant:"h3",marginTop:"-10px",children:"Contacts"}),n.length>0&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(ge,{}),(0,k.jsx)(xe,{})]})]})}}}]);
//# sourceMappingURL=753.cbed6b7e.chunk.js.map